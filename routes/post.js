//this rouit should be used for createing a post
const express = require('express');
const router = express.Router();
const postModel = require('../dataModels/postModel');
const dummyData = require('../testing/dummyData/dummyTimeline')

router.post("/",(req,res,next)=> {
    //get data from body
    let header = req.body.header;
    let pic = req.body.picture;
    let disc = req.body.discription;
    let postTime = "will be real time latter"
    let user = req.body.user;
    //later create a function that gets an idNum from the date and time
    var post = postModel.createPost(header,pic,disc,postTime,user);
    // add to databace for now just add to fo databace

    // make an asych promos for grabing the timeline
    //soon we will link a databace
    let data=dummyData.dummyTimeLine(10);
    data.unshift(post)
    res.status(200).send(data);
});

module.exports = router;