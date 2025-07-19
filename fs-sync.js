const fs = require("fs"); 
/*
Or you can destructure it like this:
const { readFileSync, writeFileSync } = require('fs')
*/ 
const path = require("path");
//const { content } = require("./content/testFile.js");

const firstFilePath = path.join(__dirname, '/content', 'first.txt')
const secondFilePath = path.join(__dirname, '/content', 'second.txt')
const newFileToWrite = path.join(__dirname, '/content', 'test-file.txt')

const first = fs.readFileSync(firstFilePath, 'utf8')
const second = fs.readFileSync(secondFilePath, 'utf8')


// fs.writeFileSync(param1(locul unde sa creezi fileul), param2(continutul porporiu-zis afileului)) 
// ex. -->
fs.writeFileSync(
	newFileToWrite,
	`Here first file: ${first}, and second: ${second}`,
	{flag: 'a'} // allows to write new line without re-writing content
)

//| Flag | Descriere simplă                            		 | Când îl folosești                                      |
//| -----| --------------------------------------------------| -------------------------------------------------------|
//| 'w'  | Write: creează sau îl suprascrie            		 | Default – când vrei să scrii de la zero                |
//| 'a'  | Append: creează dacă nu există, sau adaugă  		 | Când vrei să păstrezi conținutul vechi și adaugi altul |	
//| 	 | conținutul la final 						   		 |													      |
//| 'wx' | La fel ca 'w', dar dă eroare dacă fișierul există | Când nu vrei să suprascrii accidental                  |
//| 'ax' | Ca 'a', dar doar dacă fișierul NU există          | Evită dubluri                                          |
//| 'r+' | Deschide fișierul pentru citire și scriere        | Când vrei să-l citești și modifici                     |


const newFile = fs.readFileSync(newFileToWrite, 'utf8')

const files = {
	first,
	second,
	newFile

}
console.log('files: ', files);

/* 
# Syntax to create a file directly from code

	writeFileSync(
	'#1 param (is path where you want to create new file or re-write existing one)',
	'#2 param (is the content you want this file to have better to use this quotes' `` ' in case you need multiline code)')

# Ex.

	writeFileSync(
		// path to create or re-write the file
		'./content/testFile.js',
		// file content 
		`												
			const { readFileSync } = require('fs')
	
			const first = readFileSync('./content/first.txt','utf8')
			const second = readFileSync('./content/second.txt','utf8')
	
			const content = {
				first_file: 'first',
				second_file: 'second',
			}
	
			module.exports.content = content		
		`
	)
*/

fs.writeFileSync('./content/testFile.js',
`//following content was created by writeFileSync function								
const content = 'content'
module.exports.content = content
`)

fs.writeFileSync('./content/testFile.js',
`
//and this was added with {flag: a} from the end								
const additionalContent = 'third'
module.exports.additionalContent = additionalContent
`,
{flag: 'a'}
)
fs.writeFileSync('./content/testFile.js',
`
//and this was added with {flag: a} from the end with copying firstFilePath variable from origin file						
const variableCreatedFromReadFile = '${firstFilePath}'
module.exports.variableCreatedFromReadFile = variableCreatedFromReadFile
`,
{flag: 'a'}
)

//console.log('fileToTest: ', fileToTest);
//console.log('content: ', content);