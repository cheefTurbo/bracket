var addUser = document.getElementById("button")
addUser.addEventListener("click", function(){
  var newVictim = document.createElement("li");
  document.getElementsByClassName("victimList")[0].appendChild(newVictim);
})
