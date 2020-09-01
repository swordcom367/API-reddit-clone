// we are using a seperet http server so latter on we can use https
const http = require('http');
const app = require("./app");


const port = 1234;//replace with an enviorment varuble

const server = http.createServer(app);

server.listen(port)