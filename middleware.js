// middleware;

/*  it is appears in the middle b/w an initial request and final route,
perform task like body parser for url encoded
json request, cookie parsing.
middleware fnc that are access to the request and response obj.(req, res)in cycle,
exe any code, make changes b/w req, res
end req res cycle 
call next MW fnc
list of MW used:  appcltn, router, error-h, built in, 3rd party ---level.
*/

// express pgm:
var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("this is expressjs!")
});
app.get('/help', function(req, res){
    res.send('how can i assist you');
});
var server = app.listen(8000, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("this is example at http://%s:%s", host, port);
})

// middleware pgm:

var express = require('express');
var app = express();
app.use(function(req,res,next){
    console.log('%s %s', req.method, req.url);
    next();
});
app.get('/', function(req,res,next){
    res.send('this is express js!');
});
app.get('/help', function(req,res,next){
    res.send('how may i assit you');
});
app.listen(3000, ()=>console.log("server is running"));

// mylogger function;

/*var mylogger = function(req,res,next){
    console.log('logged');
    next();
} */

var express = require('express');
var app = express();

var mylogger = function(req,res,next){
    console.log('LOGGED');
    next();
}

app.use(mylogger)

app.get('/', function(req,res){
    res.send('hello world')
});

app.listen(5000)