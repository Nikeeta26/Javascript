let u = "http://universities.hipolabs.com/search?name=";
let Button = document.querySelector("#nik");

Button.addEventListener("click",async ()=>{
    let country = document.querySelector("input").value;
   console.log(country);

    let colArr = await getcollage(country);

    function show(colArr){
        let list = document.querySelector("#list");
       list.innerText = "";
        for(let col of colArr){
             console.log(col.name);
             let li = document.createElement("li");
             li.innerText = col.name;
             list.appendChild(li);
        }
    }
   show(colArr);
   
});

async function getcollage(country){
    try{
        let res = await axios.get(u+country);
        console.log(res);
       return res.data;
    }
    catch(e){
           console.log("error",e);
           return [];
    }
    
}

