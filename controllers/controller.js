var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.get('/home',function(req,res){
  res.render('home');
});

app.get('/contact',function(req,res){
  res.render('contact');
});




module.exports = app;
