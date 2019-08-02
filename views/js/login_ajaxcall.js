
var formdata={};
var name;
function what(){
    document.getElementById("namedisp").innerHTML = `@${name}`;
};
function get(){
     formdata={
        user_handle : $("#Userhandle").val(),
        password:$("#userPass").val()
    }
    
   // console.log(formdata.user_handle);
    $.ajax({
        type:"POST",
        
        url:window.location +"ajaxLogin",
        data : formdata,
        datatype:'json'

    })
    .done(function(data){
       // var datanew = data;
       
         name= data[0].Name;
     


   // console.log(datanew[0].Name);
        $('#getResponse').html(name);
       // window.location.href = `http://localhost:3000/home/${name}`;
        window.location.href = `http://localhost:3000/home`;

        
        

      
    })
    .fail(function(jqxhr,textStatus,err){
        console.log('Ajax error',textStatus);
    });
}
what();



function post_tweet(){
    console.log("hi");
   var post_data={

       post_text : $("#post_text").val(),
      // hashtag:$("#hashtag").val(),
      // media : $("#media").val(),
       userhandle : name
       
   }
  // console.log(post_data);
   $.ajax({
        type:"POST",
        
        url:window.location +"/tweets",
        data : post_data,
        datatype:'json'

    })
    .done(function(data){
       
        
         // $('#result').html("invalid user_handle and password");
        
        
        $('#result').html(JSON.stringify(data));

        
          
        
       
        
      
    })
    .fail(function(jqxhr,textStatus,err){
        console.log('Ajax error',textStatus);
    });
   
  }