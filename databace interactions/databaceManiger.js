const micSql = require('mssql');
const { resolve } = require('path');


module.exports.microsoftQuery = async function microsoftQuery(dataConfig,sqlQueryString)  {
    try {
    await micSql.connect(dataConfig);
    const result = await micSql.query(sqlQueryString);
    console.log(result);
    return result;
    } catch(err) {
        console.log(err + "shit");
    }
}