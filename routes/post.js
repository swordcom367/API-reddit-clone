//this rouit should be used for createing a post
const express = require('express');
const router = express.Router();
const im = require(`../databace interactions/interactionManiger`)
const postModel = require('../dataModels/postModel');
const dummyData = require('../testing/dummyData/dummyTimeline')
const verification= require('../verifications/verifyApiKey');
router.post("/",async (req,res,next)=> {
    let key = req.body.apiKey;
    key = verification.verifyFunc(key);
    if(key.permition == 1) {

    //get data from body
        let header = req.body.header;
        let pic = req.body.picture;
        let disc = req.body.discription;
        let postTime = "will be real time latter"
        let user = req.body.user;
        var post = postModel.createPost(header,pic,disc,postTime,user);
        // add to databace for now just add to fo databace
        im.createPost(post);
        let timeline = await im.grabTimeline()

        res.status(200).send(timeline);
    } else {
        res.status(401).send("no permition")
    }
});

module.exports = router;