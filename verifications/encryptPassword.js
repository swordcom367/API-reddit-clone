const bcrypt = require('bcryptjs');

module.exports.encryptPassword = async function(pass) {
    let salt = bcrypt.genSaltSync(10);
    let hash =await bcrypt.hash("hello",salt);
    return hash
}