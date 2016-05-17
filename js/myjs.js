
$(document).ready(function(){
    $("#opener-register").click(function(){
        
        var email = $(".register-email").val();
        var password = $(".register-password").val();
    
        var ref = new Firebase("https://luminous-inferno-3139.firebaseio.com/");

        ref.createUser({
            email: email,
            password: password
        }, function(error, userData){
            if(error){
                console.log("Error creating user:", error);
            } else {
                console.log("successful:", userData.uid);
            }
        });
        return false;
    }); 

    $("#opener-login").click(function(){
      
        var email = $("#login-email").val();
        //get email value for input with id login-email 
        var password = $("#login-password").val();
        ////get email value for input with id login-password 
        var ref = new Firebase("https://luminous-inferno-3139.firebaseio.com/");
        //link with firebase

        ref.authWithPassword({
          email    : email,
          password : password
        }, function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
            //if login is not right, show error
          } else {
            console.log("Authenticated successfully with payload:", authData);
            window.location.href="http://yycreate.com/Myacademy/login.html";
            //if login is right,
          }
        });
        return false;
    });

    $("#opener-logout").click(function() {

        var ref = new Firebase("https://luminous-inferno-3139.firebaseio.com/");
        ref.unauth();

        window.location.href="http://yycreate.com/Myacademy";
        alert("already logged out!");
        });













});
