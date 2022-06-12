var password = document.getElementById("floatingPassword");
var Email = document.getElementById("floatingInput");
var loginButton = document.getElementById("login");
var allButtons = document.querySelectorAll(".buttons button");
var MySection = document.querySelector("section");
var allDiv = document.querySelectorAll(".form section")
var emailerror = document.getElementById("emailerror");
var passerror = document.getElementById("passerror");
var loginerror = document.getElementById("loginerror");

// var email = document.getElementById("floatingInput").value;
// var pass = document.getElementById("floatingPassword").value;


Email.focus();

//show and hide login and about
function dispaly(x) {
  index = x.getAttribute("index");

  allDiv[index].classList.remove("hide");
  allDiv[index].classList.add("show");

  currentSib = Array.from(allDiv).slice();
  currentSib.splice(index, 1);

  for (var i = 0; i < currentSib.length; i++) {
    currentSib[i].classList.add("hide");
    currentSib[i].classList.remove("show");
  }
}
//show password
function myFunction() {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}


// login button
loginButton.addEventListener("click", function () {
  //user Email feild
   if (Email.value == "") {
    emailerror.innerHTML = "!Enter your user Email"
    Email.focus();
  }
   else if (!Email.value == "") {
    emailerror.innerHTML = "OK "
    emailerror.style.color = "green"
  }

  //password field
   if (password.value == "") {
    passerror.innerHTML = "!Enter your password"
    password.focus();
  }
  else if (!password.value == "") {
    passerror.innerHTML = "OK "
    passerror.style.color = "green"
  }
 
  if(!Email.value == "" && !password.value == "") {
  
  //*BACK_END*
  const em = Email.value;
  const pass = password.value;

  // var axios = require('axios');
  var data = JSON.stringify({
    "strategy": "local",
    "password": pass,
    "email": em
  });
  
  var config = {
    method: 'post',
    url: 'http://localhost:8080/login',
    headers: { 
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWU0YjI3MTkyNTFkYWNlMDE4NjdhYSIsImlhdCI6MTY0MzAwNjc1OSwiZXhwIjoxNjUwNzgyNzU5fQ.BP0zZJB8zQs_Fhe0V2_C6RbQO0VLDkqZGIkjCQk3Fu8', 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(response.data.user.role);
    const role = response.data.user.role;
      if (role === "admin") {
      window.open('admin.html');
      var jwt = response.data.accessToken;
      localStorage.setItem("jwt", jwt);
      console.log(jwt);
    }
    else if(role === "user") {
      window.open('User.html');
    }
  })
  .catch(function (error) {
    console.log(error);
    loginerror.innerHTML = "invalid email or password"
    loginButton.style.color ="red"
  });
  

 }

}) 