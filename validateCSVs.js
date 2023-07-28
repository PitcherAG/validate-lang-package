const fs = require('fs');
const path = require('path')
const csv = require('@fast-csv/parse');

module.exports = function validateCSVs() {
  const CSVsInDir = fs.readdirSync('./lang').filter(file => path.extname(file) === '.csv');

  CSVsInDir.map(file => {
    const fileData = fs.readFileSync(path.join('./lang', file));

    csv.parseString(fileData.toString(), { headers: true })
      .on('error', (error) => {
        throw new Error(`CSV formatting issue, file: ${file}. ${error.message}`)
      })
  });
}