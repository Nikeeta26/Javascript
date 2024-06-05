

let btn = document.getElementById("myBtn");

btn.addEventListener("click", () => {

  document.getElementById("test").innerHTML=Date();
});


let s = " nin";
console.log(s.trim());
 console.log(s.toUpperCase());

const { json } = require("express");

 console.log(s.indexOf("n"));

 console.log(s.charAt(2));

 console.log(s.slice(1,3));

 console.log(s.replace("i","p"));

 console.log(s.trim().repeat(3));
 
 console.log(s.includes("y"));

 console.log(s.concat(" kauadare"));

 const r =  s.split('').reverse().join('');
 
 let Arr = [3,4,5,6,7,8,"nik","mik"];
  Arr.push(7);
  console.log(Arr);
 
 Arr.pop();
 console.log(Arr);

 let S =Arr.slice(2,5);
 console.log(S);

let c = Arr.indexOf("nik");
console.log(c);
let k = Arr.splice(2,1,80);
 console.log(k);
 console.log(Arr);

 let day = 5;
 switch(day)
{
    case 1:
    console.log("mon");
    break;
    case 2:
    console.log("tues");
    break;
    case 3:
    console.log("wed");
    break;
    case 4:
    console.log("thur");
    break;
    case 5:
    console.log("fri");
    break;
    case 6:
    console.log("sat");
    break;
    default:
    console.log("wrong choise");

}
let s ="dfgSDFGghj";
let c = 0;
let v = 0;
for(let i=0;i<s.length;i++)
    {
if(s[i] == s[i].toLowerCase() ){
    console.log("lower",s[i]);
    c++;
  
}
else{
    console.log("upper ",s[i]);
    v++;
   
}

    }
    console.log("lower:",c);
console.log("upper:",v);



let p =prompt("enter the no");
let f = 1;
if(p == 1){
    console.log("1 is prime or not");
}
else if(p>1)
    {
        for(let i=2;i<p;i++)
            {
                if(p/i==0)
                    {
                        console.log("not prime");
                        f = 0;
                        break;
                    }
             } 
        if(f == 1){
        
            console.log("prime");
    
        }
        else{
            console.log("not prime");
        }
            
    }
    else {
            console.log("The number is not a prime number.");
         }

    


    // program to check if a number is prime or not

// take input from the user
 const number = 60//parseInt(prompt("Enter a positive number: "));

let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}


let p = 90;
let f = true;
if(p === 1){
    console.log("1 no is not prime of not");
}
else if(p>1)
    {
        for(let i=2;i<p;i++)
            {
                if(p%i == 0)
                    {
                        console.log("no not prime");
                        f = false;
                        break;
                    }
            }
        if(f){
            console.log("prime");
        }
        else{
            console.log("not prime");
        }
    }
else{
    console.log("not prime no");
}

let n = 1;
let flage = true;

for(let i=2;i<n;i++)
    {
      if(n % i == 0)
        {
            console.log("not a prime");
            flage = false;
            break;
        }


    }

 if(flage == true){
    console.log("prime");
    flage = true;
}


let a = "cfghjk";
for(let i in a)
    {
        console.log(i);
    }

    let obj = {
        name:"nik",
        age:67,
        email:"dfghj"
    };
    for(let i in obj)
        {
            console.log(i,":",obj[i]);
        }


        
 let i = 0;
while (i <= 10) {
    if (i == 4) {
       
       break // Skip printing 4
    }
    console.log(i);
    i++;
}

let arr = [5,6,7,8,9];
let arr1 = [6,7,7,8,8];

console.log(...arr,...arr1);

let OBJ=
{
   sum:function ab(a,b){
    console.log(a+b);
   },
   div(a,b){
    console.log(a%b);
   },
   function(a,b){
    console.log(a*b);
    console.log(this);
   },
   nik:function(){
    setTimeout(()=>{
        console.log("hello");
        console.log(this);
    },2000);
        console.log(this);
   }
   
}
OBJ.sum(7,8)
OBJ.div(8,8);
OBJ.function(4,6);
OBJ.nik();

let a = [8,9,6,6];
let count=0;
a.find((el)=>{
   if(el==6)
    {
   count++;
   
    }
    console.log(count);
});

const x = [1, 2, 90, 4, 4];

const y = x.reduce((pre,cuss) => {
     if(pre>cuss)
        {
          return pre;
        }
        else{
           return cuss;
        }
}
);

console.log("y is: ", y); // y is: 1

let g="green";
function change()
{
    let g="niik";
    console.log(g);
    function inner()
    {
       console.log(g);
    }
    inner();
}
console.log(g);
change();


let d=function(fun,b)
{
    
fun();
    return b;
   
}

function ADD(){
 console.log("hello word");
}

console.log(d(ADD,45));

const calculater={
    num:78,
    sum:function(a,b)
    {
        console.log(this);
        return a+b;

    },
    div(a,b)
    {
        return a/b;
    },
    sub:function(a,b)
    {
        return a-b;
    },
    mul:function(a,b)
    {
        return a*b;
    }
}
console.log(calculater.div(2,5));

