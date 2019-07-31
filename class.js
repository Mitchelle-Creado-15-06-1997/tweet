const express=require('express');
const app = express();
const Joi = require('joi');
var mysql= require('mysql');
var bodyParser = require('body-parser');
//var routes = require('./route.js');
var connection= require('./connect.js');
var session = require('express-session');
var path = require('path');

"use strict"

class finmin{
    getindex(request, response){
        response.sendFile(path.join(__dirname + '/views/login.html'));
    }

    getregistration(request, response){
        response.sendFile(path.join(__dirname + '/views/registration.html'));
    }

    postauth(request, response) {
        var user_handle = request.body.user_handle;
        var password = request.body.password;
        if (user_handle && password) {
            connection.query('SELECT * FROM user WHERE user_handle = ? AND password = ?', [user_handle, password], function(error, results, fields) {
                if (results.length > 0) {
                    request.session.loggedin = true;
                    request.session.user_handle = user_handle;
                    response.redirect('/home');
                } else {
                    response.send('Incorrect Username and/or Password!');
                }			
                response.end();
            });
        } else {
            response.send('Please enter Username and Password!');
            response.end();
        }
    }

    postauth2(request,response){
            var user_handle = request.body.user_handle;
            var password = request.body.password;
            var Name = request.body.Name;
            var email = request.body.email;
        const courses={
            user_handle,
            password,
            Name,
            email
            
        
        };
            connection.query(`INSERT INTO user set?`,[courses])
            response.sendFile(path.join(__dirname + '/views/login.html'));
        
            console.log(user_handle);
            

        }
    gethome(request, response) {
            if (request.session.loggedin) {
                response.send('Welcome back, ' + request.session.user_handle + '!');
                // response.sendFile(path.join(__dirname + '/home'));
                //response.redirect('login.html');
                //console.log("hii");
                  //response.render('index.html');
                //response.sendFile(path.join(__dirname + '/login.html'));
        var name =request.session.user_handle;
        console.log(name);
            // response.sendFile(path.join(__dirname + '/index.html', {name:name}));
                
            } else {
                response.send('Please login to view this page!');
            }
            response.end();
        }
    


}

module.exports = finmin