// select an HTML element from the DOM
// save it to a local variable called heading
let heading = document.querySelector("h1");
console.log(heading);

heading.style.color = "red";
heading.style.fontSize = "5em";


// Challenge: Change something else yourself
heading.style.border = "2px solid black";
heading.style.textAlign = "center";
heading.style.textDecoration = "underline wavy";

//do everything in one line
document.querySelector("p").style.color = "blue";

//there are different ways to selcect from the DOM
document.getElementById("topics");

//you can select more than one element at a time
console.log(document.querySelectorAll(".list")[0].style);

//apply a class
const cssClass = document.querySelector("#topics").classList;

cssClass.add("special");


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    heading.textContent = codeValue;
})
                

