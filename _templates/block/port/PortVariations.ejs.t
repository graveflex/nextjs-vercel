---
to: <%= app_name %>/blocks/<%= name %>/port.js
sh: cd <%= app_name %>/blocks/<%= name %> && bun run port.js && rm port.js
---

// Objective: Duplicate a file X number of times;

// Destination Variables
const DIR =
	"./variations";
const FILE_NAME = "Variant";
const EXTENSION = ".tsx";

// Source Variables
const SOURCE_DIRECTORY =
	"<%= pro_block_source_dir %>/<%= pro_block_name %>s";
const SOURCE_FILE = "<%= pro_block_name %>-";
const SOURCE_EXTENSION = ".tsx";

// File numbers
const START = 1;
const END = <%= variants %>;

// String Replacements
const STRING_REPLACEMENTS = {
	'"use client";\n\n': "",
	"function <%= h.changeCase.pascal(pro_block_name) %>": "default function Variant",
	"@/components/ui/": "@mono/web/components/ui/",
	"fill\n": "fill={true}\n\n",
};

// Helper Functions
const makeFilePath = (i, isSource = false) => {
	const directory = isSource ? SOURCE_DIRECTORY : DIR;
	const fileName = isSource ? SOURCE_FILE : FILE_NAME;
	const extension = isSource ? SOURCE_EXTENSION : EXTENSION;
	return `${directory}/${fileName}${i}${extension}`;
};

const transformImports = (code) => {
	return code.replace(
		/(import\s+{[^}]+}\s+from\s+["'])([^"']+\/)([^/"']+)(["'];?)/g,
		(match, prefix, path, file, suffix) => {
			let capitalizedFile = file.charAt(0).toUpperCase() + file.slice(1);
			capitalizedFile = capitalizedFile.replace(/-./g, (match) =>
				match[1].toUpperCase(),
			);
			return `${prefix}${path}${capitalizedFile}${suffix}`;
		},
	);
};

const processFileContent = (content) => {
	let newContent = content;
	for (const [key, value] of Object.entries(STRING_REPLACEMENTS)) {
		newContent = newContent.replace(new RegExp(key, "g"), value);
	}
	return transformImports(newContent);
};

const main = async () => {
	for (let i = START; i <= END; i++) {
		const newFilePath = makeFilePath(i);
		const fileExists = await Bun.file(newFilePath).exists();

		if (fileExists) {
			console.log(`File ${i} already exists`);
			continue;
		}

		const sourceFilePath = makeFilePath(i, true);
		const sourceFileContent = await Bun.file(sourceFilePath).text();
		const newFileContent = processFileContent(sourceFileContent);

		await Bun.write(newFilePath, newFileContent);
		console.log(`File ${i} created`);
	}
};

// Run the main function
await main();
