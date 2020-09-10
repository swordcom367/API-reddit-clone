const express = require('express');
const router = express.Router();
const encypter= require('../verifications/encryptPassword');
const im = require('../databace interactions/interactionManiger')
const bcrypt = require('bcryptjs');
const APIdis = require('../verifications/distributeAPIkey')

router.post("/",async (req,res,next) => {
    let username = req.body.username;
    let sentPassword = req.body.password;
    console.log(req.body);
    let dbPass =await im.grabPassword(username);
    console.log(dbPass.recordset[0].password)
    console.log("working");
    bcrypt.compare(sentPassword, dbPass.recordset[0].password, function(err, comerison) {
        // res === true
        if(err) { 
            console.log(err);
            res.status(404).json( {
                message:"err"
            });
        }
        console.log(comerison);
        if(comerison===true) {
            res.status(200).json( {
                APIKey: APIdis.addNewKey(username)
            })
        } else {
            res.status(401).json( {
                loginResponce:"wrong pass yo"
            })
        }
    });
});

router.post("/create",async (req,res,next)=> {
    let username = req.body.username;
    let sentPassword = req.body.password;

   let encrypted =await encypter.encryptPassword(sentPassword);
   im.createAcount(username,encrypted);
   res.status(200).json({
        message:"working"
   });
});

module.exports = router