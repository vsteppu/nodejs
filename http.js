const http = require('http')
const server = http.createServer((req, res) => {
	if (req.url === '/'){
		console.log('req.url was: ', req.url);
		res.end(`req.url was: '${req.url}'`)
	} else if (req.url === '/about'){
		console.log('req.url was: ', req.url);
		res.end(`req.url was: '${req.url}'`)
	}else{
		res.end(`<h1>Sorry, we can't find requested page ${req.url}</h1>`)
	}
})

server.listen(7000)
// function to save the lesson 
const store = require('./store.js')
store.saveLesson('http.js')
//