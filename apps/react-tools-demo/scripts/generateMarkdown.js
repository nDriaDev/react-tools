import path from "node:path";
import fs from 'node:fs/promises';
import {URL} from 'url';

const __dirname = new URL('.', import.meta.url).pathname;

const pathMarkdownDir = path.join(__dirname, '..', 'src', 'markdown');
const pathComponentDir = path.join(__dirname, '..', 'src', 'components');
const pathUtilsDir = path.join(__dirname, "..", "..", "..", "packages", "react-tools", "src", "utils");
const pathHooksDir = path.join(__dirname, "..", "..", "..", "packages", "react-tools", "src", "hooks");

function getIndexClosedBracketTypeParam(line) {
	let end;
	const lineSplitted = line.split("");
	let numberOpenedBrackets = 0;
	for(let char of lineSplitted) {
		char === "{" && (numberOpenedBrackets++);
		if(char === "}") {
			break;
		}
	}
	let numberClosedBrackets = 0;
	for(let i=0; i<lineSplitted.length; i++) {
		lineSplitted[i] === "}" && (numberClosedBrackets++);
		if(numberClosedBrackets === numberOpenedBrackets) {
			end = i;
			break;
		}
	}
	return end;
}

function getTypeParam(line) {
	const end = getIndexClosedBracketTypeParam(line);
	return line.substring(1,end);
}

function getNameDescriptionParam(line) {
	const obj = {
		name: "",
		description: ""
	};
	let start = getIndexClosedBracketTypeParam(line)+2,
		nameDescription = line.trim().split("").slice(start).join("");
	if(nameDescription.includes(" - ")) {
		nameDescription = nameDescription.split(" - ");
		obj.name = nameDescription[0];
		obj.description = nameDescription[1];
	} else {
		obj.name = nameDescription;
	}
	if(obj.name.startsWith("[")) {
		obj.name = obj.name.substring(1, obj.name.length-1);
	}
	return obj;
}

async function deleteAllFiles(dirPath) {
	const files = await fs.readdir(dirPath);
	const deleteFilesPromises = files.map(file => fs.unlink(path.join(dirPath, file)));
	await Promise.all(deleteFilesPromises);
}

function removeImportLine(file) {
	const fileSplitted = file.split("\n");
	let start;
	for(let index = 0;index<fileSplitted.length;index++) {
		if(!fileSplitted[index].startsWith("import")) {
			start = index;
			break;
		}
	}
	return fileSplitted.slice(start).join("\n");
}

/**
 *
 * @param {string[]} fileSplitted
 * @returns {string[]}
 */
function getJsDoc(fileSplitted) {
	let start, end, lines=[];
	for(let index=0;index<fileSplitted.length;index++) {
		fileSplitted[index].startsWith("/**") && (start=index+1);
		if(fileSplitted[index].startsWith(" */") || fileSplitted[index].startsWith("*/")) {
			end = index;
			lines = fileSplitted.slice(start, end);
			if(lines.join("\n").includes("@returns")) {
				break;
			}
		}
	}
	return lines;
}

/**
 *
 * @param {{title: string, description: string, usage?: string, params: [{name: string, description: string, type: string}], returns: string, type: string}} jsDoc
 */
function jsDoc2Markdown(jsDoc) {
	const markdown =
`# ${jsDoc.title}
${jsDoc.description}
${jsDoc.usage ? `\n## Usage\n\n${jsDoc.usage}\n`:""}
## API

\`\`\`tsx
${jsDoc.type}
\`\`\`

> ### Params
>
${jsDoc.params.map(el => `> - __${el.name}__: _${el.type}_${el.description ? '  \n'+el.description : ""}`).join("\n")}
>

> ### Returns
>
> - ${jsDoc.returns.name ? `__${jsDoc.returns.name}__: ` : ""}_${jsDoc.returns.type}_${jsDoc.returns.description ? '  \n'+jsDoc.returns.description : ""}
>`;

	return markdown;
}

/**
 *
 * @param {string} file
 * @returns {{title: string, description: string, params: [{name: string, description: string, type: string}], returns: string, type: string}}
 */