let Para = function(a=40,b)
{
    console.log(a,b);
}
Para(4);

let pqr = [5,6,7,8,9,6,5];
let abc = {...pqr};
console.log(abc);



let object = {
    name : "nik",
    email : "dfghj",
    roll : 56
};
let datatype ;
console.log( {...object,name:"nik",id:78});

function pr(object){
    console.log(object);
}
pr(object);

function rest(r1,...r)
{
    console.log(r1,r);
}
rest("nik",5,5,5,6,6,0,3,2,8,3,9888,45,);


// let v="aaaaapppiiiii";
let c=0;
 let w=0;
let vowel=function(v)
 {
     for(let i=0;i<v.length;i++)
     {
      if(v[i]=='a' || v[i]=='e' || v[i]=='i' || v[i]=='o' || v[i]=='u')
          {
             c++;
           //console.log(v[i])
          
          }
         else {
            w++;
          }
         
    }
     console.log(c);
     console.log(w);
}
vowel("nikeeta");



let s="aabbccdefg";
let e="";
let n="";
function dub(s)
{
    for(let i=0;i<s.length;i++)
    {
        s[i];
        if( e.indexOf(s[i])==-1)
        {
            e=e+s[i];

        }
        else if( s.includes(s[i])){
           n=n+s[i];
        }
       
    }
console.log(n);
    return e;
}
console.log(dub(s));


const objec={
    message:'hello,wolrd',
    logmessage()
{
  console.log(this);
  console.log(this.message);
}
};
//console.log(object.message);
 setTimeout(objec.logmessage,1000);//pareanthesis not write here


 let length=4;
function callback()
{
    console.log(this.length);

 }
const object=
{
    length:5,
    method(callback)
    {
        callback();
    },
};

object.method(callback,1,2);


function diplay(color,delay,nextColor){
setTimeout(()=>{
    console.log(`color is ${color}`);
},delay);
}
diplay("red",1000,setTimeout(()=>{
    diplay("blue",1000,setTimeout(()=>{
   console.log("hello");
   diplay("pink",1000,setTimeout(()=>{
     console.log("word");
   },1000));
    },1000));
},1000))


function savetoDb(data,success,failure){
    let internSpeed = Math.floor(Math.random()*10)+1;
    if(internSpeed > 4)
    {
       success();
    }
    else{
        failure();
    }
}

savetoDb("nikeea",()=>{
    console.log("save data 1");
    savetoDb("kaudare",()=>{
        console.log("Dnyaneshwar");
        savetoDb("hello nik mik sik kauu",()=>{
            console.log("save data ");
        },()=>{
            console.log.og("not save");
        });
    },()=>{
        console.log("fail connection");
    });
},
()=>{
    console.log("failure:weak connection data not  saved");
}
)



 const a1=[4,6,7,8,0,-1,9,-9];
a1.push(-11);
a1.unshift(-78);
a1.splice(4,0,88);
console.log(Math.min(...a1));



function savetoDb(data,success,failure){
    let internSpeed = Math.floor(Math.random()*10)+1;
    if(internSpeed > 4)
    {
       success();
    }
    else{
        failure();
    }
  
}
savetoDb(
    "nikeea",()=>{console.log("success:your data1 saved");
          savetoDb("hello",()=>{
            console.log("succss2222 : your data2 save");
            savetoDb("hello",()=>{
                console.log("succss2222 : your data2 save");
            },
                ()=>{
                    console.log("failure2 :weak connection data not  saved");
                  
              });
          },()=>{
            console.log("failure2 :weak connection data not  saved");
          }
          );
    
},
()=>{
    console.log("failure:weak connection data not  saved");
}
);

let demo = async()=>{
    return 5;
}
console.log(demo());


console.log(demo(8));
function getNum(){
          return new Promise((resolve,reject)=>{
            setTimeout(()=>{
               let n = Math.floor(Math.random()*10)+1;
               //console.log(n);
               if(n>4)
                {
                    resolve("hello");
                    console.log("niiiiiiiiiiiiiiiiii");
                }
              else{
                reject("no");
                console.log("not");
              }

            },0);
          }) ;
}

 console.log(getNum());

async function demo(){
    await getNum();
   await getNum();
    await getNum();
    await getNum();
}
demo();

function pro(){
    return new Promise((resolve,reject)=>{
    console.log("hi i am nik");
    });
}
pro()
.then((result)=>{
    result;
    console.log("resolve");
})
.catch((error)=>{
    error;
    console.log("reject");
});


var randomNo1;
var randomNo2;
var time;

do {
  randomNo1 = Math.floor(Math.random() * 9)+1;
  //randomNo1 = Math.round(randomNo1);
  randomNo2 = Math.floor(Math.random() * 9)+1;
  //randomNo2 = Math.round(randomNo2);
  prompt("What is " + randomNo1 + " + " + randomNo2 + "?")
  console.log( randomNo1 +  randomNo2 );
} while (time == 0);

