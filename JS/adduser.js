var addBtn = document.getElementById("add");
var fname = document.getElementById("first");
var lname = document.getElementById("last");
var uname = document.getElementById("username");
var password = document.getElementById("pass");
var email = document.getElementById("mail");
var errorMessage = document.getElementById("error");
var CheckRedio = document.getElementsByName("btnradio");
var uppercase = /[A-Z]/g;
var lowercase = /[a-z]/g;
var num = /[0-9]/g;
var Users = []
var jwt = localStorage.getItem('jwt')
function emptyField() {
  // First name field
  if (fname.value == "") {
    errorMessage.innerHTML = "!Plese enter first name";
    fname.focus();
  }

  //Last name field
  else if (lname.value == "") {
    errorMessage.innerHTML = "!Plese enter last name";
    lname.focus();
  }

  //user name field
  else if (uname.value == "") {
    errorMessage.innerHTML = "!Plese enter user name";
    uname.focus();
  }
else{

}
}
function passValdition() {
  

  // Password field
  let done=true;
  if (password.value == "") {
    errorMessage.innerHTML = "Plese enter password. ";
    done=false;
    password.focus();
  }
   if (password.value.length < 9) {
    errorMessage.innerHTML += " Password must be at least 9 characters long. ";
    done=false;
    password.focus();
  }
   if (!password.value.match(uppercase)) {
    errorMessage.innerHTML+= " Use at least one capital letter. ";
    done=false;
    errorMessage.style.color = "red";
    password.focus();
  }
  if (!password.value.match(lowercase)) {
    errorMessage.innerHTML += " Use at least one small letter. ";
    errorMessage.style.color = "red";
    done=false;
    password.focus();
  }
  if (!password.value.match(num)) {
    errorMessage.innerHTML += " and Use numbers and letters ";
    errorMessage.style.color = "red";
    done=false;
    password.focus();
  }
  if (done) {
    errorMessage.innerHTML = "DONE";
    errorMessage.style.color = "green";
  
    // *BACK END*   
    var select = document.getElementById('Rselect');
    var role = select.options[select.selectedIndex].text;

    var data = JSON.stringify({
      "password": password.value,
      "email": email.value,
      "username": uname.value,
      "first_name": fname.value,
      "last_name": lname.value,
      "role": role
    });

    var config = {
      method: 'post',
      url: 'http://localhost:8080/signup',
      headers: {
        'Authorization': jwt,
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        errorMessage.innerHTML = error.response.data.status;
        errorMessage.style.color = "red";
        console.log(error);


      });
      fname.value =""
      lname.value=""
      uname.value=""
      email.value =""
      password.value = ""
  }
}
//show password
function showaddPass() {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

addBtn.addEventListener("click", function () {
  emptyField();
  passValdition()

});

