const path = require('path')
console.log('path: ', path.sep);

const setPath = path.join('/content', '/file', 'file.txt')
console.log('filePath: ', setPath);

const basePath = path.basename(setPath)
console.log('basePath: ', basePath);

const directiryPath = path.resolve(__dirname, basePath)
console.log('directiryPath: ', directiryPath);

const filePath = path.resolve(__filename)
console.log('filePath: ', filePath);