const array = [10, 20, 30, 40];
const result = array.map((num) => num / 2).filter((num) => num >= 15);
console.log(result);


let counter = 0;
for (var i = 1; i <= 10; i++) {
  counter+= i;
}
console.log(counter);
console.log(i);

const object1 = {
  a: 10,
  b: 20,
  c: function add()  {
	console.log(this.a + this.b);
  },
};
console.log(object1.c());
 const func = object1.c();
 console.log(func);


 function fetchData(callback) {
  fetch('https://api.example.com/data')
	.then(response => response.json())
	.then(data => callback(null, data))
	.catch(error => callback(error));
}
 fetchData(function (error, data) {
  if (error) {
	console.log('Error:', error);
  } else {
	console.log('Data:', data);
  }
});

let url = 'https://api.example.com/data';
fetch(url)
.then(function(){
  console.log("successes");
})
.catch(function(){
  console.log("not success");
})

setTimeout(function () {
  console.log("This will be executed after 3 seconds");
}, 3000);
clearTimeout();

const testArray = [1, 2, 3];
testArray = [4, 5, 6];
console.log(testArray);


const fetchData = async () => {
  const response = await fetch("https://api.samplewebsite.com/data");
  const data = await response.json();
  console.log(data);
};
fetchData();


 const obj = {
  name: "Conner",
  age: 27,
  greet: () => {
    console.log(this);
	console.log("Hey, my name is",  this.name);
  //return this.name;
  },
};
console.log(obj.greet());


const obj = {
  name: "Conner",
  age: 27,
  greet: function add(){

	console.log("Hey, my name is",  this.name);
  return this.name;
  },
};
obj.greet();
console.log(obj.greet());




const object1 = {
  prop1: "value1",
  prop2: {
	prop3: "value3",
  },
};
 const newObj = { ...object1 };
newObj.prop2.prop3 = "newValue3";
console.log(object1.prop2.prop3);


const promise1 = Promise.resolve("One");
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Two"), 1000));
const promise3 = Promise.reject("Three");
 Promise.allSettled([promise1, promise2, promise3]).then((results) => console.log(results));


 
//  class Bird {
//   constructor(name) {
// 	this.name = name;
//   }
//   speak() {
// 	console.log(`${this.name} makes a noise.`);
//   }
// }
//  class Crow extends Bird{
  
//   speak() {
// 	super.speak();
// 	console.log(`${this.name} sings.`);
//   }
// }
//  const crow = new Crow("Tim");
// crow.speak();


// const arr = [1, 2, 3, 4, 5];
// const sum = arr.reduce((total, num) => total + num);
// console.log(sum / arr.length);

// function counter() {
//   let count = 0;
//   return function(){
//     count++;
//     console.log(count);
    
//   }
	
// }
// const increment = counter();
// increment(); // 1
// increment(); // 2
// increment(); // 3

// const promise11 = Promise.resolve("One");
// const promise22 = Promise.resolve("Two");
//Promise.all([promise11, promise22]).then((result) => console.log(result));
// Promise.all([promise11, promise22]).then(([result,result1]) => console.log(result,result1));

// fetch('https://catfact.ninja/facts')
//   .then(data => console.log(data)
//   )
//   .catch(error => console.log(error));



 fetch('https://api.example.com/data')
  .then(response => {
	if (!response.ok) {
  	throw new Error('Network response was not ok');
	}
	return response.json();
  })
  .then(response => console.log(response))
  .catch(error => console.log(error));

  const arr = [1, 2, 3];
  const arr1 = [1, 2, 3];
const object3 = { x: 1, y: 2, z: 3 };
console.log(...arr,...arr1);
console.log( {... object3});


const arr4 = [];
for (let i = 0; i < 10; i++) {
  arr4.push(Math.floor(Math.random() * 1000));
}
console.log(arr4);



function User(name, age) {
 
  this.name = name;
  this.age = age;

  this.getProfile = function() {
      // Outer function context
      console.log(this.constructor.name); // User
      return () => {
          // Inner function context
          console.log(this.constructor.name); // User(Get it from the outer context)
          console.log("I'm " + this.name + ", " + this.age + " yrs old");
      };
  }
}

let user = new User('John', 25);
let profile = user.getProfile();
profile(); //I'm John, 25 yrs old

function foo() {
  let x = y = 0;
  x++;
  y++;
  return x;
}

console.log(foo());
console.log(typeof x, typeof y);

console.log(0.1 + 0.2 === 0.3);

let Y = 1;
if (function f(){}) {
    Y += typeof f;
     Y= 9;
    console.log(Y);
}
console.log(Y);


var car = new Vehicle("Honda", "white", "2010", "UK");
//car.GET();
console.log(car);
console.log(car.get());
console.log(car.pp());

