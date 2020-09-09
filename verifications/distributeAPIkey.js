const uuid = require('uuid');
const dm = require('../databace interactions/')
module.exports.addNewKey = (username,apiKey) => {
    // create an api key and the allow for the use and distrabutuion of said api key
    let key = uuid.v1();

}