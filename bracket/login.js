var yodi = document.getElementById("yodi");

var user = "henry.johnson@logicalposition.com";
var pass = "Logical99";

yodi.addEventListener("click",function(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if(username == user && password == pass){
  window.location.replace("https://www.logicalposition.com");
  }
  else{
    if(document.getElementsByClassName("error-alert").length<1){
      var dodul = document.getElementsByClassName("modal")[0];
      var nodul = document.createElement("div");
      nodul.className = "error-alert";
      var newContent = document.createTextNode("login machine broke");
      nodul.appendChild(newContent);
      dodul.appendChild(nodul);
    }
  }
});

// var signup = document.getElementsByClassName("signup")[0];
//
// signup.addEventListener("click",function(){
//   window.location.replace("file:///C:/Users/Henry%20Johnson/Desktop/bracket/signup.html");
// });
