
var formdata = {};
var name;
var idval;
var txt;
function imagechange(){
    var x = document.getElementById("media");
    txt = "";
    if ('files' in x) {
        
           
            var file = x.files[0];
            if ('name' in file) {
              txt =  file.name;
            }
    
}
console.log(txt);
}
console.log(idval);

function what() {
    document.getElementById("namedisp").innerHTML = `@${name}`;
};
var imageonload;
var imageurl;
function displaytweets(){
    var post_data={
        userhandle:name
    }
    $.ajax({
        type:"post",
        url:window.location +"/displaytweets",
        data : post_data,
        
        datatype:'json'

    })
    .done(function(data){
        var html = "";
        var t = "";
        var tweet_time ="";
        $.each(data, function (index, value) {

            t = data[index].updated_at;
            tweet_time = t.toLocaleString('en-US',{timeZone : "Asia/Kolkata"});
         // t =  data[index].updated_at.split("T");
            html+=`
            <article class="post">
                <header>
                    <div class="title">
                        <h2><a href="single.html"></a></h2>
                   ${data[index].post_text}
                   <p></p>
                    </div>
                    <div class="meta">
                        <time class="published" datetime="2015-11-01">${tweet_time}</time>
                        <a href="#" class="author"><span class="name">${data[index].userhandle}</span><img src="images/avatar.jpg" alt="" /></a>
                        </div>
                </header>
                <a href="single.html" class="image featured"></a>
                <iframe src="${data[index].media}" height="400" style="width:100%"></iframe>
                <p></p>
                <footer>
                    <ul class="actions">
                        <li><button class="button large" onclick="retweet(${data[index].tweet_id})">Retweet</button></li>
                    </ul>
                    <ul class="stats">
                        <li><a href="#"></a></li>
                        <li><a href="#" class="icon solid fa-heart" onclick="glow()"></a></li>
                        <li><a href="#" class="icon solid fa-comment">128</a></li>
                    </ul>
                </footer>
            </article>`;
   // console.log(data[index].tweet_id);
         t = ""; 
         tweet_time ="";
        });
     
        $('#post').html(html);
      
       
    })
    .fail(function(jqxhr,textStatus,err){
        console.log('Ajax error',textStatus);
    });
}

function bodyimage() {


}
//localStorage.setItem("vOneLocalStorage", imageurl);
$(document).ready(function () {



    var post_data = {
        user_handle: name


    }

    $.ajax({
        type: "POST",

        url: window.location + "/editprofileget",
        data: post_data,
        datatype: 'json'

    })
        .done(function (data) {
            imageonload = data[0].profile_image;

            console.log(imageonload);
            var image = document.getElementById('profile_image');
            image.src = imageonload;
            console.log();
            console.log("data is" + data[0].profile_image);


        })
        .fail(function (jqxhr, textStatus, err) {
            console.log('Ajax error', textStatus);
        });

    //console.log("it is"+JSON.stringify(imageonload));
    var readURL = function (input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                console.log("it is" + imageonload);
                $('.profile-pic').attr('src', e.target.result);

            }

            reader.readAsDataURL(input.files[0]);
            imageurl = input.files[0].name;
            console.log(imageurl);
            editprofile();
        }
        else {

        }
    }


    $(".file-upload").on('change', function () {
        //  console.log("it is"+imageonload);

        readURL(this);
        ////console.log(this);
    });

    $(".upload-button").on('click', function () {
        $(".file-upload").click();
    });
});
function get() {
    formdata = {
        user_handle: $("#Userhandle").val(),
        password: $("#userPass").val()
    }

    // //console.log(formdata.user_handle);
    $.ajax({
        type: "POST",

        url: window.location + "ajaxLogin",
        data: formdata,
        datatype: 'json'

    })
        .done(function (data) {
            // var datanew = data;

            name = data[0].Name;
            idval = data[0].user_id;



            // //console.log(datanew[0].Name);
            $('#getResponse').html(name);
            // window.location.href = `http://localhost:3000/home/${name}`;
            window.location.href = `http://localhost:4000/home`;





        })
        .fail(function (jqxhr, textStatus, err) {
            //console.log('Ajax error',textStatus);
        });
}
var vOneLS = localStorage.getItem("vOneLocalStorage ");



function editprofileget() {


}




function editprofile() {
    //console.log("hi");
    //var name1="hi";
    // var name=document.getElementById("namedisp").value;  
    // var image = document.getElementById("profile_image").src;

    // var image= vOneLS;
    //console.log("url is"+imageurl);
    var path = "home/profile_image/";
    // //console.log(imageurl);
    var post_data = {
        user_handle: name,
        profile_image: path + imageurl
        // hashtag:$("#hashtag").val(),
        // media : $("#media").val(),
        // userhandle : name

    }
    //console.log(post_data);
    // //console.log(post_data);
    $.ajax({
        type: "POST",

        url: window.location + "/editprofile",
        data: post_data,
        datatype: 'json'

    })
        .done(function (data) {
            //console.log("data is"+data);


            // $('#result').html("invalid user_handle and password");


            //  $('#result').html(JSON.stringify(data));







        })
        .fail(function (jqxhr, textStatus, err) {
            console.log('Ajax error', textStatus);
        });

    // //console.log(formdata.user_handle);
    //console.log(`name is ${name}`);

    //console.log("edit me");
}
what();


