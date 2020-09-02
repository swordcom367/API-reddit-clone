// has a list of pre defined interactions that it can and cant do
const dm = require('./databaceManiger');
const stringAssembly = require('./sqlStringAssembly');
const fs =require('fs');
const yaml = require('js-yaml')
const path = require('path');


module.exports.grabTimeline = async function() {
    let sqlString=await stringAssembly.getString(["header","picture","discription","postTime","username"],"posts"); 
    let config = await readYaml();
    let result = await dm.microsoftQuery(config.MSqlconnectionConfig,sqlString);
    return result;
}
module.exports.createPost= async function() {
    
}
async function readYaml() {
    try {
        let value=fs.readFileSync(path.resolve(__dirname, "sqlConfig.yaml"),'utf8');
        let yamlFile = await yaml.safeLoad(value);
        return yamlFile;
    } catch(err) {
        console.log(err);
    }
}