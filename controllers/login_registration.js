const express = require('express');
const app = express();
const Joi = require('joi');
var mysql = require('mysql');
var bodyParser = require('body-parser');
//var routes = require('./route.js');
var connection = require('../connect.js');
var session = require('express-session');
var path = require('path');
var bcrypt = require('bcrypt');
app.use(bodyParser.json());


"use strict"

class Login_registration {
    getindex(request, response) {
        response.sendFile(path.join(__dirname + '/../views/login.html'));
    }

    getregistration(request, response) {
        response.sendFile(path.join(__dirname + '/../views/registration.html'));
    }

    postauth(request, response) {
        var user_handle = request.body.user_handle;
        var password = request.body.password;
        if (user_handle && password) {
            connection.query('SELECT * FROM user WHERE user_handle = ? AND password = ?', [user_handle, password], function (error, results, fields) {
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
    followercount(request, response){
        var user_handle = request.body.name;
        console.log("it si "+request.body.name);

        connection.query('SELECT count(*) FROM user_follower WHERE user_handle = ? ', [user_handle], function (error, results, fields) {
            response.send(results);
            

        });


    }
    postauth2(request, response) {
        var user_handle = request.body.user_handle;
        var password = request.body.password;
        var Name = request.body.Name;
        var email = request.body.email;
        var password_hash = request.body.password_hash;
        const courses = {
            user_handle,
            password,
            Name,
            email,
            password_hash


        };



        // connection.query(`INSERT INTO user set?`,[courses])


        bcrypt.hash(courses.password_hash, 10, function (err, hash) {
            if (err) //console.log(err);
                courses.password_hash = hash;
            connection.query(`INSERT INTO user set?`, [courses])
            //response.sendFile(path.join(__dirname + '/../views/login.html'));
            response.redirect('/');

            //console.log(courses.password_hash);

        });






        // response.sendFile(path.join(__dirname + '/views/login.html'));

        // //console.log(user_handle);


    }
    editprofile(request, response) {

        // var user_handle = request.body.user_handle;

        var profile_image = request.body.profile_image;
        var user_handle = request.body.user_handle;
        //console.log("edit func");
        // //console.log(profile_image);
        // //console.log(user_handle);

        //  //console.log("hi");
        connection.query('update user set profile_image=? where user_handle=?', [profile_image, user_handle]);


        response.send("success");


    }
    editprofileget(request, response) {

        // var user_handle = request.body.user_handle;
        var user_handle = request.body.user_handle;
        var img;
        // //console.log("edit func");
        // //console.log(profile_image);
        // //console.log(user_handle);

        //  //console.log("hi");
        connection.query('select profile_image from user where user_handle=?', [user_handle], function (error, results, fields) {
            if (results.length > 0) {

                response.send(results);
                console.log(results);
            }
            response.end();
        });


        //   response.send();


    }
    gethome(request, response) {
        var name = request.params.name;
        if (request.session.loggedin) {
            response.send('Welcome back, ' + request.session.name + '!');
            // response.sendFile(path.join(__dirname + '/home'));
            //response.redirect('login.html');
            ////console.log("hii");
            //response.render('index.html');
            //response.sendFile(path.join(__dirname + '/login.html'));
            //  var name =request.session.user_handle;
            // //console.log(name);
            // response.sendFile(path.join(__dirname + '/index.html', {name:name}));

        } else {
            response.send('Please login to view this page!');
        }
        response.end();
    }

    forgot_pass(request, response) {
        response.sendFile(path.join(__dirname + '/../views/forgot_pass.html'));
    }

    for_password(request, response) {
        var email = request.body.email;
        //  //console.log(JSON.stringify(email));
        connection.query('select user_id from user where email= ? ', [request.body.email], function (err, data) {
            if (err)
                console.log(err);
            else {
                response.send(JSON.stringify(data));
                //  //console.log(data);

            }
        });
    }

    ajaxLogin(request, response) {

        var user_handle = request.body.user_handle;

        var password = request.body.password;
        // //console.log(user_handle);
        if (user_handle && password) {
            //  //console.log("hi");
            connection.query('SELECT * FROM user WHERE user_handle = ? AND password = ?', [user_handle, password], function (error, data, fields) {
                if (data.length > 0) {
                    request.session.loggedin = true;
                    request.session.user_handle = user_handle;
                    response.send(data);

                    //response.redirect('/home');
                } else {
                    var num = '';
                    response.send(num);
                    console.log("num" +num);
                }
                response.end();
            });
        } else {
            //   //console.log("hi2");

            response.send('Please enter Username and Password!');
            response.end();
        }

    }


   retweet(request, response){
console.log("retweet class");
        var tweet_id = request.body.tweet_id;
       var user_handle= request.body.user_handle;
         const  tweet ={
             user_handle,
             tweet_id
     
         }
         var idname;
          connection.query('insert into retweet (tweet_id,user_id) values (? ,(select user_id from user where user_handle = ?))',[tweet_id,user_handle],function(err,data){
              if(err)
              {throw err;}
              else
              {
                //idname= data[0].user_id;
                //  console.log(idname);
              } 
    
          });
     
        // connection.query('Insert into retweet set ?',[tweet])
         //response.send("success");
     
     
     
    
    }
    like(request, response){
       var likecount = request.body.likecount;
        var tweet_id = request.body.tweet_id;
        connection.query('update tweets set likecount = likecount + likecount where tweet_id =?', [tweet_id])


    }
    displaytweets(request, response) {
        var userhandle = request.body.userhandle;
        connection.query('select * from tweets where userhandle = ?  order by updated_at desc', [userhandle], function (err, data) {
            response.send(data);
            console.log(data[0].updated_at);
            if (err) {
                response.send("error");
            }
        });
    }
    forgot_pass(request, response) {
        response.sendFile(path.join(__dirname + '/../views/forgot_pass.html'));
    }

    for_password(request, response) {
        var email = request.body.email;
        //  //console.log(JSON.stringify(email));
        connection.query('select user_id from user where email= ? ', [request.body.email], function (err, data) {
            if (err)
                console.log(err);
            else {
                response.send(JSON.stringify(data));
                //  //console.log(data);

            }
        });
    }

follow(request, response){
    var follower_id = request.body.index;
    var namefollower = request.body.user_handle;
    var unfollow = "unfollow";
    
    
    connection.query('insert into user_follower (user_id,follower_id, unfollow) values ((select user_id from user where user_handle = ?),? ,?)',[namefollower,follower_id,unfollow],function(err,data){

   
        if(err)
        {throw err;}
        else
        {
          //idname= data[0].user_id;
          //  console.log(idname);
        } 

    });
    


}

unfollow(request, response){
    var follower_id = request.body.index;
    var namefollower = request.body.user_handle;
    var unfollow = "unfollow";
    
    
    connection.query('delete from user_follower where follower_id=?',[follower_id],function(err,data){

   
        if(err)
        {throw err;}
        else
        {
          //idname= data[0].user_id;
          //  console.log(idname);
        } 

    });
    


}

    search_profile(request, response) {
        console.log("i m in class")

        var searchname = request.body.searchname;
        var name = request.body.name;
        console.log("searchname"+searchname);
        console.log("name"+name);

        connection.query(` select * from user where user_handle = ? and not exists(select * from user_follower where user_id=(select user_id from user where user_handle =? ) and follower_id =(select user_id from user where user_handle=?))   `, [searchname, name,searchname], function (err, data) {
            console.log("hi");

            response.send(data);
console.log("data"+JSON.stringify(data));
               
         

        });
    }

    search_profileunfollow(request, response) {
        console.log("i m in class")

        var searchname = request.body.searchname;
        var name = request.body.name;
        console.log(name);
        connection.query(` select * from user where user_handle = ? and exists(select * from user_follower where user_id=(select user_id from user where user_handle =? ) and follower_id =(select user_id from user where user_handle=?))   `, [searchname, name,searchname], function (err, data) {
            console.log("hi");

            response.send(data);
console.log(data);
               
         

        });
    }




    search_hashtag(request, response) {
        var searchname = request.body.searchname;
        connection.query('select * from tweets where match(hashtag) Against(?) order by updated_at desc ', [searchname], function (err, data) {
            response.send(data);
            if (err) {
                response.send("error");
            }
        })
    }


    tweets(request, response) {
        var post_text = request.body.post_text;
        var hashtag = request.body.hashtag;
        var media = request.body.media;
        // var media = request.body.media;
        var userhandle = request.body.userhandle;
        //console.log(userhandle);
        //console.log(post_text);
        //console.log("hiiiiii");

        const tweet = {
            post_text,
            media,

            hashtag,
            userhandle

            // user_handle 

        }
        //console.log(post_text);
        console.log(tweet);

        //console.log(tweet);

        //console.log(tweet.post_text);
        //console.log(tweet.userhandle);


        connection.query('Insert into tweets set ?', [tweet])
        response.send("success");



    }





    ajaxcallindex(request, response) {

        var id = request.body.id;

        //console.log("id is"+id);

        // var password = request.body.password;
        // //console.log(user_handle);
        if (id) {
            //  //console.log("hi");
            connection.query(`SELECT * FROM user WHERE id = ? `, [id], function (error, data, fields) {
                if (data.length > 0) {
                    request.session.loggedin = true;
                    request.session.user_handle = user_handle;
                    response.send(data);

                    //response.redirect('/home');
                } else {
                    response.send('Incorrect Username and/or Password!');
                }
                response.end();
            });
        } else {
            //   //console.log("hi2");

            response.send('Please enter Username and Password!');
            response.end();
        }

    }
}

module.exports = Login_registration;