function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
    this.get=()=>{
      return "hello wolrd";
      // console.log("hello world");
    },
    this.pp = function(){
     return "welcome";
    }

}

var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);
console.log(car.get());

function Vehicle(model, color, year, country) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.country = country;
}

var car = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);

function foo() {
  return
  {  message: "Hello World";
}
}
console.log(foo()); //Undefined

function foo() {
  return
  {
      message: "Hello World"
  };
}
console.log(foo()); //Undefined


for(let i=0; i<10; i++)
  {
    axios.get("https://catfact.ninja/facts")
    .then((response)=>{
      console.log(response.data);

    })
    .catch((error)=>{
      console.log(error);
    });
console.log("sent request");
//   }


  axios.all([
    axios.get("https://api.github.com/users/MaksymRudnyi"),
    axios.get("https://catfact.ninja/facts"),
    axios.get("https://catfact.ninja/facts")
  ])
.then(axios.spread((res1, res2,res3)=>{
console.log(res1.data,res2.data,res3.data);
}))
.catch(()=>{
  console.log("error");
})

axios.all([
  axios.get("https://api.github.com/users/MaksymRudnyi"),
  axios.get("https://catfact.ninja/facts"),
  axios.get("https://catfact.ninja/facts")
])
.then((res1, res2,res3)=>{
console.log(res1,res2,res3);
})
.catch(()=>{
console.log("error");
})


const pro1 = Promise.resolve("one");
const pro2 = Promise.resolve("two");
const pro3 = Promise.resolve("three");
Promise.allSettled([pro1,pro2,pro3]).then(([resolve1,resolve2,resolve3])=>{
console.log(resolve1,resolve2,resolve3);
});

axios.get('https://catfact.ninja/facts')
  .catch(function (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  });

  // axios.get('https://catfact.ninja/f')
  // .then((response)=>{
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(JSON.stringify(error))
  // });

  
  axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  });



let url = "https://catfact.ninja/facts";
async function show(){
  try{
    let res = await axios.get(url);
    return res;
  }
  catch(e){
  console.log("error");
  }
}

async function display(){
  let fact = await show();
  return fact;
  //console.log(fact);
}
display()
.then((response)=>{
  console.log(response);
 
})
.then((response)=>{
  display();
  console.log(response);
})
.catch((error)=>{
  console.log(error);
})
let url = "https://dog.ceo/api/breeds/image/random";
async function getfact1(){
    try{
        let res = await axios.get(url);
        return  res.data.message; 
    }catch(e){
        console.log("error",e);
        return "no fact found";
    }
}


for( var i = 0;  i < 10;  i++ )
  {
      axios.get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
          // Takes 4 seconds, 4 more seconds, 4 more seconds, etc
          // Ideally: Takes 4 seconds, returns in the same ~4 seconds, returns in the same ~4 seconds, etc
          console.log(response);
          console.log( 'Succeeded!' );
      })
      .catch((error) => {
          console.log( error );
      });
  
      // Takes < 1 second, < 1 more second, < 1 more second, etc
      console.log( 'Request sent!' );
  }



axios.all([
  axios.get('https://api.github.com/users/MaksymRudnyi'), 
  axios.get('https://api.github.com/users/taylorotwell')
])
.then(axios.spread((obj1, obj2) => {
  // Both requests are now complete
  console.log(obj1.data.login + ' has ' + obj1.data.public_repos + ' public repos on GitHub');
  console.log(obj2.data.login + ' has ' + obj2.data.public_repos + ' public repos on GitHub');
}));

axios.all([
  axios.get('https://api.github.com/users/MaksymRudnyi'), 
  axios.get('https://api.github.com/users/taylorotwell'),
  axios.get('https://api.github.com/users/taylorotwell')
])
.then(axios.spread((obj1,obj2,obj3)=>{
  // Both requests are now complete
  console.log(obj1.data.login + ' has ' + obj1.data.public_repos + ' public repos on GitHub');
  console.log(obj2.data.login + ' has ' + obj2.data.public_repos + ' public repos on GitHub');
  console.log(obj3.data.login + ' has ' + obj3.data.public_repos + ' public repos on GitHub');
}));

let myPromise = new Promise(function(myResolve, myReject) {
  // "Producing Code" (May take some time)
  
    myResolve("one"); // when successful
    myReject("hello");  // when error
  });
  myPromise.then(
    function(value) { /* code if successful */
      console.log(value);
      console.log("not dcfgvbhn");
     }
  ).catch(function(error) { /* code if some error */
  console.log(error);
  console.log("no");
 });


const pro1 = Promise.resolve("one");
const pro2 = Promise.resolve("two");
const pro3 = Promise.resolve("three");
Promise.allSettled([pro1,pro2,pro3]).then(([resolve1,resolve2,resolve3])=>{
console.log(resolve1,resolve2,resolve3);
});

// let data = {
//   name:"nik",
//   roll:40
// };
//  axios.get('https://api.github.com/users/MaksymRudnyi',data,{headers:{ "content type":"hello" }
// })
// .then((response)=>{
//   console.log(response);
// })

