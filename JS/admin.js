var MySection = document.querySelectorAll(".ali section");
var allli = document.getElementsByClassName("navLi")
var newli = document.querySelectorAll(".Drop section")
// console.log(MySection);
// console.log(allli);
// console.log(newli);

function boxHandler() {
    setToggle(false)
  }

//show and hide login and about
function dispaly(x) {
    index = x.getAttribute("index");
    
    MySection[index].classList.remove("hide");
    MySection[index].classList.add("show");
    // console.log(MySection[index]);
    currentSib = Array.from(MySection).slice();
    currentSib.splice(index, 1);

    for (var i = 0; i < currentSib.length; i++) {
    currentSib[i].classList.add("hide");
    currentSib[i].classList.remove("show");
    }
}
function dispalyDrop(x) {
    index = x.getAttribute("index");
    console.log(newli[index]);
    newli[index].classList.remove("hide");
    newli[index].classList.add("show");
    // console.log(MySection[index]);
    currentSib = Array.from(newli).slice();
    currentSib.splice(index, 1);

    for (var i = 0; i < currentSib.length; i++) {
    currentSib[i].classList.add("hide");
    currentSib[i].classList.remove("show");
    }
}

// console.log(localStorage.getItem('jwt'));

function noti() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
// for (var i = 0; i < allli.length; i++) {
//     // allli[i].addEventListener("click", function() {
//     console.log(allli[i].parentElement);
//     // });
//   }