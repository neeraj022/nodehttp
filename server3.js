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
app.use(bodyParser.json());
app.all('/dishes',function(req,res,next)
	{
		res.writeHead(200, {'Content-type': 'text/plain'});
		next();
	});
app.get('/dishes', function(req,res,next)
	{
		res.end('Will get u all the dishes');
	});
app.delete('/dishes', function(req,res,next)
	{
		res.end('Will delete all the dishes');
	});
app.post('/dishes', function(req,res,next)
	{
		res.end('Will add the dish '+req.body.name+' with description of '+req.body.description);
	});
app.get('/dishes/:dishId', function(req,res,next)
	{
		res.end('Will get u the dish '+req.params.dishId);
	});
app.delete('/dishes/:dishId', function(req,res,next)
	{
		res.end('Will delete the dish '+req.params.dishId);
	});
app.put('/dishes/:dishId', function(req,res,next)
	{
		res.end('Will update the dish '+req.params.dishId+' with name '+req.body.name+' with description of '+req.body.description);
	});
app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});