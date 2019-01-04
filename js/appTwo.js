
// NodeName and TagName
// for comment
console.log( document.body.firstChild.tagName ); // undefined (no element)
console.log( document.body.firstChild.nodeName ); // #comment

// for document
console.log( document.tagName ); // undefined (not element)
console.log( document.nodeName ); // #document

//Outer HTML
console.log(elem.outerHTML);

//Text
console.log(news.textContent);

//Task On Attributes
let attOne = document.querySelector("#myAnchor");
    anchor = myAnchor.getAttribute("target");
    anchor = myAnchor.hasAttribute("target");
    anchor = myAnchor.setAttribute("style","color:blue");
    anchor = myAnchor.removeAttribute("name");
console.log(attOne);

let attTwo = document.getElementsByTagName("button")[0];
    btn = button.getAttribute("type");
    btn = button.hasAttribute("id");
    btn = button.setAttribute("style", "background-color: green");
    console.log(btn);
    btn = button.removeAttribute("type");
    console.log(attTwo);

let attThree = document.getElementById("myInput");
    input = myInput.getAttribute("id");
    input = myInput.hasAttribute("placeholder");
    input = myInput.setAttribute("type","text");
    input = myInput.removeAttribute("class");
    console.log(input);

    // User Info
let attUser = {
  name: "waqar",
  age: "24",
  address: "Defense Colony Gilgit"
};
for(let div of document.querySelectorAll("[show-info]")) {
     bioData = div.getAttribute("show-info");
     bioData = div.hasAttribute("class");
     bioData = div.setAttribute("style","color: grey");
     bioData = div.removeAttribute("style");
     console.log(bioData)
}

    // Traffic Lights
let attFour = document.querySelector(".myOrder");
    console.log(myOrder.setAttribute("style","border: 1px solid black"));