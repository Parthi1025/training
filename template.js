// /* use static template file in apps,
// at runtime, it replace var in atemp file with actual files, tranforms the temp into html sent to client. 
// template engines are jade(pug), mustache,
// pug = haml uses whitespace
// using temp engine express, it create a dir and tep filea are stored
// app.set('views', '/views')
// pug uses whitespace and indentation part of syntax
// */


var express = require('express');  
var app = express();  
//set view engine  
app.set("views engine","pug")  
app.get('/', function (req, res) {  
res.render('views.pug', index);  
 res.render('index');  
});  
var server = app.listen(5000, function () {  
    console.log('Node server is running..');  
});  