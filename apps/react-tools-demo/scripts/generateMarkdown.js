import path from "node:path";
import fs from 'node:fs/promises';
import {URL} from 'url';
import process from "node:process";

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
 * @param {{title: string, description: string, usage?: string, params: [{name: string, description: string, type: string}], returns: {name: string, description: string, type: string[]}, type: string}} jsDoc
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
${jsDoc.params && jsDoc.params.length > 0
	? jsDoc.params.map(el => `> - __${el.name}__: _${el.type}_${el.description ? '  \n'+el.description : ""}`).join("\n")
	: ">"
}
>

> ### Returns
>
> ${jsDoc.returns.name ? `__${jsDoc.returns.name}__` : ""}${jsDoc.returns.description ? ': '+jsDoc.returns.description : ""}
${Array.isArray(jsDoc.returns.type) ? jsDoc.returns.type.map(el => `> `+el).join("\n") : "> "+jsDoc.returns.type}
>`;

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
	if(fileSplitted.length === 1) {
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
			obj.type = line;
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
	const indexFile = await fs.readFile(path.join(pathUtilsDir, "..", "index.ts"), {encoding: "utf8"});
	for(let file of utilsFiles) {
		if(file !== "index.ts" && indexFile.includes(file.split(".ts")[0])) {
			let readedFile = await fs.readFile(path.join(pathUtilsDir, file), {encoding: "utf8"});
			readedFile = removeImportLine(readedFile);
			const jsDoc = buildHooksUtilsMarkdownObject(readedFile);
			const title = jsDoc.title.charAt(0).toLowerCase()+jsDoc.title.substring(1)+".md";
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
				let title = componentFileName.replace(extension, ".md");
				title = title.charAt(0).toLowerCase() + title.substring(1);
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
		process.exit(0);
	} catch (error) {
		console.error(error);
	}
}

generateMarkDown();