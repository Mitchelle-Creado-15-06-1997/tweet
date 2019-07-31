const express=require('express');
const app = express();
const Joi = require('joi');
var mysql= require('mysql');
var bodyParser = require('body-parser');
//var routes = require('./route.js');
var connection= require('./connect.js');
var session = require('express-session');
var path = require('path');
var appfun = require('./class.js');
app.use(express.json());
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use('/assets', express.static(__dirname + '/views/assets'));
app.use('/js', express.static(__dirname + '/views/js'));
app.use('/home', express.static(__dirname + '/views/index.html'));
app.use('/images', express.static(__dirname + '/views/images'));

app.use('/css', express.static(__dirname + '/views/css'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
"use strict"
var vlass = new appfun();
app.get('/', vlass.getindex);
	
     //response.render('./index.html');
// app.get('/home', function(request, response) {
// 	response.sendFile(path.join(__dirname + '/views/index.html'));
//      //response.render('./index.html');
// });
app.get('/registration.html', vlass.getregistration);


app.post('/auth', vlass.postauth);



app.post('/auth2',vlass.postauth2);

app.get('/home', vlass.gethome);

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log(`listening on port ${port}`));
module.exports = app;
