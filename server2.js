var http = require('http');
var fs = require('fs');
var path = require('path');
var express=require('express');
var morgan=require('morgan');
var app=express();

var hostname = 'localhost';
var port = 3000;
app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));
app.use(function(req,res,next)
  {
    console.log(req.url);
    console.log(req.headers);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<html><body><h1>body</h1></body></html>');
  });
app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});