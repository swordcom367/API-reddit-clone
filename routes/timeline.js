const express = require('express');
const router = express.Router();
const verification= require('../verifications/verifyApiKey');
//---------------------------Testing
//const dummyData = require('../testing/dummyData/dummyTimeline');
const im = require('../databace interactions/interactionManiger');


router.post("/",async function(req,res,next) {
        let key = req.body.apiKey;
        key = verification.verifyFunc(key);
        if(key.permition >= 1) {
                let filter = req.body.filter;
                if(filter=="") {
                        let timeLine = await im.grabTimeline();
                        res.status(200).send(timeLine.reverse());
                } else {
                        let timeLine = await im.grabUserTimeline(filter);
                        res.status(200).send(timeLine.reverse());
                }
        }
});

module.exports = router;