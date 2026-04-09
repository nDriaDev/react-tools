#!/bin/bash

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Version type (patch, minor, major)
VERSION_TYPE=$1

if [ -z "$VERSION_TYPE" ]; then
    echo -e "${RED}❌ Error: Version type required (patch, minor, or major)${NC}"
    echo "Usage: bash scripts/release.sh [patch|minor|major]"
    exit 1
fi

if [[ ! "$VERSION_TYPE" =~ ^(patch|minor|major)$ ]]; then
    echo -e "${RED}❌ Error: Invalid version type '$VERSION_TYPE'${NC}"
    echo "Valid types: patch, minor, major"
    exit 1
fi

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}🚀 Starting Release Process - $VERSION_TYPE version bump${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# Check if git working directory is clean
if [ -n "$(git status --porcelain)" ]; then
    echo -e "${RED}❌ Error: Working directory is not clean${NC}"
    echo "Please commit or stash your changes before releasing"
    git status --short
    exit 1
fi

# Check if on main branch (optional, comment out if not needed)
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ] && [ "$CURRENT_BRANCH" != "master" ]; then
    echo -e "${YELLOW}⚠️  Warning: Not on main/master branch (current: $CURRENT_BRANCH)${NC}"
    if [ "$CI" = "true" ]; then
        echo -e "${YELLOW}CI mode: continuing without confirmation${NC}"
    else
        read -p "Continue anyway? (y/N) " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            exit 1
        fi
    fi
fi

# Get current version
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo -e "${BLUE}📦 Current version: ${YELLOW}$CURRENT_VERSION${NC}"

# Run pre-release checks
echo -e "\n${BLUE}🔍 Running pre-release checks...${NC}"

echo -e "${BLUE}   1/4 Running linter...${NC}"
pnpm run lint || {
    echo -e "${RED}❌ Linting failed${NC}"
    exit 1
}

echo -e "${BLUE}   2/4 Running type check...${NC}"
pnpm run typecheck || {
    echo -e "${RED}❌ Type checking failed${NC}"
    exit 1
}

echo -e "${BLUE}   3/4 Running tests...${NC}"
pnpm run test:run || {
    echo -e "${RED}❌ Tests failed${NC}"
    exit 1
}

echo -e "${BLUE}   4/4 Building package...${NC}"
pnpm run build || {
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
}

# DOCS generated from github action
# echo -e "${BLUE}   5/5 Building documentation...${NC}"
# pnpm run docs:build || {
#     echo -e "${RED}❌ Documentation build failed${NC}"
#     exit 1
# }

echo -e "${GREEN}✅ All pre-release checks passed!${NC}"

# Bump version (this will also run 'version' script which updates changelog)
echo -e "\n${BLUE}📝 Bumping version ($VERSION_TYPE)...${NC}"
pnpm version $VERSION_TYPE --no-git-tag-version

# Get new version
NEW_VERSION=$(node -p "require('./package.json').version")
echo -e "${GREEN}✅ Version bumped: ${YELLOW}$CURRENT_VERSION → $NEW_VERSION${NC}"

# Generate changelog
echo -e "\n${BLUE}📝 Generating changelog...${NC}"
pnpm run changelog || {
    echo -e "${YELLOW}⚠️  Changelog generation failed, continuing...${NC}"
}

# Commit changes
echo -e "\n${BLUE}💾 Committing changes...${NC}"
git add package.json CHANGELOG.md
git commit -m "chore(release): v$NEW_VERSION" || {
    echo -e "${YELLOW}⚠️  Nothing to commit${NC}"
}

# Create git tag
echo -e "\n${BLUE}🏷️  Creating git tag v$NEW_VERSION...${NC}"
git tag -a "v$NEW_VERSION" -m "Release v$NEW_VERSION"

# Push to remote
echo -e "\n${BLUE}📤 Pushing to remote...${NC}"
git push origin $CURRENT_BRANCH
git push origin "v$NEW_VERSION"

echo -e "${GREEN}✅ Git tag created and pushed${NC}"

# Publish to npm
echo -e "\n${BLUE}📦 Publishing to npm...${NC}"

if [ "$CI" = "true" ]; then
    echo -e "${YELLOW}CI mode: publishing v$NEW_VERSION via trusted publishing (no prompt)${NC}"
    pnpm publish --access public --no-git-checks || {
        echo -e "${RED}❌ npm publish failed${NC}"
        exit 1
    }
    echo -e "\n${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${GREEN}🎉 Release v$NEW_VERSION completed successfully!${NC}"
    echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${GREEN}✅ Package published to npm${NC}"
    echo -e "${GREEN}✅ Git tag pushed to remote${NC}"
    echo -e "${GREEN}✅ Changelog updated${NC}"
    echo -e ""
    echo -e "${BLUE}📦 npm: ${YELLOW}https://www.npmjs.com/package/@ndriadev/react-tools${NC}"
    echo -e "${BLUE}🏷️  Tag: ${YELLOW}https://github.com/nDriaDev/react-tools/releases/tag/v$NEW_VERSION${NC}"
else
    echo -e "${YELLOW}⚠️  This will publish version $NEW_VERSION to npm${NC}"
    read -p "Continue with npm publish? (y/N) " -n 1 -r
    echo

    if [[ $REPLY =~ ^[Yy]$ ]]; then
        pnpm publish --access public --no-git-checks || {
            echo -e "${RED}❌ npm publish failed${NC}"
            echo -e "${YELLOW}Don't worry, the version bump and git tag are already pushed.${NC}"
            echo -e "${YELLOW}You can manually publish later with: pnpm publish --access public${NC}"
            exit 1
        }
        echo -e "\n${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
        echo -e "${GREEN}🎉 Release v$NEW_VERSION completed successfully!${NC}"
        echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
        echo -e "${GREEN}✅ Package published to npm${NC}"
        echo -e "${GREEN}✅ Git tag pushed to remote${NC}"
        echo -e "${GREEN}✅ Changelog updated${NC}"
        echo -e ""
        echo -e "${BLUE}📦 npm: ${YELLOW}https://www.npmjs.com/package/@ndriadev/react-tools${NC}"
        echo -e "${BLUE}🏷️  Tag: ${YELLOW}https://github.com/nDriaDev/react-tools/releases/tag/v$NEW_VERSION${NC}"
    else
        echo -e "\n${YELLOW}⚠️  Skipped npm publish${NC}"
        echo -e "${BLUE}Version bump and git tag have been pushed to remote.${NC}"
        echo -e "${BLUE}To publish manually later, run: ${YELLOW}pnpm publish --access public${NC}"
    fi
fi

echo ""
