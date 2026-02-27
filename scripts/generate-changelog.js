#!/usr/bin/env node

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const CHANGELOG_FILE = join(rootDir, 'CHANGELOG.md');

// Colors for console output
const colors = {
	reset: '\x1b[0m',
	bright: '\x1b[1m',
	green: '\x1b[32m',
	blue: '\x1b[34m',
	yellow: '\x1b[33m',
};

function log(message, color = 'reset') {
	console.log(`${colors[color]}${message}${colors.reset}`);
}

function execCommand(command) {
	try {
		return execSync(command, { encoding: 'utf-8', cwd: rootDir }).trim();
	} catch (error) {
		return '';
	}
}

function getPackageVersion() {
	const packageJson = JSON.parse(readFileSync(join(rootDir, 'package.json'), 'utf-8'));
	return packageJson.version;
}

function getCommitsSinceLastTag() {
	// Get last tag
	const lastTag = execCommand('git describe --tags --abbrev=0 2>/dev/null');

	let commits;
	if (lastTag) {
		// Get commits since last tag
		commits = execCommand(`git log ${lastTag}..HEAD --pretty=format:"%H|%s|%an|%ad" --date=short`);
	} else {
		// No tags yet, get all commits
		commits = execCommand('git log --pretty=format:"%H|%s|%an|%ad" --date=short');
	}

	if (!commits) return [];

	return commits.split('\n').map(line => {
		const [hash, subject, author, date] = line.split('|');
		return { hash: hash.slice(0, 7), subject, author, date };
	});
}

function categorizeCommit(subject) {
	const lower = subject.toLowerCase();

	// Conventional Commits format
	const conventionalMatch = subject.match(/^(\w+)(\(.+\))?:/);
	if (conventionalMatch) {
		const type = conventionalMatch[1];
		const scope = conventionalMatch[2] ? conventionalMatch[2].slice(1, -1) : null;
		const description = subject.replace(/^(\w+)(\(.+\))?:\s*/, '');

		const categoryMap = {
			feat: 'Features',
			feature: 'Features',
			fix: 'Bug Fixes',
			bugfix: 'Bug Fixes',
			docs: 'Documentation',
			doc: 'Documentation',
			style: 'Styles',
			refactor: 'Code Refactoring',
			perf: 'Performance Improvements',
			test: 'Tests',
			build: 'Build System',
			ci: 'Continuous Integration',
			chore: 'Chores',
			revert: 'Reverts',
		};

		return {
			category: categoryMap[type] || 'Other Changes',
			description,
			scope,
			type,
		};
	}

	// Fallback categorization
	if (lower.includes('feat') || lower.includes('feature') || lower.includes('add')) {
		return { category: 'Features', description: subject, scope: null, type: 'feat' };
	}
	if (lower.includes('fix') || lower.includes('bug')) {
		return { category: 'Bug Fixes', description: subject, scope: null, type: 'fix' };
	}
	if (lower.includes('doc')) {
		return { category: 'Documentation', description: subject, scope: null, type: 'docs' };
	}
	if (lower.includes('test')) {
		return { category: 'Tests', description: subject, scope: null, type: 'test' };
	}
	if (lower.includes('refactor')) {
		return { category: 'Code Refactoring', description: subject, scope: null, type: 'refactor' };
	}
	if (lower.includes('perf')) {
		return { category: 'Performance Improvements', description: subject, scope: null, type: 'perf' };
	}

	return { category: 'Other Changes', description: subject, scope: null, type: 'other' };
}

function generateChangelogEntry(version, commits) {
	const date = new Date().toISOString().split('T')[0];
	const repoUrl = 'https://github.com/nDriaDev/react-tools';

	let entry = `## [${version}](${repoUrl}/releases/tag/v${version}) - ${date}\n\n`;

	if (commits.length === 0) {
		entry += '- Initial release\n\n';
		return entry;
	}

	// Group commits by category
	const categorized = {};
	commits.forEach(commit => {
		const { category, description, scope } = categorizeCommit(commit.subject);
		if (!categorized[category]) {
			categorized[category] = [];
		}
		categorized[category].push({ ...commit, description, scope });
	});

	// Order categories
	const categoryOrder = [
		'Features',
		'Bug Fixes',
		'Performance Improvements',
		'Code Refactoring',
		'Documentation',
		'Tests',
		'Build System',
		'Continuous Integration',
		'Chores',
		'Reverts',
		'Other Changes',
	];

	categoryOrder.forEach(category => {
		if (categorized[category] && categorized[category].length > 0) {
			entry += `### ${category}\n\n`;

			categorized[category].forEach(commit => {
				const scopeText = commit.scope ? `**${commit.scope}**: ` : '';
				entry += `- ${scopeText}${commit.description} ([${commit.hash}](${repoUrl}/commit/${commit.hash}))\n`;
			});

			entry += '\n';
		}
	});

	return entry;
}

function updateChangelog() {
	log('📝 Generating changelog...', 'blue');

	const version = getPackageVersion();
	log(`Version: ${version}`, 'yellow');

	const commits = getCommitsSinceLastTag();
	log(`Found ${commits.length} commit(s) since last release`, 'yellow');

	const newEntry = generateChangelogEntry(version, commits);

	let changelog;
	if (existsSync(CHANGELOG_FILE)) {
		changelog = readFileSync(CHANGELOG_FILE, 'utf-8');

		// Check if this version already exists in changelog
		if (changelog.includes(`## [${version}]`)) {
			log('⚠️  Version already exists in CHANGELOG.md, updating entry...', 'yellow');
			// Remove existing entry for this version
			const versionRegex = new RegExp(`## \\[${version}\\].*?(?=## \\[|$)`, 's');
			changelog = changelog.replace(versionRegex, '');
		}

		// Add new entry after header
		const headerEnd = changelog.indexOf('\n\n') + 2;
		changelog = changelog.slice(0, headerEnd) + newEntry + changelog.slice(headerEnd);
	} else {
		// Create new changelog
		changelog = `# Changelog\n\nAll notable changes to this project will be documented in this file.\n\nThe format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),\nand this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).\n\n${newEntry}`;
	}

	writeFileSync(CHANGELOG_FILE, changelog, 'utf-8');
	log('✅ Changelog updated successfully!', 'green');
}

// Run
try {
	updateChangelog();
} catch (error) {
	log(`❌ Error: ${error.message}`, 'red');
	process.exit(1);
}
