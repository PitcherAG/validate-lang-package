const fs = require('fs');
const path = require('path')
const CSVValidator = require('csv-file-validator')

module.exports = function validateCSVs() {
  const CSVsInDir = fs.readdirSync('./lang').filter(file => path.extname(file) === '.csv');

  return Promise.all(CSVsInDir.map(file => {
    const fileData = fs.readFileSync(path.join('./lang', file));
    return CSVValidator(fileData).then(csvData => {
        throw new Error(csvData.inValidData.map(({ message }) => message).join(', ')) // Array of error messages
    })
  }));
}