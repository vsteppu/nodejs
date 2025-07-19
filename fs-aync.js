const store = require('./store.js') // function to save the lesson 
const { readFile, writeFile } = require('fs')
const path = require("path");

const appFile = path.join(__dirname, 'app.js')
const newFileToWrite = path.join(__dirname, 'fs-aync.js')

readFile(appFile, 'utf8', (error, data) => { // this is a callback function
	if (error) {
		console.log(error);
		return
	}
	store.saveLesson(newFileToWrite, data)
})