// // import qs from 'qs';
// const data = { 'bar': 123 };
// const options = {
//   method: 'POST',
//   headers: { 'content-type': 'application/x-www-form-urlencoded' },
//   data: qs.stringify(data),
//   url,
// };
// axios(options);

const data = {
  x: 1,
  arr: [1, 2, 3],
  arr2: [1, [2], 3],
  users: [{name: 'Peter', surname: 'Griffin'}, {name: 'Thomas', surname: 'Anderson'}],
};

 axios.get('https://api.github.com/users/MaksymRudnyi', data,
  {headers: {'content-type': 'application/x-www-form-urlencoded'}}
)
.then((response)=>{
  console.log(response);
})


// const data = {
//   x: 1,
//   arr: [1, 2, 3],
//   arr2: [1, [2], 3],
//   users: [{name: 'Peter', surname: 'Griffin'}, {name: 'Thomas', surname: 'Anderson'}],
// };

// axios.postForm('https://postman-echo.com/post', data,
//   {headers: {'content-type': 'application/x-www-form-urlencoded'}}
// );


class Mamal{//paraent class
  constructor(name)
  {
      this.name = name;
      this.type = "warm-blooded";
  }
  eat(){
      console.log("I am eating");
  }
}
class Dog extends Mamal{ //child class
  constructor(name)
  {
     super(name);
  }
  bark(){
    super.eat();
      console.log("woof...");
  }
  eat(){
      console.log("I am dog");
  }
}

class Cat extends Dog{ //child class 
  constructor(name){
      super(name);

  }
  meow(){
    super.bark();
    super.eat();
      console.log("meow");
  }
}

let dog = new Dog("kauu");
let cat = new Cat("chiu");
cat.meow();

let nik = 12;
function dis(){
   nik = 56;
  console.log(nik);
}
dis();

let a= [6,7,8,9,9,76,0];
let b = [456789];
let p = [...a,...b];
console.log(p);
console.log(Math.max(...p));



let arr1 = [4, 5, 6];  
    
let arr2 = [1, 2, 3, ...arr1, 7, 8, 9, 10];  
    
console.log(arr2);

function display(...args) {  
  let ans = 1;  
  for (let i of args) {  
      ans *= i;  
  }  
  console.log("Product = "+ans);  
}  
  
display(4, 2, 3); 

const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
};
// let dis = new Rectangle(4,5);
// console.log(dis.area());
console.log(new Rectangle(5, 8).area());
// Expected output: 40

let print = (function greate(a,b){
  let sum = a+b;
  console.log(sum);
var r=0;
let p={
  aa:"hello",
  ab:"hello word",
  ac:"hello"
}
function add(a,b){
return r=a+b;
}
function sub(a,b){
  return r=a-b;
  }
return{
  ADD:add,
  SUB:sub,
  great:function(){
    return p.ab;
  }

}
})(3,90);

console.log(print.ADD(3,5));
console.log(print.SUB(3,5));
console.log(print.great());

let rec = (function countDown(n){
  if(n>0)
    {
      console.log("ok");
      countDown(n-1);
    }
})(5);

let result = (function(){
  let a =8;
  let b=7;
  return a+ b;

})();
console.log(result);

let count = (function(){
  let c =10;
  return {
    increment:function(){
      return c++;
    },
    decrement:function(){
      return c=c-1;
    },
    greate:function(){
      return c;
    }

  }
})();
// count.increment();
// count.increment();
// count.increment();
console.log(count.increment());
console.log(count.increment());
console.log(count.increment());
//console.log(count.decrement());
console.log(count.greate());
console.log(count.decrement());

 let m = "nikeeta";
 (function(){
var m = "kaudare";
return m ;
})();
console.log(m);

var names = ["alpha", "beta", "gamma", "delta"]; 
var [firstName, secondName] = names; 
    
console.log(firstName);//"alpha" 
console.log(secondName);//"beta" 

//Both of the procedure are same 
var [firstName, secondName,c,d,nik] = ["alpha", "beta", "gamma", "delta"]; 
        
console.log(firstName);//"alpha" 
console.log(secondName);//"beta 
console.log(c);//"beta 
console.log(d);
console.log(nik);


let A = "nikeeta";
console.log(A.split('').reverse('').join(''));


let ARR = [5,7,8,96,"k"];
console.log(Array.isArray( ARR ));

function mul(o){
  return function(p){
    return function(q){
      return p + o + q;
    }
         
  } 
}
// var addSix = createArray(7);
// console.log(addSix(6));

console.log(mul(6)(6)(8));

let p1 = [];
let p2 = [];
function dis(item){
  return p1.push(item);
}
console.log(dis(9),p1);

function mul(x){
  return function(y)
  {
    return function(z){
         return z*x+y;
    };
  };
}
console.log(mul (4) (5) (6));
// console.log(mul ((3) (6) (7));

