/* Scaffolding
 it is technq that is supperted by some mvc frmwrks,
 it supports candy and web based projects
*/

var express = require('express');
var app = express();
app.get('/', function(req, res){
    res.send('this is expressjs');
});
app.listen(2000, function (){
    console.log("server is running");
});

// it will create a .json file and shows in a dictionary format,


