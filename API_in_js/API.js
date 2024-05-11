/****************** fetch() method ******************/
let url = "https://catfact.ninja/facts";
fetch(url)
.then((response)=>{
    console.log("response",response);
     return response.json();
})
.then((data)=>{
    console.log(data);
    return fetch(url);
})
.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("error",error);
});
/*************** fetch() method with async and await ************/
let url23 = "https://catfact.ninja/facts";
async function getfact(){
    try{
        let res = await fetch(url23);
        let data = await res.json();
        console.log(data);

        let res1 = await fetch(url23);
        let data1 = await res1.json();
        console.log(data1);   
    }catch(e){
        console.log(e);
    }
}
getfact();
/****************** Axios library **********************/
let button =document.querySelector("button");
button.addEventListener("click",async ()=>{
   console.log("button");
   let fact = await getfact1();
   console.log(fact);
   let p = document.querySelector("#output");
   p.innerHTML = fact;
});

let url1 = "https://catfact.ninja/facts";
async function getfact1(){
    try{
        let res = await axios.get(url1);
        return  res.data.fact; 
    }catch(e){
        console.log("error",e);
        return "no fact found";
    }
}
/***************** disply img using axios************ */
let url2 = "https://dog.ceo/api/breeds/image/random";
let button2 =document.querySelector("button");
button2.addEventListener("click",async ()=>{
  let link = await getimg();
  //console.log(link);
  let img = document.querySelector("#img");
 img.setAttribute("src",link);
});

async function getimg(){
    try{
        let res = await axios.get(url2);
        //console.log(res);
        return  res.data.message; 
    }catch(e){
        console.log("error",e);
        return "no fact found";
    }
}

/****************** sending header using axios ********************/
let urll = "https://icanhazdadjoke.com/";
async function getJokes(){
    try{
        const config = {headers:{ Accept: "application/json"}};
        let res = await axios.get(urll,config);
        console.log(res.data);
    }catch(e){
    console.log(e);
    }
}