// for(let i  = 0; i<= 100; i++)
//   {
//     let f = i % 3 == 0,
//         p = i % 5 == 0;
//     //console.log(f ? (p?"fuzz":"buzz"):p? "buzz": i);
//     console.log(f?(p?"nik":"mik"):p?"nik":1);
//   }


  let str1 = "Mary";
  let str2 = "Army";
  let A1 = str1.toLocaleUpperCase();
  let A2 = str2.toLocaleLowerCase();
  A1 = A1.split('').sort().join('');
  A2 = A2.split('').sort().join('');
  console.log(A1 === A2);

  let Y = 9;
  if(1)
    {function f(){};
    Y+=typeof f;
  };
console.log(Y);

let Dis=(function(){
    return a=b=c=7
  }
)();
console.log(Dis);

let s="nikeeta";
let e ="";
let n ="";
function dubb(s){
for(let i=0;i<s.length;i++)
      {
          s[i];
          if( e.indexOf(s[i])==-1)
          {
              e=e+s[i];
             // console.log(e);
  
          }
          else if( s.includes(s[i])){
             n=n+s[i];
          }
         
        }
        console.log(n);
    return e;
      }
      console.log(dubb(s));

    
      let ARR2 = [6,7,8,4,8,8,8,9,2,99,67,0];
      function Reu(){
        return ARR2.reduce((pre,curr)=>{
          if(pre>curr)
            {
              return pre;
              //console.log(pre);
            }
            else{
              return curr;
              //console.log(curr);
            }
        });
      }
      console.log(Reu());

      function RR(){
        return Math.max(...ARR2);
      }
      console.log(RR());

      let fact =1;
function Debb(n){
  // return ARR2.filter((item, index) => ARR2.indexOf(item) === index); 
  for(let i=1;i<n;i++)
    {
      fact = fact * i;
    }
    return fact;
};

 console.log(Debb(7));


 function GFG_Fun() {
  console.log(
      Math.random().toString(23).slice(1));
}
GFG_Fun()
  

function randomStr(len, arr) {
  let ans = '';
  for (let i = len; i > 0; i--) {
      ans +=
          arr[(Math.floor(Math.random() * arr.length))];
  }
  console.log(ans);
}

randomStr(20, '12345abcde');

function stringToRoman(num) { 
  const values =  
      [1000, 900, 500, 400, 100,  
       90, 50, 40, 10, 9, 5, 4, 1]; 
  const symbols =  
      ['M', 'CM', 'D', 'CD', 'C',  
       'XC', 'L', 'XL', 'X', 'IX',  
       'V', 'IV', 'I']; 
  let result = ''; 

  for (let i = 0; i < values.length; i++) { 
      while (num >= values[i]) { 
          result += symbols[i]; 
          num -= values[i]; 
      } 
  } 

  return result; 
} 

const input = "2013"; 
const result1 = stringToRoman(parseInt(input)); 
console.log(result1);




function alphabeticalOrder(arr) {
  // Add your code below this line
  return arr.sort();
   
  };

  
  // Add your code above this line

console.log(alphabeticalOrder(["ad", "da", "c", "aa", "zdfg", "gdfgv"]));

let ARR3 = ["ad", "da", "c", "aa", "zdfg", "gdfgv"];

function findElementIndex(ARR3, element) { 

  const index = ARR3.indexOf(element); 

  return index !== -1 ? index : -1; 

} 
console.log(ARR3,"c");

const fruits = ['Mango', 'Banana', 'Cherry', 'Peach', 'Apple'];

if (fruits.find(el => (fruits === el.fruits))) {
  console.log('Found');
} else {
  console.log('Not Found');
}



let Arr=["n","hdjd","jdlsd","nikeeta","hhjbhjrnhuiskmmnfhddmfijvxernfn"];
// let l="";
// let d1=function()
// {
//     for(let i=0;i<Arr.length;i++)
//     {
//         if(l.length<Arr[i].length)
//         {
//             l=Arr[i];
        
        }
    }
    console.log(l);
}
d1();

function Reu1(){
  return Arr.reduce((pre,curr)=>{
    if(pre>curr)
      {
        return pre;
        //console.log(pre);
      }
      else{
        return curr;
        //console.log(curr);
      }
  });
}
console.log(Reu1());


function conti(){
  for(let i=0;i<10;i++)
    setTimeout(()=>{
      console.log("hello");
    },1000);
  }

conti();


const debounce = (func, wait) => {  
  let timeout;  
  return function mainFunction(...args) {  
    const later = () => {  
      clearTimeout(timeout);  
      func(...args);  
    };  
    clearTimeout(timeout);  
    timeout = setTimeout(delay, wait);  
  };  
};  
debounce(function(){
  console.log("hello");
},1000);




const arr = [
  { name: 'Geeks', date: new Date('2022-03-15') },
  { name: 'Abc', date: new Date('2022-03-12') },
  { name: 'GFG', date: new Date('2022-03-20') },
  { name: 'G4G', date: new Date('2021-03-20') }
];

