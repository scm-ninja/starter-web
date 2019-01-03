
// By ID
let heading = document.getElementById("heading");
heading.firstElementChild.style.textAlign = "center";
heading.style.backgroundColor = "rgb(218, 214, 214)";
heading.style.width = "80%";
heading.style.margin = "0 auto";
heading.style.lineHeight = "5rem";
heading.firstElementChild.style.textTransform = "uppercase";
heading.firstElementChild.style.fontSize = "2rem";
heading.firstElementChild.style.color = "#737373";
heading.firstElementChild.style.fontFamily = "arial";
heading.style.borderRadius = "3px";
// console.log(heading);

let sectionOne = document.getElementById("sectionOne");
sectionOne.style.backgroundColor = "rgb(218, 214, 214)";
sectionOne.style.width = "80%";
sectionOne.style.fontFamily = "arial";
sectionOne.style.margin = "0 auto";
sectionOne.style.borderRadius = "3px";
// console.log(sectionOne);
sectionOne.firstElementChild.style.color = "rgb(111, 106, 106)";
sectionOne.firstElementChild.style.padding = "10px 0px 8px 10px";
sectionOne.firstElementChild.style.margin = "0px";
// console.log(sectionOne.firstElement);
sectionOne.children[1].style.color = "#737373"
sectionOne.children[1].style.fontSize = "1.1rem";
sectionOne.children[1].style.padding = "0px 10px 0px 10px";
sectionOne.children[1].style.margin = "0";
// console.log(sectionOne.children[1]);
sectionOne.children[2].style.color = "rgb(111, 106, 106)";
sectionOne.children[2].style.padding = "10px 0px 8px 10px";
sectionOne.children[2].style.margin = "0px";
// console.log(sectionOne.children[2]);
sectionOne.children[3].style.color = "#737373"
sectionOne.children[3].style.fontSize = "1.1rem";
sectionOne.children[3].style.padding = "0px 10px 10px 10px";
sectionOne.children[3].style.margin = "0";
// console.log(sectionOne.children[2]);

// By Query Selector
let gallery = document.querySelector("#gallery");
// gallery.style.display = "flex";
gallery.style.justifyContent = "space-between";
gallery.style.flexFlow = "row nowrap";

let galHead = document.querySelector(".gal-head");
galHead.style.textAlign = "center";
galHead.style.fontSize = "2rem";
galHead.style.textTransform = "uppercase";
galHead.style.fontFamily = "arial";
galHead.style.color = "#737373";
// console.log(galHead);


// By Class Name
let cards =document.getElementsByClassName("cards");
cards[0].style.fontFamily = "arial";
cards[0].style.margin = "0";
cards[0].style.display = "flex";
cards[0].style.flexWrap = "wrap";
cards[0].style.justifyContent = "space-evenly";
console.dir(cards);


let paraTwo = document.querySelector("#paraTwo");
//Card One
paraTwo.previousElementSibling.style.width = "26.3rem";
paraTwo.previousElementSibling.children[1].style.color = "rgb(115, 115, 115)";
paraTwo.previousElementSibling.children[2].style.color = "#737373";
paraTwo.previousElementSibling.children[2].style.fontSize = "1.08rem";
paraTwo.previousElementSibling.children[2].style.lineHeight = "1.5rem";
//Card Two
paraTwo.style.width = "26.3rem";
paraTwo.children[1].style.color = "rgb(115, 115, 115)";
paraTwo.children[2].style.color = "#737373";
paraTwo.children[2].style.fontSize = "1.08rem";
paraTwo.children[2].style.lineHeight = "1.5rem";

//Card Three
paraTwo.nextElementSibling.style.width = "26.3rem";
paraTwo.nextElementSibling.children[1].style.color = "rgb(115, 115, 115)";
paraTwo.nextElementSibling.children[2].style.color = "#737373";
paraTwo.nextElementSibling.children[2].style.fontSize = "1.08rem";
paraTwo.nextElementSibling.children[2].style.lineHeight = "1.5rem";
console.dir(paraTwo);

// By Name
let reg = document.getElementsByName("regHead")[0];
reg.style.textAlign = "center";
reg.style.fontSize = "2rem";
reg.style.textTransform = "uppercase";
reg.style.fontFamily = "arial";
reg.style.color = "#737373";
console.log(reg);

let forms = document.getElementById("form");
forms.style.display = "flex";
forms.style.flexWrap = "wrap";
forms.style.justifyContent = "space-evenly";
forms.style.margin = "0 10rem";
forms.style.color = "#737373";
forms.style.fontFamily = "arial";
// forms.style.alignItems = "center";
// By Tag
let hThree = document.getElementsByTagName("h3");
// let hThree = document.querySelectorAll('#form h3');
console.dir(hThree);
// hThree[0].style.margin = "0";
// hThree[1].style.margin = "0";
// hThree[2].style.margin = "0";
// hThree[3].style.margin = "0";
// hThree[4].style.margin = "0";
// hThree[5].style.margin = "0";
// hThree[6].style.margin = "0";

let inputs = document.getElementsByTagName("input");
console.dir(inputs);
// inputs[0].style.margin = "1.1rem .5rem 1.1rem 1rem";
inputs[0].style.height = "1.5rem";
inputs[0].style.width = "20rem";
// inputs[1].style.margin = "1.1rem .5rem 1.1rem 1rem";
inputs[1].style.height = "1.5rem";
inputs[1].style.width = "20rem";
// inputs[2].style.margin = "1.1rem .5rem 1.1rem 1rem";
inputs[2].style.height = "1.5rem";
inputs[2].style.width = "20rem";
// inputs[3].style.margin = "1.1rem .5rem 1.1rem 1rem";
inputs[3].style.height = "1.5rem";
inputs[3].style.width = "20rem";
// inputs[4].style.margin = "1.1rem .5rem 1.1rem 1rem";
inputs[4].style.height = "1.5rem";
inputs[4].style.width = "20rem";
// inputs[5].style.margin = "1.1rem .5rem 1.1rem 1rem";
inputs[5].style.height = "1.5rem";
inputs[5].style.width = "20rem";
// inputs[6].style.margin = "1rem";
// inputs[7].style.margin = "1.1rem";
// inputs[8].style.margin = "1.1rem";