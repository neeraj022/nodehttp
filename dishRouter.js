module.exports=function(dishRouter){

dishRouter.route('/')
.all(function(req,res,next)
	{
		res.writeHead(200, {'Content-type': 'text/plain'});
		next();
	})
.get( function(req,res,next)
	{
		res.end('Will get u all the dishes');
	})
.delete(function(req,res,next)
	{
		res.end('Will delete all the dishes');
	})
.post(function(req,res,next)
	{
		res.end('Will add the dish '+req.body.name+' with description of '+req.body.description);
	});

dishRouter.route('/:dishId')
.all(function(req,res,next)
	{
		res.writeHead(200, {'Content-type': 'text/plain'});
		next();
	})
.get( function(req,res,next)
	{
		res.end('Will get u the dish '+req.params.dishId);
	})
.delete(function(req,res,next)
	{
		res.end('Will delete the dish '+req.params.dishId);
	})
.put( function(req,res,next)
	{
		res.end('Will update the dish '+req.params.dishId+' with name '+req.body.name+' with description of '+req.body.description);
	});

};