arr.sort(function(a, b) {
  let x = new Date(a.date);
  let y = new Date(b.date);
 
  // Compare the 2 dates
  if (x < y) return -1;
  if (x > y) return 1;
  return 0;
});

console.log(arr);

const arr = [
  { name: 'Geeks', date: new Date('2022-03-15') },
  { name: 'Abc', date: new Date('2022-03-12') },
  { name: 'GFG', date: new Date('2022-03-20') },
  { name: 'G4G', date: new Date('2021-03-20') }
];

arr.sort((a, b) => a.date - b.date);

console.log(arr);

let array = [1,2,3];
let arrayCopy = array; // create copy

console.log(arrayCopy); // [1,2,3];

// Change 1st element of the array
arrayCopy[0] = '👻';
console.log(arrayCopy); // [ '👻', 2, 3 ]

// ❌Original got affected
console.log(array); // [ '👻', 2, 3 ]



const numbers = [1, [2], [3, [4]], 5];

// Using JavaScript
//console.log(JSON.parse(JSON.stringify(numbers)));


let nodesArray = [[5,7],[6,[86,8],9,7,8,[5,6,4]]];

let clonedArray = JSON.parse(JSON.stringify(nodesArray))
console.log(clonedArray);

let clone=nodesArray.map((el)=>{
console.log(...el);
})

function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}
console.log(titleCase("geeks for geeks"));

let no = 4;
let n1=0,n2=1;
for(let i=0;i<no;i++){
let temp = n1+n2;
n1=n2;
n2=temp;
console.log(temp);
}




const nestedArray = [1, [2, 3, [4, 5], 6], [7, 8], 9];

function largestRecursive(arr) {
  let largest = Number.MIN_SAFE_INTEGER; 
  arr.forEach(element => {
    if (Array.isArray(element)) { 
      largest = Math.max(largest, largestRecursive(element)); 
    } else {
      largest = Math.max(largest, element); 
    }
  });
  return largest; 
}

console.log(largestRecursive(nestedArray)); 


let i;
let f=true;
for(i=2;i<=15;i=i+2)
{
     if(i%2==0)
     {
    console.log(" not prime");
    f=false;
   break;
    }
    

}
 if(i==true)
{
    console.log("prime");
}
else{
   console.log("not prime");
}

let a1 ="nik";
let a2 = "kin";
let re = a1.split(' ').sort().join(' ') === a2.split(' ').sort().join(' ') ;
console.log(re);


let STR1 ="npnpent";
function dip(STR1){
return STR1.toLowerCase() === STR1.toLowerCase().split('').reverse().join(''); 
}
console.log(dip(STR1));

function reverse1(str){
  let r = "";
  for(let i = str.length-1; i >= 0; i--){
    r += str[i];
  }
  return r;
}

console.log(reverse1(STR1));

let ppp = [5,67,78,9,6,5,4,4,90];
let sun = ppp.reduce((pre,cur)=>{
  if(pre>cur)
    {
     // console.log("no is largest",pre);
      return pre;
    }
    else{
      //console.log("no is smaller ",cur);
      return cur;
    }
});
console.log(sun);


let mun = ppp.reduce((pre,curr)=>{
   return  pre*curr;
})
console.log(mun);

let m1=[6,4,3,2];
let M=m1.reduce((min,el)=>{
  if(min<el)
  {
    return min;
  }
  else{
    return el;
  }
});
console.log(M);

let str = "atul kumar srivastava";
let obj ={};
for(let s of str)
  if(!obj[s])
    obj[s] = 1;
  else 
  obj[s] = obj[s]  + 1;
console.log(obj)

let w=0;
let c1=0;
let v="nikeeta kaudare";
for(let i=0;i<v.length;i++)
       {
        if(v[i]=='a' || v[i]=='e' || v[i]=='i' || v[i]=='o' || v[i]=='u')
            {
               c1++;
             console.log(v[i])
            
            }
           else {
              w++;
            }
           
      }
       console.log(c1);
       console.log(w);


       function removeDuplicates(arr) {
        return arr.filter((item, index) => arr.indexOf(item) === index);
    }
    console.log(removeDuplicates("nikeeta"));

let s="aabbccdefg";
let e="";
let n="";



{
    for(let i=0;i<s.length;i++)
    {
        s[i];
        if( e.indexOf(s[i])==-1)
        {
            e=e+s[i];

        }
        else if( s.includes(s[i])){
           n=n+s[i];
        }
       
    }
console.log(n);
    return e;
}
console.log(dub());


let arr = [9,7,35,3,6,4,2,0,2]
console.log(arr.sort());

let arr1 = ["nik","abc","aa","ggth","pg"];
console.log(arr1.sort());

let dis =(function disply(x){
    return function(){
        return x+=1;
    }
}(0));
console.log(dis(6));


