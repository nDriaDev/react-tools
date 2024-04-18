import path from "node:path";
import { existsSync } from 'node:fs';
import fs from 'node:fs/promises';
import {URL} from 'url';
import process from "node:process";

const __dirname = new URL('.', import.meta.url).pathname;

const PATH_DEMO_SRC = path.join(__dirname, '..', 'src');
const PATH_LIB_SRC = path.join(__dirname, "..", "..", "..", "packages", "react-tools-lib", "src");
const PATH_UTILITY_MODEL_TYPES_FILE = path.join(__dirname, "..", "..", "..", "packages", "react-tools-lib", "src", "models", "utilityTypes.model.ts");
const DEMO_COMPONENT_DIR_NAME = "pages";
const MARKDOWWN_DIR_NAME = "markdown";
const HOOKS_DIR_NAME = "hooks";
const COMPONENTS_DIR_NAME = "components";
const UTILS_DIR_NAME = "utils";

/**
 *
 * @param {string} line
 * @returns {number}
 */
function getIndexClosedBracketTypeParam(line) {
	let end;
	const lineSplitted = line.split("");
	if(lineSplitted[1] === "`") {
		return lineSplitted.length - 1 - lineSplitted.reverse().findIndex(el => el === "}");
	}
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

/**
 *
 * @param {string} string
 * @returns {number}
 */
function sanitizeType(string) {
	let stringVal = string;
	let arrowIndex = stringVal.indexOf("=>");
	while(arrowIndex !== -1) {
		stringVal = stringVal.substring(0, arrowIndex+1) + stringVal.substring(arrowIndex+2);
		arrowIndex = stringVal.indexOf("=>");
	}
	return stringVal.split(">").length;
}
/**
*
* @param {string} string
* @returns {string[]}
*/
function splitType(string){
	string = string.split(',');
	let newCode = [];
	let last = "";
	for (let part of string){
		if (last.split("<").length === sanitizeType(last) && last.split("(").length === last.split(")").length && last.split("[").length === last.split("]").length && last.split("{").length === last.split("}").length){
			last = part;
			newCode.push(part);
		}
		else{
			last += "," + part;
			newCode[newCode.length - 1] = last;
		}
	}
	return newCode;
}

/**
 * @param {string} string
 */
function parseType(string, tab=0) {
	const typeArray= [];
	let currTab = tab;
	if(string.includes(" | ")) {
		typeArray.push(Array(currTab*4).fill(true).map(() => " ").join("")+ "- __Union of__:  ");
		currTab++;
		string.split(" | ").forEach(split => {
			typeArray.push(...parseType(split, currTab, true))
		});
	}
	else if(string.startsWith("[")) {
		typeArray.push(Array(currTab*4).fill(true).map(() => " ").join("")+ "- __Array__:  ");
		currTab++;
		string = string.substring(1, string.length-1);
		const stringSplitted = splitType(string).map(el => el.trim());
		for(let val of stringSplitted) {
			if(val.startsWith("[") || val.startsWith("{")) {
				typeArray.push(...parseType(val, currTab));
			}
			else {
				typeArray.push(Array(currTab*4).fill(true).map(() => " ").join("")+ `- _${val}_  `)
			}
		}
	} else if(string.startsWith("{")) {
		typeArray.push(Array(currTab*4).fill(true).map(() => " ").join("")+ "- __Object__:  ");
		currTab++;
		string = string.substring(1, string.length-1);
		const stringSplitted = splitType(string).map(el => el.trim());
		for(let val of stringSplitted) {
			const semicolonIndex = val.indexOf(":");
			const [key, value] = [val.substring(0, semicolonIndex).trim(), val.substring(semicolonIndex+1, val.length).trim()];
			if(value.startsWith("[") || value.startsWith("{")) {
				typeArray.push(...parseType(val, currTab));
			} else {
				typeArray.push(Array(currTab*4).fill(true).map(() => " ").join("")+`- __${key}__ : _${value}_  `);
			}
		}
	} else {
		const stringSplitted = splitType(string).map(el => el.trim());
		for(let val of stringSplitted) {
			if(val.startsWith("[") || val.startsWith("{")) {
				typeArray.push(...parseType(val, currTab));
			} else {
				typeArray.push(Array(currTab*4).fill(true).map(() => " ").join("")+`- _${val}_  `);
			}
		}
	}
	return typeArray;
}

function getTypeString(line, isReturn) {
	const end = getIndexClosedBracketTypeParam(line);
	let type = line.substring(1,end);
	return isReturn
	? parseType(type)
	: type;
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
		obj.name = obj.name.substring(1, obj.name.length-1)+"?";
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
	for (let index = 0; index < fileSplitted.length; index++) {
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
 * @param {{title: string, description: string, usage?: string, params: [{name: string, description: string, type: string}], returns: {name: string, description: string, type: string[]}, type: string}} jsDoc
 */
function jsDoc2Markdown(jsDoc) {
	const markdown =
`# ${jsDoc.title}
${jsDoc.description}
${jsDoc.usage ? `\n## Usage\n\n${jsDoc.usage}\n` : ""}
${jsDoc.type ?
`## API

\`\`\`tsx
${jsDoc.type}
\`\`\`
`: ""}

${jsDoc.params && jsDoc.params.length > 0 ?
`> ### Params
>
${jsDoc.params && jsDoc.params.length > 0
	? jsDoc.params.map(el => `> - __${el.name}__: _${el.type}_${el.description ? '  \n' + el.description : ""}`).join("\n")
	: ">"
}
>
`: ""}

${Object.values(jsDoc.returns).some(el => !!el) ?
`
> ### Returns
>
> ${jsDoc.returns.name ? `__${jsDoc.returns.name}__` : ""}${jsDoc.returns.description ? ': '+jsDoc.returns.description : ""}
${Array.isArray(jsDoc.returns.type) ? jsDoc.returns.type.map(el => `> `+el).join("\n") : "> "+jsDoc.returns.type}
>`
:""}`;

	return markdown;
}

/**
 *
 * @param {string} file
 * @returns {{title: string, description: string, params: [{name: string, description: string, type: string}], returns: {name: string, description: string, type: string}, type: string}}
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
	if(fileSplitted.length === 1 || fileSplitted.find(el => el.includes("//#IGNORE"))) {
		return obj;
	}
	const lines = getJsDoc(fileSplitted);
	let codeLines = fileSplitted.slice(fileSplitted.findIndex(line => line === lines.at(-1))+2);
	lines.forEach((line, index) => {
		const depuratedLine = (line.split(" * ")[1]);
		if(depuratedLine.startsWith("@param")) {
			const typeNameDescriptionParam = depuratedLine.split("@param ")[1];
			const param = {
				type: getTypeString(typeNameDescriptionParam, false),
				...getNameDescriptionParam(typeNameDescriptionParam)
			};
			obj.params.push(param);
		}
		if(depuratedLine.startsWith("@returns")) {
			const returnSplitted = depuratedLine.split("@returns ")[1];
			const returns = {
				type: getTypeString(returnSplitted, true),
				...getNameDescriptionParam(returnSplitted)
			};
			let lastDescriptionIndex = index+1;
			while(lastDescriptionIndex < lines.length && ![" */", "*/"].includes(lines[lastDescriptionIndex])) {
				lastDescriptionIndex++;
			}
			if(lastDescriptionIndex !== index+1) {
				const temp = returns.type.join("\n").substring(1);
				returns.description = temp;
				returns.type = lines.splice(index+1, lastDescriptionIndex-1).map(el => el.split(" * ")[1]);
			}
			obj.returns = returns;
		}
		if(depuratedLine.startsWith("__") || depuratedLine.startsWith("**")) {
			const titleDescription = depuratedLine.split(":");
			obj.title = titleDescription[0].substring(3, titleDescription[0].length-3);
			titleDescription.shift();
			obj.description = titleDescription.join(":").trim();
			obj.description = obj.description.charAt(0).toUpperCase() + obj.description.substring(1);
			let lastDescriptionIndex = index+1;
			while([" * @", "//", " */", "*/"].filter(key => lines[lastDescriptionIndex].startsWith(key)).length === 0) {
				lastDescriptionIndex++;
			}
			if(lastDescriptionIndex !== (index+1)) {
				obj.description += lines.splice(index+1, lastDescriptionIndex-1).map(el => el.split(" * ")[1]).join("\n");
			}
		}
	});
	let typeLineIndex = codeLines.findIndex(line => !line.startsWith("//") && !line.startsWith(" */") && !line.startsWith("*/") && !line.startsWith(("/*")));
	let typeLine = codeLines[typeLineIndex];
	if(typeLine.startsWith("export")) {
		typeLine = typeLine.substring("export ".length);
	}
	if(typeLine.startsWith("default")) {
		typeLine = typeLine.substring("default ".length);
	}
	if(typeLine.startsWith("function")) {
		if(codeLines[typeLineIndex+1].startsWith("function")) {
			//is a overloaded function
			let index = typeLineIndex+1,
			line = codeLines[index].substring("function ".length).split("").reverse().join("");
			while(!line.startsWith("{")) {
				line = codeLines[index+1].split("").reverse().join("");
				index++;
			}
			line = codeLines[index].substring("function ".length, codeLines[index].length-1);
			obj.type = line.trim();
			return obj;
		} else {
			typeLine = typeLine.substring("function ".length);
			//INFO remove function name because we add title after.
			let start=0;
			for(let i = 0, size= typeLine.length; i<size; i++) {
				if(["<", "("].includes(typeLine[i])) {
					start = i;
					break;
				}
			}
			typeLine = typeLine.substring(start);
		}
	}
	if(typeLine.startsWith("const")) {
		typeLine = typeLine.substring("const ".length);
	}
	if (typeLine.startsWith(obj.title + " = {")) {
		typeLine = "#" + typeLine;
	}
	if (typeLine.startsWith(obj.title + "= {")) {
		typeLine = "#" + typeLine;
	}
	if (typeLine.startsWith(obj.title + "= ")) {
		typeLine = typeLine.substring((obj.title + "= ").length);
	}
	if (typeLine.startsWith(obj.title + "=")) {
		typeLine = typeLine.substring((obj.title + "=").length);
	}
	if (typeLine.startsWith(obj.title + " =")) {
		typeLine = typeLine.substring((obj.title + " =").length);
	}
	if (typeLine.startsWith(obj.title + " = ")) {
		typeLine = typeLine.substring((obj.title + " = ").length);
	}
	if (typeLine.startsWith(obj.title + "(")) {
		typeLine = typeLine.substring((obj.title).length);
	}
	if (typeLine.startsWith(obj.title + " (")) {
		typeLine = typeLine.substring((obj.title + " ").length);
	}
	typeLine = typeLine.split("").reverse().join("");
	if (typeLine.startsWith(" { >=")) {
		typeLine = typeLine.substring(" { >=".length);
	}
	if (typeLine.startsWith("{ >=")) {
		typeLine = typeLine.substring("{ >=".length);
	}
	if (typeLine.startsWith("{")) {
		typeLine = typeLine.substring("{".length);
	}
	typeLine = typeLine.split("").reverse().join("").trim();
	typeLine.startsWith("memo") && (typeLine = " = " + typeLine);

	obj.type = typeLine.trim().startsWith("#")
		? typeLine.substring(1).trim()
		: (typeLine.trim().startsWith("class") ? "" : obj.title.trim()) + typeLine;
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
	const utilsFiles = await fs.readdir(path.join(PATH_LIB_SRC, UTILS_DIR_NAME));
	const indexFile = await fs.readFile(path.join(PATH_LIB_SRC, "index.ts"), {encoding: "utf8"});
	for(let file of utilsFiles) {
		if(file !== "index.ts" && indexFile.includes(file.split(".ts")[0])) {
			let readedFile = await fs.readFile(path.join(PATH_LIB_SRC, UTILS_DIR_NAME, file), {encoding: "utf8"});
			readedFile = removeImportLine(readedFile);
			const jsDoc = buildHooksUtilsMarkdownObject(readedFile);
			const title = jsDoc.title.charAt(0).toLowerCase()+jsDoc.title.substring(1)+".md";
			await fs.writeFile(path.join(PATH_DEMO_SRC, MARKDOWWN_DIR_NAME, title), jsDoc2Markdown(jsDoc), {encoding: "utf8"});
		}
	}
}

async function generateHooksMarkDown() {
	const hookTypesDirList = await fs.readdir(path.join(PATH_DEMO_SRC, DEMO_COMPONENT_DIR_NAME, HOOKS_DIR_NAME));
	for (const hookTypeDirList of hookTypesDirList) {
		const dirsDemoHook = (await fs.readdir(path.join(PATH_DEMO_SRC, DEMO_COMPONENT_DIR_NAME, HOOKS_DIR_NAME, hookTypeDirList)));
		for (const demoHookDir of dirsDemoHook) {
			const files = (await fs.readdir(path.join(PATH_DEMO_SRC, DEMO_COMPONENT_DIR_NAME, HOOKS_DIR_NAME, hookTypeDirList, demoHookDir)));
			for (let file of files) {
				const hookDemoFileName = file;
				if (file.split(".")[0].toLowerCase() === demoHookDir.toLowerCase()) {
					const extension = hookDemoFileName.endsWith(".tsx") ? ".tsx" : ".md";
					let hookDemoFile = await fs.readFile(path.join(PATH_DEMO_SRC, DEMO_COMPONENT_DIR_NAME, HOOKS_DIR_NAME, hookTypeDirList, demoHookDir, hookDemoFileName), { encoding: "utf8" });
					let hookFileName = (hookDemoFileName.charAt(0).toLowerCase() + hookDemoFileName.substring(1)).replace(extension, ".ts");
					!existsSync(path.join(PATH_LIB_SRC, HOOKS_DIR_NAME,  hookTypeDirList, hookFileName)) && (hookFileName = (hookDemoFileName.charAt(0).toLowerCase() + hookDemoFileName.substring(1)).replace(extension, ".tsx"));
					let hookFile = await fs.readFile(path.join(PATH_LIB_SRC, HOOKS_DIR_NAME, hookTypeDirList, hookFileName), { encoding: "utf8" });
					hookDemoFile = removeImportLine(hookDemoFile);
					hookFile = removeImportLine(hookFile);
					const jsDoc = buildHooksUtilsMarkdownObject(hookFile);
					jsDoc.usage = buildComponentMarkdown(hookDemoFile, extension);
					let title = hookDemoFileName.replace(extension, ".md");
					title = title.charAt(0).toLowerCase() + title.substring(1);
					await fs.writeFile(path.join(PATH_DEMO_SRC, MARKDOWWN_DIR_NAME, title), jsDoc2Markdown(jsDoc), { encoding: "utf8" });
				}
			}
		}
	}
}

async function generateComponentsMarkDown() {
	const componentsDirList = await fs.readdir(path.join(PATH_DEMO_SRC, DEMO_COMPONENT_DIR_NAME, COMPONENTS_DIR_NAME));
	for (const componentDir of componentsDirList) {
		const files = (await fs.readdir(path.join(PATH_DEMO_SRC, DEMO_COMPONENT_DIR_NAME, COMPONENTS_DIR_NAME, componentDir)));
		for (let file of files) {
			const componentDemoFileName = file;
			if (file.split(".")[0].toLowerCase() === componentDir.toLowerCase()) {
				const extension = componentDemoFileName.endsWith(".tsx") ? ".tsx" : ".md";
				let componentDemoFile = await fs.readFile(path.join(PATH_DEMO_SRC, DEMO_COMPONENT_DIR_NAME, COMPONENTS_DIR_NAME, componentDir, componentDemoFileName), { encoding: "utf8" });
				let componentFileName = componentDemoFileName.replace(extension, ".ts");
				!existsSync(path.join(PATH_LIB_SRC, COMPONENTS_DIR_NAME, componentFileName)) && (componentFileName = componentDemoFileName.replace(extension, ".tsx"));
				let componentFile = await fs.readFile(path.join(PATH_LIB_SRC, COMPONENTS_DIR_NAME, componentFileName), { encoding: "utf8" });
				componentDemoFile = removeImportLine(componentDemoFile);
				componentFile = removeImportLine(componentFile);
				const jsDoc = buildHooksUtilsMarkdownObject(componentFile);
				jsDoc.usage = buildComponentMarkdown(componentDemoFile, extension);
				let title = componentDemoFileName.replace(extension, ".md");
				await fs.writeFile(path.join(PATH_DEMO_SRC, MARKDOWWN_DIR_NAME, title), jsDoc2Markdown(jsDoc), { encoding: "utf8" });
			}
		}
	}
}

async function generateModelMarkDown() {
	const utilityTypesFile = await fs.readFile(path.join(PATH_UTILITY_MODEL_TYPES_FILE), { encoding: "utf8" });
	const stringBuffer = {
		value: "",
		/**
		 *
		 * @param {string} s
		 * @returns {this}
		 */
		add(s) {
			this.value += s + "\n";
			return this;
		},
		/**
		 *
		 * @param {string[]} s
		 * @returns {this}
		 */
		set(s) {
			s.forEach(slice => { this.value += slice + "\n" });
			return this;
		}
	}
	const utilityTypesFileSplitted = utilityTypesFile.split("\n").slice(2).filter(el => !["/**", " */", ""].includes(el));
	stringBuffer.set([
		"# Utility Types",
		"",
		"Typescript utility types for specified use cases.",
		""
	]);
	for (let i = 0, size = utilityTypesFileSplitted.length; i < size;) {
		const description = utilityTypesFileSplitted[i].substring(3);
		const type = utilityTypesFileSplitted[i + 1];
		let title, generics;
		if (type.indexOf("> =") !== -1) {
			title = type.substring(12, type.indexOf("<"));
			generics = type.substring(type.indexOf("<"), type.indexOf("> =") + 1);
		} else {
			title = type.substring(12, type.indexOf(" ="));
		}
		stringBuffer.set([
			"## " + title,
			"",
			description,
			"```tsx",
			"type " + title + (generics ? generics : ""),
			"```",
			""
		]);
		i++;
		while (!utilityTypesFileSplitted[i].startsWith(" * ")) {
			i++;
			if (i === size) {
				break;
			}
		}
	}
	await fs.writeFile(path.join(PATH_DEMO_SRC, MARKDOWWN_DIR_NAME, "utilityTypes.md"), stringBuffer.value, { encoding: "utf8" });
}

async function generateMarkDown() {
	try {
		await deleteAllFiles(path.join(PATH_DEMO_SRC, MARKDOWWN_DIR_NAME));
		await generateUtilsMarkDown();
		await generateHooksMarkDown();
		await generateModelMarkDown();
		await generateComponentsMarkDown();
		process.exit(0);
	} catch (error) {
		console.error(error);
	}
}

generateMarkDown();