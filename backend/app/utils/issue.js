const fs = require('fs');
const path = require('path');

const dataPath = path.resolve(__dirname, '../..', 'issues.json'); // path to our JSON file

const saveData = (data) => {
    const stringifyData = JSON.stringify(data);
    fs.writeFileSync(dataPath, stringifyData);
};
const getData = () => {
    const jsonData = fs.readFileSync(dataPath);
    return JSON.parse(jsonData);
};

exports.issue = {
    saveData,
    getData,
};
