const express = require('express');
const router = express.Router();
const encypter= require('../verifications/encryptPassword');
const im = require('../databace interactions/interactionManiger')
const bcrypt = require('bcryptjs');
router.post("/",async (req,res,next) => {
    let username = req.body.username;
    let sentPassword = req.body.password;
    console.log(sentPassword);
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
        if(comerison===true) {
            res.status(200).json( {
                APIKey:"will be added soon"
            })
        } else {
            res.status(401).json( {
                loginResponce:"gamer"
            })
        }
    });
});

router.post("/create",async (req,res,next)=> {
    let username = req.body.username;
    let sentPassword = req.body.password;

   let encrypted =await encypter.encryptPassword(sentPassword);
   console.log("yo");
   im.createAcount(username,encrypted);
   res.status(200).json({
        message:"working"
   });
});

module.exports = router