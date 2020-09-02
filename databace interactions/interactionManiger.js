// has a list of pre defined interactions that it can and cant do
const dm = require('./databaceManiger');
const stringAssembly = require('./sqlStringAssembly');
const fs =require('fs');
const yaml = require('js-yaml')
const path = require('path');


module.exports.grabTimeline = async function() {
    let sqlString=await stringAssembly.getString(["header","picture","discription","postTime","username"],"posts"); 
    let dataBaceQuery = await configAndQuery(sqlString);
    return dataBaceQuery.recordset;
}
module.exports.createPost= async function(postObj) {
    console.log(postObj);
    let sqlValuesString = stringAssembly.sqlMap(["string","string","string","","string"],[postObj.header,postObj.picture,postObj.discription,"CURRENT_TIMESTAMP",postObj.user]);
    console.log(sqlValuesString);
    let sqlString=await stringAssembly.setString(sqlValuesString,["header","picture","discription","postTime","username"],"posts");

    console.log(sqlString)
    let dataBaceQuery = await configAndQuery(sqlString);
    //should return conformaiton that it works
}
//--------------------------
async function configAndQuery(sqlString) {
    let config = await readYaml();
    let result = await dm.microsoftQuery(config.MSqlconnectionConfig,sqlString);
    return result;
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