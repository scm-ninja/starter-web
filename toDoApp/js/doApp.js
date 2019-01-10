/*
***7-01-2019***
*To Do App*
*/
let myBtn = document.getElementById("addBtn");
let myInput = document.getElementById("input");

myBtn.addEventListener('click',addListItems);

function addListItems(){
  let outputText = myInput.value;
  if(outputText !=""){
  let ol = document.getElementById("orderList");
  let liOne = document.createElement("li");
  liOne.className = ("items");
  let btnRem = document.createElement("button");
    btnRem.className = "btn btn-danger rem-btn";
    btnRem.textContent = "X";
    btnRem.style.display = "inline-flex";
    btnRem.style.justifyContent = "space-evenly";
    btnRem.style.height ="1.5rem";
    btnRem.style.width ="1.5rem";
    btnRem.style.lineHeight ="0rem";
  // Clear single li Item
  // btnRem.addEventListener("click",function(e){
  //   if(e.target.parentElement.classList.contains("items")){
  //     e.target.parentElement.remove();
  //   }
  // });
    btnRem.addEventListener('click', delet);
  function delet(){
    liOne.remove();
    }
  let text = document.createTextNode(outputText);
  ol.appendChild(liOne);
  liOne.appendChild(text);
  liOne.appendChild(btnRem);
  myInput.value="";
  // Clear All Tasks
  let remove = document.querySelector(".clear-btn");
  remove.addEventListener("click",clickRem);
  function clickRem(){
  liOne.remove();
  }
  }else{
    alert("Input must not be empty");
  }
}
