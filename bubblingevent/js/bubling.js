/*
***1-10-2019***
*Deligation Event*
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

    /* Event Deligation */

  // Clear single li Item
  document.body.addEventListener("click",function(e){
  // console.log(e.target);
  if(e.target.parentElement.classList.contains("items")){
    e.target.parentElement.remove();
  }
  });
  let text = document.createTextNode(outputText);
  ol.appendChild(liOne);
  liOne.appendChild(text);
  liOne.appendChild(btnRem);
  myInput.value="";

  // Clear All Tasks
  document.body.addEventListener("click",function(c){
    if(c.target.id==="clear-btn"){
      console.log(c.target)
    //  console.dir( c.target.previousElementSibling.children);
    let items=document.querySelectorAll(".items");
    console.log(items)
    for(let i=0; i<items.length; i++){
    items[i].remove();
  }
  }
  });

  }else{
    alert("Input must not be empty");
  }
}
