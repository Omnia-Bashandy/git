var id = 0;
var Aname = document.getElementById("animalname");
var id = document.getElementById("animalid");
var cat_id = document.getElementById("cat_id");
// var att2 = document.getElementById("att2");
// var att3 = document.getElementById("att3");
var table = document.getElementById("table");
var tbody = document.getElementById("tb");
var tableRow = document.getElementsByTagName("tr");
var auth = localStorage.getItem('jwt')

   // console.log(Aname);
   // console.log(id);
   // console.log(att1);
   // console.log(att2);
   // console.log(att3);
   // console.log(tbody);
   // console.log(table);
var addButton =  document.getElementById("addanimal");
var editButton =  document.getElementById("ed");
var delButton = document.getElementById("del");

function Add(){
   tbody.innerHTML += 
   `
 <tr index ="">
  <td> ${id.value}</td>
  <td> ${Aname.value}</td>
  <td> ${cat_id.value}</td>
  <td> <button  id="ed" onclick="Edit(this)" class="botn"><i class="fas fa-edit"></i></button>
    <button id="del" onclick="removeRow(this)" class="botn"> <i class="far fa-trash-alt"></i> </button>
  </td>
</tr> `

   } 

function clear(){
   Aname.value="";
   id.value="";
   cat_id.value="";
   // att2.value="";
   // att3.value="";
}


function removeRow(currentRow) {
    currentRow.parentElement.parentElement.remove();
    var AllRthg =  document.querySelectorAll("tr");
     // console.log(typeof(AllRthg));
var array = Object.keys(AllRthg);
var isArr = array instanceof Array;

//  var d = array.isArray(AllRthg);
console.log(isArr);

}
;
function Edit(currentCell){

    var x = currentCell.parentElement.parentElement;
    x.children[2].innerHTML=Uname.value;
    x.children[3].innerHTML = age.value;
    x.children[4].innerHTML = study.value ;

}

addButton.addEventListener("click",function(){

var data = JSON.stringify({
  "id": id.value,
  "cat_id": cat_id.value
});

var config = {
  method: 'post',
  url: 'http://localhost:8080/addNewAnimalIfon',
  headers: { 
    'Authorization': auth,
      'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


 clear();


});
//*Back End (get animal)*

var config = {
   method: 'get',
   url: 'http://localhost:8080/getAllAnimalInfo',
   headers: { 
     'Authorization': auth  }
 };
 
 axios(config)
 .then(function (response) {
    var data = response.data.data.data
   // console.log(data);
   for (let i = 0; i < data.length; i++) {
      // console.log(data[i]);
      tbody.innerHTML += 
      `
    <tr index ="">
     <td> ${data[i].id}</td>
     <td> ${Aname.value}</td>
     <td> ${data[i].cat_id}</td>
     <td> <button  id="ed" onclick="Edit(this)" class="botn"><i class="fas fa-edit"></i></button>
       <button id="del" onclick="removeRow(this)" class="botn"> <i class="far fa-trash-alt"></i> </button>
     </td>
   </tr> `
   }
 })
 .catch(function (error) {
   console.log(error);
 });
