// has a list of pre defined interactions that it can and cant do
const dm = require('./databaceManiger');
const stringAssembly = require('./sqlStringAssembly');
const fs =require('fs');
const yaml = require('js-yaml')
const path = require('path');

//----------------------posts
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
//--------------------------pass
module.exports.grabPassword =async function(username) {
    //grab password
    let sqlString=await stringAssembly.getStringWhere(["username","password"],"user_passwords","username",`${username}`); 
    console.log(sqlString + "ggg gamer");
    let dataBaceQuery = await configAndQuery(sqlString)
    return dataBaceQuery;
}
module.exports.createAcount = async function(username,password) {
    let sqlValuesString = stringAssembly.sqlMap(["string","string"],[username,password]);
    let sqlString = stringAssembly.setString(sqlValuesString,["username","password"],"user_passwords")
    let dataBaceQuery = await configAndQuery(sqlString);
    
}
//--------------------------API keys
//see if this is needed
module.exports.createApiKey = async function(username,APIkey) {
    //create an api key in the db
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