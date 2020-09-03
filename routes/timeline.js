const express = require('express');
const router = express.Router();
//---------------------------Testing
//const dummyData = require('../testing/dummyData/dummyTimeline');
const im = require('../databace interactions/interactionManiger')

router.post("/",async function(req,res,next) {
        let timeLine = await im.grabTimeline();
        res.status(200).send(timeLine.reverse());
});

module.exports = router;