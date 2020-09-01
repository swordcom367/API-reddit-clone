const express = require('express');
const router = express.Router();
//---------------------------Testing
const dummyData = require('../testing/dummyData/dummyTimeline');

router.post("/",(req,res,next) => {
    res.status(200).send(dummyData.dummyTimeLine(10));
});

module.exports = router;