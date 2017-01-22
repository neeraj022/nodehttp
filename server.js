var http = require('http');
var fs = require('fs');
var path = require('path');
var express=require('express');
var morgan=require('morgan');
var bodyParser=require('body-parser');
var app=express();

var hostname = 'localhost';
var port = 3000;
app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));

var dishRouter=express.Router();
dishRouter.use(bodyParser.json());
var dishRouterFile=require('./dishRouter');
dishRouterFile(dishRouter);
app.use('/dishes', dishRouter);


var promoRouter=express.Router();
promoRouter.use(bodyParser.json());
var promoRouterFile=require('./promoRouter');
promoRouterFile(promoRouter);
app.use('/promotions', promoRouter);


var leaderRouter=express.Router();
leaderRouter.use(bodyParser.json());
var leaderRouterFile=require('./leaderRouter');
leaderRouterFile(leaderRouter);
app.use('/leadership', leaderRouter);

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});