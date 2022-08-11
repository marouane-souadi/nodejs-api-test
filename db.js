const fs = require("fs");

const filePath = './data.json'

function loadDbData() {
    try {
        const jsonString = fs.readFileSync(filePath)
        const jsonData = JSON.parse(jsonString);
        return jsonData;
    } catch (err) {
        console.log(err)
    }
}

function saveDbData(data) {
    const jsonString = JSON.stringify(data)
    fs.writeFileSync(filePath, jsonString)
}

module.exports = {
    loadDbData,
    saveDbData,
}