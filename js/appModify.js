/*
***7-01-2019***
**Modifying DOM**
* Creating Element
* Insertion Methods
* Cloning Nodes
* Remove Method
*/


// Creating Element

let h1 = document.createElement('h1'); // Creating Tag
console.log(h1);
let textNode = document.createTextNode('This is text Node'); //creating text Node
console.log(textNode);

let section = document.createElement("section"); //create section tag
section.className = "box"
section.id = "box"
let div =  document.createElement("div");  //created div tag
div.className = "box-wrapper"
div.innerHTML = "<h2>Modifying :: Document</h2>"
// document.body.appendChild(div);
section.appendChild(div);
console.log(section);

// Insertion methods

// inserting as Last Child
let ol = document.createElement("ol");
ol.className = "list";
ol.id = "list";
ol.innerHTML = "<h3>List Of Fruits:</h3>";
let liOne = document.createElement("li");
liOne.innerHTML = "<p>Orange</p>";
let liTwo = document.createElement("li");
liTwo.innerHTML = "<p>Orange</p>";
let liThree = document.createElement("li");
liThree.innerHTML = "<p>Mango</p>";
let liFour = document.createElement("li");
liFour.innerHTML = "<p>Banana</p>";
// document.body.appendChild(li);
ol.appendChild(liOne);
ol.appendChild(liTwo);
orderList.appendChild(liTwo);
ol.appendChild(liThree);
ol.appendChild(liFour);
section.appendChild(ol);

// inserting as First Child
let liFive = document.createElement("li");
liFive.innerHTML = "<p>Grapes</p>";
ol.insertBefore(liFive, ol.children[1]);
let liFifth = document.createElement("li");
liFifth.innerHTML = "<p>Grapes</p>";
orderList.insertBefore(liFifth, orderList.children[0]);

// Replacing With another child
let liSix = document.createElement("li");
liSix.innerHTML = "<p>Cherry</p>";
orderList.replaceChild(liSix, liTwo);
ol.replaceChild(liSix, liThree);

// More Easy Ways of insertions

// Before
ol.before("Start of list of Fruits");
orderList.before("Start of list of Fruits");

// After
ol.after("List of fruits end here");
orderList.after("List of fruits end here");

// Prepend
let liSeven = document.createElement("li");
liSeven.innerHTML = "Wallnut";
ol.prepend(liSeven);
let liEight = document.createElement("li");
liEight.innerHTML = "Wallnut";
orderList.prepend(liEight);

// Append
let liNine = document.createElement("li");
liNine.innerHTML = "Kernel";
ol.append(liNine);
let liTen = document.createElement("li");
liTen.innerHTML = "Kernel";
orderList.append(liTen);

//ReplaceWith
let liEleven = document.createElement("li");
liEleven.innerHTML = "Dry Fruits Only";
// ol.replaceWith(liEleven,liSeven,liNine);
// orderList.replaceWith(liEleven,liEight,liTen);

// Inserting Multiple Lists of Nodes
heading.before("Modifying Document with :: DOM",document.createElement("hr"));

// Inserting with insertAdjacentHTML
ol.insertAdjacentHTML('beforebegin', '<h3>Start of Orderd List</h3>');
ol.insertAdjacentHTML('afterend', '<h3>End of Orderd List</h3>');
ol.insertAdjacentHTML('afterbegin', '<h4>Start of List Items</h4>');
ol.insertAdjacentHTML('beforeend', '<h4>End of List Items</h4>');
orderList.insertAdjacentHTML('beforebegin', '<h3>Start of Orderd List</h3>');
orderList.insertAdjacentHTML('afterend', '<h3>End of Orderd List</h3>');
orderList.insertAdjacentHTML('afterbegin', '<h4>Start of List Items</h4>');
orderList.insertAdjacentHTML('beforeend', '<h4>End of List Items</h4>');
// orderList.insertAdjacentText('beforebegin', 'Start of Orderd Fruits');
// orderList.insertAdjacentText('afterend', 'End of Orderd Fruits</h3>');
// orderList.insertAdjacentText('afterbegin', 'Start of List Fruits');
// orderList.insertAdjacentText('beforeend', 'End of List Fruits');

document.body.insertAdjacentHTML("afterbegin", `<div class="divOne">
  Modifying the <strong>DOM</strong></div>`);

  
  
  // Button Click function
  let lists = document.querySelector(".orderList");
  let add = document.querySelector(".add-btn");
  add.addEventListener("click",clickAdd);
  function clickAdd(){
    let liTwelve = document.createElement("li");
    liTwelve.innerHTML = "<p>burberry</p>";
    lists.appendChild(liTwelve);
  }
  let remove = document.querySelector(".rem-btn");
  remove.addEventListener("click",clickRem);
  function clickRem(){
    orderList.lastChild.remove();
  }
  
  
  // Cloning Node
  let divOne = div.cloneNode(true);
    // divOne.querySelector('strong').innerHTML = 'You have made changes!';
    // div.before(divOne);
  
  // Remove Method
  second.after(first);
  // let ol2 = orderList.cloneNode(true);
  // ol2.querySelector('last-li').innerHTML='wellcome-to-pakistan';
  // orderList.after(ol2);