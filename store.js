const fs = require('fs/promises')
const path = require("path");
const appFile = path.join(__dirname, 'app.js')

const saveLesson = async (fileName) => {
    try{
        const data = await fs.readFile(appFile, 'utf8')

        await fs.writeFile(path.join(__dirname, fileName), data)
        
        console.log(`File was successfully added here`);
    } catch (err) {
        throw err
    }
}

module.exports.saveLesson = saveLesson