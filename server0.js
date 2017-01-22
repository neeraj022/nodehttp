var http=require('http');
var port=8000;
var host='localhost';
var server=http.createServer(function(req,res){
	console.log(req.headers);
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.end('<html><body><h1>Hello World</h1></body></html>');
});

server.listen(port, host, function(){
	console.log('server listening on : '+port);
});