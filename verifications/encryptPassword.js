const bcrypt = require('bcryptjs');
const saltRounds =10;
module.exports.encryptPassword = async function(pass) {
    let salt = bcrypt.genSaltSync(saltRounds);
    let hash =await bcrypt.hash(pass,salt);
    return hash
}