/**********mouseout event****************/
let inp = document.querySelector("#text");
inp.addEventListener("mouseout",function(){
    console.log("mouse out");
});

/***********keypress event******************/
inp.addEventListener("keypress",function(){
  console.log("press key");
});

/*****************Scroll event************************ */
inp.addEventListener("scroll",()=>{
    console.log("Scroll event");
})

/******************load event**************/
window.addEventListener("load",()=>{
    setTimeout(()=>{
        console.log("hello")
    },2000);
  //console.log("hello load");
});

/*Qs2.Create a button on the page using JavaScript.Add an eventlistener to the button that changes the button color to green when it is clicked.*/
let add=document.createElement('button');
let p= document.querySelector('p');
add.innerText="click me";
p.insertAdjacentElement("beforeend",add);
//add.append("nikeeta kaudare ");

add.addEventListener("click",()=>
{
   add.style.backgroundColor = "red";
});
// add.onclick=mycolor();
// function mycolor(){
// add.style.backgroundColor = "red";
// }
/*******Qs3.Create an input element on the page with a placeholder” enter your name ” and H2 heading on the page inside HTML.The purpose of this inpu telement is to enter a user’s name so it should only input etters from a-z,A-Z and space*/

let input = document.querySelector("#inp");
input.addEventListener("input",function(){
let h= document.querySelector("h2");
console.log("change",this.value);
h.innerText=input.value;
});