//-----------------------------------modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
//----------------------------------- routes
const timeLineRoute = require('./routes/timeline')
const postRoutes = require('./routes/post');
const loginRoutes = require('./routes/login')
//---------------------------------- routeing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/",express.static(path.join(__dirname,"/static")));
app.use("/timeline",timeLineRoute);
app.use("/post",postRoutes);
app.use("/login",loginRoutes);

module.exports=app;
