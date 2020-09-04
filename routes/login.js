const express = require('express');
const router = express.Router();
const encypter= require('../verifications/encryptPassword');
const im = require('../databace interactions/interactionManiger')

router.post("/",async (req,res,next) => {
    let username = req.body.username;
    let sentPassword = req.body.password;

    let dbPass =await im.grabPassword(username);

    bcrypt.compare(sentPassword, dbPass, function(err, comerison) {
        // res === true
        if(comerison===true) {
            res.status(200).json( {
                APIKey:"will be added soon"
            })
        }
    });
});

router.post("/create",async (req,res,next)=> {
    let username = req.body.username;
    let sentPassword = req.body.password;

   let encrypted = encypter.encryptPassword(password);
   im.createAcount(username,encrypted);
})