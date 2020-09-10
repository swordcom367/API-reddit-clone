//const uuid = require('uuid');
//use jwt to do auth
const jwt = require('jsonwebtoken');
const dm = require('../databace interactions/databaceManiger');
const config =require('../config')

module.exports.addNewKey = (username) => {
    // create an api key and the allow for the use and distrabutuion of said api key
    var token = jwt.sign({username:username , permition:1},config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
    return token;
}