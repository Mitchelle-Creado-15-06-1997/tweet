
var formdata={};
var name;
var idval;
console.log(idval);

function what(){
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
        $.each(data, function (index, value) {
            html+=`
            <article class="post">
                <header>
                    <div class="title">
                        <h2><a href="single.html"></a></h2>
                   ${data[index].post_text}
                   <p></p>
                    </div>
                    <div class="meta">
                        <time class="published" datetime="2015-11-01">${data[index].updated_at}</time>
                        <a href="#" class="author"><span class="name">${data[index].userhandle}</span><img src="images/avatar.jpg" alt="" /></a>
                        </div>
                </header>
                <a href="single.html" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
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

        });
     
        $('#post').html(html);
      
       
    })
    .fail(function(jqxhr,textStatus,err){
        console.log('Ajax error',textStatus);
    });
}


function bodyimage(){
    
   
}
//localStorage.setItem("vOneLocalStorage", imageurl);
$(document).ready(function() {


 
    var post_data={
        user_handle: name
      
        
    }
 
    $.ajax({
         type:"POST",
         
         url:window.location +"/editprofileget",
         data : post_data,
         datatype:'json'
 
     })
     .done(function(data){
 imageonload = data[0].profile_image;

console.log(imageonload);
var image = document.getElementById('profile_image');
       image.src = imageonload;
       console.log();
         console.log("data is"+data[0].profile_image);
        
       
     })
     .fail(function(jqxhr,textStatus,err){
         console.log('Ajax error',textStatus);
     });
     
   //console.log("it is"+JSON.stringify(imageonload));
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                console.log("it is"+imageonload);
                $('.profile-pic').attr('src', e.target.result);
                    
            }
    
			reader.readAsDataURL(input.files[0]);
			imageurl = input.files[0].name;
            console.log(imageurl);
            editprofile();
        }
        else{
        
        }
    }
    

    $(".file-upload").on('change', function(){
      //  console.log("it is"+imageonload);

		readURL(this);
		////console.log(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});
function get(){
     formdata={
        user_handle : $("#Userhandle").val(),
        password:$("#userPass").val()
    }
    
   // //console.log(formdata.user_handle);
    $.ajax({
        type:"POST",
        
        url:window.location +"ajaxLogin",
        data : formdata,
        datatype:'json'

    })
    .done(function(data){
       // var datanew = data;
       
         name= data[0].Name;
         idval = data[0].user_id;
     


   // //console.log(datanew[0].Name);
        $('#getResponse').html(name);
       // window.location.href = `http://localhost:3000/home/${name}`;
        window.location.href = `http://localhost:3000/home`;

        
        

      
    })
    .fail(function(jqxhr,textStatus,err){
        //console.log('Ajax error',textStatus);
    });
}
var vOneLS = localStorage.getItem("vOneLocalStorage ");



function editprofileget(){
  
 
 }




function editprofile(){
    //console.log("hi");
   //var name1="hi";
    // var name=document.getElementById("namedisp").value;  
   // var image = document.getElementById("profile_image").src;
   
  // var image= vOneLS;
    //console.log("url is"+imageurl);
    var path = "home/profile_image/";
   // //console.log(imageurl);
    var post_data={
        user_handle: name,
        profile_image : path+imageurl
       // hashtag:$("#hashtag").val(),
       // media : $("#media").val(),
       // userhandle : name
        
    }
    //console.log(post_data);
   // //console.log(post_data);
    $.ajax({
         type:"POST",
         
         url:window.location +"/editprofile",
         data : post_data,
         datatype:'json'
 
     })
     .done(function(data){
         //console.log("data is"+data);
        
         
          // $('#result').html("invalid user_handle and password");
         
         
       //  $('#result').html(JSON.stringify(data));
 
         
           
         
        
         
       
     })
     .fail(function(jqxhr,textStatus,err){
         console.log('Ajax error',textStatus);
     });
    
   // //console.log(formdata.user_handle);
   //console.log(`name is ${name}`);
   
 //console.log("edit me");
 }
what();


var imgname;
function post_tweet(){
    var path = "home/tweet_image/";
   //var image = file.name;
var image = document.getElementById('media').name;
    console.log("it is"+image);

    $(".media").on('change', function(){
        //  console.log("it is"+imageonload);
  
          //readURL(this);
        console.log("data"+this);
      });
      //console.log("hi");
      
        //$(".media").click();
        
     
      
   var post_data={

       post_text : $("#post_text").val(),
      // media : path+imgname,

      // hashtag:$("#hashtag").val(),
      // media : $("#media").val(),
       userhandle : name
       
   }
   $.ajax({
        type:"POST",
        
        url:window.location +"/tweets",
        data : post_data,
        datatype:'json'

    })
    .done(function(data){
       
        
         // $('#result').html("invalid user_handle and password");
        //console.log(data);
        reset_tweet();
        $('#result').html(JSON.stringify(data));

        
          
        
       
        
      
    })
    .fail(function(jqxhr,textStatus,err){
        //console.log('Ajax error',textStatus);
    });
   
  }
  function reset_tweet()
  {
     $("#post_text").val("");
  }

  


  function retweet(index){
    var id = id;
    console.log(id);
var post_data ={
    user_id:id,
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





