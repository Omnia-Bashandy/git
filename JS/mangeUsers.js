var UL = document.getElementById("myUL");
// var li = document.query
// console.log(UL);
var deleteButton = document.getElementsByClassName("del");
var mainDev = document.getElementById('content');
var model = document.getElementById('model');
var demo = document.getElementById('demo');
var closeButton = document.getElementsByClassName('aa');
var removeButton = document.getElementsByClassName('aaa');
var XcloseButton = document.getElementsByClassName('x');
var image = document.getElementsByTagName("img")
var btn_user = document.getElementsByClassName("btn-user")
//  console.log(model);


function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput")
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    // var text = document.getElementsByTagName("p");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    // console.log(input);
    // console.log(filter);
    // console.log(ul);
    // console.log(li);
    // console.log(a);
    // console.log(i);
    // console.log(txtValue);
}
function popUp(x) {
    // var y = x.parentElement.parentElement
    var index = x.getAttribute("index");

    for (var i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", function () {
            model.style.display = 'flex';
            demo.style.display = 'flex';
            demo.style.flexDirection = 'column';
        })
    }

    for (var i = 0; i < closeButton.length; i++) {
        closeButton[i].addEventListener("click", function () {
            this.parentElement.parentElement.style.display = 'none';
            model.style.display = 'none';
            // console.log(index);
        })
    }
    for (var i = 0; i < XcloseButton.length; i++) {
        XcloseButton[i].addEventListener("click", function () {
            this.parentElement.style.display = 'none';
            model.style.display = 'none';
        })
    }
}
// var x = document.('SectionName');
// var detilsButton = document.getElementsByClassName('det')


// function ShowAndHide() {
//     if (x.style.display == 'none') {
//         x.style.display = 'block';
//     } else {
//         x.style.display = 'none';
//     }
// }

//*BACK END* (get users names)
var user_name = []
var F_name = []
var L_name = []
var E_mail = []
var u_role = []
var auth = localStorage.getItem('jwt')
var data = '';

var config = {
    method: 'get',
    url: 'http://localhost:8080/getAllUsers',
    headers: {
        'Authorization': auth
    },
    data: data
};
axios(config)
    .then(function (response) {
        console.log(response);
        for (let i = 0; i < response.data.data.data.length; i++) {
            var userEmail = response.data.data.data[i].email;
            user_name.push(response.data.data.data[i].username);
            F_name.push(response.data.data.data[i].first_name);
            L_name.push(response.data.data.data[i].last_name);
            E_mail.push(response.data.data.data[i].email);
            u_role.push(response.data.data.data[i].role);

        }
        //   console.log(user_name);
        for (var k = 0; k < user_name.length; k++) {
            // console.log(user_name[k]);
           
            UL.innerHTML +=
                `
    <li class="user product-image" index="${k}">
    
    <img src="../avater-male.png" class="userImg">
    <p class="sech">${user_name[k]}</p>
    

    <div class="info">
	<h2> Detils </h2>
	<ul>
		<li>User Name: ${user_name[k]} </li>
		<li>First Name:  ${F_name[k]}</li>
		<li>Last Name:  ${L_name[k]}</li>
		<li>E-mail : ${E_mail[k]}</li>
		<li>role: ${u_role[k]}</li>
		
	</ul>
    <div class="buttons btn-user">
        <button class="btn btn-primary del" onClick="popUp(this)" index="${k}">Delete</button>
    </div>
   </div> 
     
   </li>

    `
    //  console.log(k);   
    }
    for (var i = 0; i < removeButton.length; i++) {
        removeButton[i].addEventListener("click", function () {
            // var userindex = this.parentElement.parentElement.parentElement;
           var userindex = UL.children[i]
            // for (let j = 0; j < user_name.length; j++) {
            console.log(userindex);
        })
    }
    })
    .catch(function (error) {
        console.log(error);
    });


//Delete User
// var data = JSON.stringify({
//   "email": "wwttttttt@sfd.com"
// });

// var config = {
//   method: 'get',
//   url: 'http://localhost:8080/deleteUser',
//   headers: { 
//     'Authorization':auth,
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });




// var data = '';

// var config = {
//   method: 'get',
//   url: 'http://localhost:8080/getAllUsers',
//   headers: { 
//     'Authorization': ' eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2NTQ3Mjc1MDUsImV4cCI6MTY1NDgxMzkwNSwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYWRtaW4yQHpvby5jb20iLCJqdGkiOiIyNjU3YjQyNi03NjRkLTQ4NzYtODY3ZC00N2NmNTM5NDFkMzIifQ.OJb-ozO1czZ-Nept8Zdlmmu9i8sZhzw_uhJwMF0ta1I'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   for (let i = 0; i < response.data.data.data.length; i++) {
//     //   console.log(response.data.data.data[i].username);
//       user_name.push(response.data.data.data[i].username);
//   }
// //   console.log(user_name);
// for (var k = 0; k < user_name.length; k++) {
//     console.log(user_name[k]);

//     UL.innerHTML +=
//     `
//     <li class="user">
//     <img src="../avater-male.png">
//     <p>${user_name[k]}</p>
//     <div class="buttons btn-user">
//         <button class="btn btn-primary del" onClick="deelee()">Delete</button>
//     </div>
// </li>

//     `
// }
// function deelee(index) {
//   console.log(response);

// }

// })
// .catch(function (error) {
//   console.log(error);
// });








//*BACK END (delete user)*

// var data = JSON.stringify({
//   "email": "user5@zoo.com"
// });

// var config = {
//   method: 'get',
//   url: 'http://localhost:8080/deleteUser',
//   headers: { 
//     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2NTQ3Mjc1MDUsImV4cCI6MTY1NDgxMzkwNSwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYWRtaW4yQHpvby5jb20iLCJqdGkiOiIyNjU3YjQyNi03NjRkLTQ4NzYtODY3ZC00N2NmNTM5NDFkMzIifQ.OJb-ozO1czZ-Nept8Zdlmmu9i8sZhzw_uhJwMF0ta1I', 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

{/* <div class="buttons btn-user">
    <button class="btn btn-primary del">Delete</button>
</div> 

// function makeUL(array) {
//     // Create the list element:
//     var list = document.createElement('ul');

//     for (var i = 0; i < array.length; i++) {
//         // Create the list item:
//         var item = document.createElement('li');

//         // Set its contents:
//         item.appendChild(document.createTextNode(array[i]));

//         // Add it to the list:
//         list.appendChild(item);
//     }
//     // Finally, return the constructed list:
//     return list;
// }
    
//     console.log(makeUL(user_name));

*/}
