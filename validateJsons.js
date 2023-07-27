const fs = require('fs');
const path = require('path')

module.exports = function validateJSONs() {
  const jsonsInDir = fs.readdirSync('./lang').filter(file => path.extname(file) === '.json');

  jsonsInDir.forEach(file => {
    const fileData = fs.readFileSync(path.join('./lang', file));
    JSON.parse(fileData.toString());
  });
}