function buildHooksUtilsMarkdownObject(file) {
	const fileSplitted = file.split("\n");
	const obj = {
		title: "",
		description: "",
		params: [],
		returns: {
			name: "",
			description: "",
			type: ""
		},
		type: ""
	}
	const lines = getJsDoc(fileSplitted);
	lines.forEach(line => {
		const depuratedLine = (line.split(" * ")[1]);
		if(depuratedLine.startsWith("@param")) {
			const typeNameDescriptionParam = depuratedLine.split("@param ")[1];
			const param = {
				type: getTypeParam(typeNameDescriptionParam),
				...getNameDescriptionParam(typeNameDescriptionParam)
			};
			obj.params.push(param);
		}
		if(depuratedLine.startsWith("@returns")) {
			const returnSplitted = depuratedLine.split("@returns ")[1];
			const returns = {
				type: getTypeParam(returnSplitted),
				...getNameDescriptionParam(returnSplitted)
			};
			obj.returns = returns;
		}
		if(depuratedLine.startsWith("__") || depuratedLine.startsWith("**")) {
			const titleDescription = depuratedLine.split(":");
			obj.title = titleDescription[0].substring(3, titleDescription[0].length-3);
			obj.description = titleDescription[1].trim();
			obj.description = obj.description.charAt(0).toUpperCase() + obj.description.substring(1);
		}
	});
	let codeLines = fileSplitted.slice(fileSplitted.findIndex(line => line === lines.at(-1))+2);
	let typeLine = codeLines[codeLines.findIndex(line => !line.startsWith("//") && !line.startsWith(" */") && !line.startsWith("*/") && !line.startsWith(("/*")))];
	if(typeLine.startsWith("export")) {
		typeLine = typeLine.substring("export ".length);
	}
	if(typeLine.startsWith("default")) {
		typeLine = typeLine.substring("default ".length);
	}
	if(typeLine.startsWith("function")) {
		typeLine = typeLine.substring("function ".length);
	}
	if(typeLine.startsWith("const")) {
		typeLine = typeLine.substring("const ".length);
	}
	if(typeLine.startsWith(obj.title+"= ")) {
		typeLine = typeLine.substring((obj.title+"= ").length);
	}
	if(typeLine.startsWith(obj.title+"=")) {
		typeLine = typeLine.substring((obj.title+"=").length);
	}
	if(typeLine.startsWith(obj.title+" =")) {
		typeLine = typeLine.substring((obj.title+" =").length);
	}
	if(typeLine.startsWith(obj.title+" = ")) {
		typeLine = typeLine.substring((obj.title+" = ").length);
	}
	if(typeLine.startsWith(obj.title+"(")) {
		typeLine = typeLine.substring((obj.title).length);
	}
	if(typeLine.startsWith(obj.title+" (")) {
		typeLine = typeLine.substring((obj.title+" ").length);
	}
	typeLine = typeLine.split("").reverse().join("");
	if(typeLine.startsWith(" { >=")) {
		typeLine = typeLine.substring(" { >=".length);
	}
	if(typeLine.startsWith("{ >=")) {
		typeLine = typeLine.substring("{ >=".length);
	}
	if(typeLine.startsWith("{")) {
		typeLine = typeLine.substring("{".length);
	}
	typeLine = typeLine.split("").reverse().join("");
	obj.type = obj.title+typeLine;
	return obj;
}

/**
 *
 * @param {string} file
 * @param {string} extension
 */
function buildComponentMarkdown(file, extension) {
	if(extension === ".md") {
		return file;
	}
	const fileSplitted = file.split("\n");
	const lines = getJsDoc(fileSplitted);
	const component = lines.length > 0 ? fileSplitted.slice(fileSplitted.findIndex(el => el === lines.at(-1))+2).join("\n") : fileSplitted.join("\n");
	return component
	? `\`\`\`tsx
${component.toString()}
\`\`\`

${lines.length > 0 ? lines.map(line => "> "+line).join("\n") : ""}
`
	: "";
}

async function generateUtilsMarkDown() {
	const utilsFiles = await fs.readdir(path.join(pathUtilsDir));
	for(let file of utilsFiles) {
		if(file !== "index.ts") {
			let readedFile = await fs.readFile(path.join(pathUtilsDir, file), {encoding: "utf8"});
			readedFile = removeImportLine(readedFile);
			const jsDoc = buildHooksUtilsMarkdownObject(readedFile);
			const title = jsDoc.title.charAt(0).toUpperCase()+jsDoc.title.substring(1)+".md";
			await fs.writeFile(path.join(pathMarkdownDir, title), jsDoc2Markdown(jsDoc), {encoding: "utf8"});
		}
	}
}

async function generateComponentsMarkDown() {
	const componentsDirList = await fs.readdir(path.join(pathComponentDir, "hooks"));
	for(let dir of componentsDirList) {
		const files = (await fs.readdir(path.join(pathComponentDir, "hooks", dir)));
		for(let file of files) {
			const componentFileName = file;
			if(file.split(".")[0].toLowerCase() === dir.toLowerCase()) {
				const extension = componentFileName.endsWith(".tsx") ? ".tsx" : ".md";
				let componentFile = await fs.readFile(path.join(pathComponentDir, "hooks", dir, componentFileName), {encoding: "utf8"});
				const hookFileName = (componentFileName.charAt(0).toLowerCase()+componentFileName.substring(1)).replace(extension, ".ts");
				let hookFile = await fs.readFile(path.join(pathHooksDir, hookFileName), {encoding: "utf8"});
				componentFile = removeImportLine(componentFile);
				hookFile = removeImportLine(hookFile);
				const jsDoc = buildHooksUtilsMarkdownObject(hookFile);
				jsDoc.usage = buildComponentMarkdown(componentFile, extension);
				const title = componentFileName.replace(extension, ".md");
				await fs.writeFile(path.join(pathMarkdownDir, title), jsDoc2Markdown(jsDoc), {encoding: "utf8"});
			}
		}
	}
}

async function generateMarkDown() {
	try {
		await deleteAllFiles(pathMarkdownDir);
		await generateUtilsMarkDown();
		await generateComponentsMarkDown();
	} catch (error) {
		console.error(error);
	}
}

generateMarkDown();