var imgname;
function getHashTags(inputText) {
    var regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;
    var matches = [];
    var match;

    while ((match = regex.exec(inputText))) {
        matches.push(match[1]);
    }
    var hash = matches.toString();
    return hash;
}
function post_tweet() {
    var path = "home/profile_image/";
    //var image = file.name;
   
    var file = document.querySelector('input[type=file]').files[0];
    //var imgname = $("#media").name.val();
 console.log("imgnmae "+file);
 var txt1=txt;
    var hash = getHashTags($("#post_text").val());
    var post_data = {

        post_text: $("#post_text").val(),
        hashtag: hash,
         media : path+txt1,

        // hashtag:$("#hashtag").val(),
        // media : $("#media").val(),
        userhandle: name

    }
    $.ajax({
        type: "POST",

        url: window.location + "/tweets",
        data: post_data,
        datatype: 'json'

    })
        .done(function (data) {


            // $('#result').html("invalid user_handle and password");
            //console.log(data);
            reset_tweet();
            alert("Posted Successfully");

            $('#result').html(JSON.stringify(data));







        })
        .fail(function (jqxhr, textStatus, err) {
            //console.log('Ajax error',textStatus);
        });

}
document.getElementById("postid").style.visibility = "hidden";

function tweetfunction(){
   // document.getElementById("postbutton").style.visibility = "hidden";

    document.getElementById("postid").style.visibility = "visible";

}
function reset_tweet()
  {
     $("#post_text").val("");
     
     $("#media").val("");
  }

  
function searchglobal() {
    var html ="";
    var searchname = $("#searchname").val();

    var n = searchname.startsWith("#");
    console.log(n);
    if (n==true) 
    {
        console.log("hashtag if");
        search_hashtag();
    }
     else{
         console.log(" i m in else")
        var send_search = {
            searchname:$("#searchname").val()

        }
        $.ajax({
            type: "POST",

            url: window.location + "/searchprofile",
            data: send_search,
            datatype: 'json'

        })
            .done(function (data) {
                var n = data.length;

                 if (n === 0 ){
                    console.log(n);   
                    $('#dispsearch').html("not found");
                 }
                      //console.log(data.length);
                  
                        //console.log(typeof(data));
                        else{
                            $.each(data, function (index, value) {

                    html+=`
                    

                    <span class="name"><img src="${data[index].profile_image}" alt="" height="30" width="30px" />${data[index].Name}</span>
                        <button class="button button4" onclick="follow(${data[index].user_id})">Follow</button>
                `;
                            });
                $('#dispsearch').html(html);
                        }
            })
            .fail(function (jqxhr, textStatus, err) {
                console.log('Ajax error', textStatus);
            });

        }

}
function follow(index){
   
    var index1 = {
        index: index

    }
    console.log(index);
    $.ajax({
        type: "POST",

        url: window.location + "/follow",
        data: index1,
        datatype: 'json'

    })
        .done(function (data) {
            console.log("done");
            
        })
        .fail(function (jqxhr, textStatus, err) {
            console.log('Ajax error', textStatus);
        });


}

function search_hashtag() {
    var html ="";
    console.log("search hashtag");
    var searchname = $("#searchname").val();
    var send_search = {
        searchname

    }
    $.ajax({
        type: "POST",

        url: window.location + "/searchhashtag",
        data: send_search,
        datatype: 'json'

    })
        .done(function (data) {
            if(data.length === 0)
            {
                $('#dispsearch').html("NOT FOUND");
            }

            else{
                $.each(data, function (index, value) {
console.log(data[index].media);
                    html+=`
                    
                  <center>  @${data[index].userhandle}</center><br>
                  <center>   <span class="name"><iframe src="${data[index].media}" height="100" style="width:100px"></iframe><br>${data[index].post_text}<br></span> </center>  
                        
                `;
                            });
            $('#dispsearchHash').html(html);
            }
        })
        .fail(function (jqxhr, textStatus, err) {
            console.log('Ajax error', textStatus);
        });


}




function retweet(index){
    var user_handle = name;
    //console.log(id);
var post_data ={
    //user_id:id,
    user_handle,
    tweet_id:index

}
    $.ajax({
        type:"POST",
        
        url:window.location +"/retweet",
        data : post_data,
        datatype:'json'

    })
    .done(function(data){

       
      
    })
    .fail(function(jqxhr,textStatus,err){
        console.log('Ajax error',textStatus);
    });

}





