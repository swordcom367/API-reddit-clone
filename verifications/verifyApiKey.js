const jwt = require('jsonwebtoken');
const config= require('../config')
//this will be middle whare learn that

module.exports.verifyMid =async function verify(req,res,next) {
    //add a config file with a secret
    let token=req.body.token;
    if(!token) {
        res.status(403).json({message:"no token provided"});
    }
    jwt.verify(token,config.secret,function(err, decoded) {
        if (err) {
            res.status(500).json({message:"failed to authnticate"});
        }
        //change this to middlewhare by modifying the req
        next(decoded)
      });
}

module.exports.verifyFunc = (token) => {
  let decoded = jwt.verify(token,config.secret);

  return decoded
}
