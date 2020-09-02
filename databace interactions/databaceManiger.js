const micSql = require('mssql');
const { resolve } = require('path');


module.exports.microsoftQuery = async function microsoftQuery(dataConfig,sqlQueryString)  {
    try {
        const connection = await micSql.connect(dataConfig);
        const result = await connection.query(sqlQueryString);
        connection.close();
        console.log(result);
    return result;
    } catch(err) {
        console.log(err + "shit");
    }
}