function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();

  async function getUser(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        let p = 9;
        if(resolve)
          {
            resolve(p)
         console.log("print data");
          }
          else if(reject)
          {
          console.log("not print")
          }
      },1000);
    });
  }
  async function getData(){
    try{
    let data =  await getUser();
    console.log(data);
    }catch(e){
      console.log(e);
    }
  }
   getData();


   function map(array,callback){
    const newArray = [];
      for(let i =0 ; i<array.length; i++)
        {
        newArray.push(callback(array[i]));
        }
      return newArray;
   }
  
   function double(num) {
    return num * 2;
  }
  
  // Define an array
  const numbers = [1, 2, 3, 4, 5];
  
  // Call the map function with the array and callback function
  const doubledNumbers = map(numbers, double);
  
  // Log the result
  console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


  function foo(b) {
    const a = 10;
    return a + b + 11;
  }
  
  function bar(x) {
    const y = 3;
    return foo(x * y);
  }
  
  const baz = bar(7); // assigns 42 to baz
console.log(baz);  

function foo(b) {
  const a = 10;
  return a + b + 11;
}

function bar(x) {
  const y = 3;
  return foo(x * y);
}

const baz = bar(7); // assigns 42 to baz
console.log(baz);  

let name = document.querySelector("#name").value;
let button = document.querySelector("#btn");
button.addEventListener("click",()=>{
 
  var regularExpression  = /^[a-zA-Z]{31,}$/;
  if(name == regularExpression){
    console.log("correct name");
    alert("correct");
  }
  else{
    console.log("not correct name");
    alert("not correct");
  }
});

   

function print (){
    return new Promise((resolve,reject)=>{
    //   if(resolve){ resolve(()=>{
    //     console.log("successfuly resolve");
    //    })}
    //    else
    //    {

    //     reject(()=>{
    //     console.log(" reject data ");
    //    })}
    if(resolve){
        console.log("data successfuly");
    }
    else{
        console.log(reject);
    }
    });
};
print().then((result)=>{
    console.log(result);
    print().then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    });
}).catch((error)=>{
    console.log(error);
});


let url =" https://echo.hoppscotch.io";
async function  data(){
    let Data = await axios.get(url);
    return Data.data.headers.host;
};

async function disply(){
    let show = await data();
    console.log(show);
    let para = document.querySelector("#p");
para.innerHTML=show;
};
 disply().then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});

function Person(name,age){
    this.name = name;
    this.age = age;

}
Person.prototype.add = function(){
    console.log(`hi i am ${name} and my age ${age}`);
}
let p3 = new Person("nik",20);
let p4 = new Person("mik",10);

function person(name,age){
    const per = {
              name:name,
              age:age,
              prop:this,
              tack(){
                console.log(`hi, i am ${this.name}`);
                console.log(this);
              },
              get:function(){
                console.log(this);
              }
            }
            return per;    
    }
    p1 = person("nik",10);
    p2 = person("mik",34);

String.prototype.add_last = function()
    {
        if(this.length === 0){
            console.log(-1);
        }
        else{
            return this[this.length-1];
        }
    };

    let arr = "nikeeta";
    //let arr = [6,7,8,9,7,6,5,5,10];
    console.log(arr.add_last());

    arr12 = [6,5,4,3,3,2];
    console.log(arr12);

/* 1: Write a function map that takes an array and a callback function as arguments. 
The map function should apply the callback function to each element in the array and return a new array
 with the transformed elements. Explain the concept of higher-order functions and their use cases.*/
    function map(arr,callback){
        let newarr = [];
        for(let i=1; i<arr.length; i++){
             newarr.push(callback(arr[i]));
        }
      return newarr;
    };

    let a = [4,5,6,7,8];

    function data(num){
        return num*2;
    };


    let p = map(a,data);
    console.log(p);

/* 2: Create a function fetchUserData that simulates an asynchronous API call and returns a Promise.
 Use async/await to handle the Promise, and log the user data to the console.
  Explain the benefits of using async/await over callback functions and Promise chains.*/

  async function fetchData(){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("hello asynchronous API");
        },2000);
      });
  };
  async function getUserData(){
    let data = await fetchData();
    console.log(data);
  };
  getUserData();


/* 3:  Create a Vehicle constructor function that initializes make and model properties.
 Then, create a Car constructor function that extends Vehicle and adds a year property.
 Create an instance of Car and access its properties and methods. 
 Explain how prototypal inheritance works in JavaScript. */

 class Vehicle{
    constructor(make, model){
      
       this.make = make;
       this.model = model;
    }
    show(){
        return `${this.make},${this.model}`;
    }
 }
 
 class Car extends Vehicle{
    constructor(make,model,year){
        super(make,model);
        this.year = year;

    }
    show(){
        super.show();
        console.log(super.show(this.make,this.model));
        return `${this.make},${this.model},${this.year}`;

    }
 }

 const car = new Car("honda","hero",2012);
 console.log(car.make);
 console.log(car.model);
 console.log(car.year);
 console.log(car.show());
