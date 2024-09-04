
//Promise.all method
let promiseOne = new Promise(resolve=>{
  console.log("ok");
});

let promiseTwo = new Promise(resolve=>{
  console.log("ok");
});

let promiseThree = new Promise(resolve=>{
  console.log("ok");
});

Promise.all([promiseOne,promiseTwo,promiseThree]).then(([one,two,three])=>{
  console.log(one,two,three);
});

// Promise.all([promiseOne,promiseTwo,promiseThree]).then((value)=>{
//   console.log(value);
// });

//Promises allSettled
let promise1 = new Promise(resolve=>{
  let one = axios.get("https://api.github.com/users/MaksymRudnyi");
  return one.data;
});

let promise2 = new Promise(resolve=>{
  console.log("ok nikeeta");
});

let promise3 = new Promise(resolve=>{
  console.log("ok sakshi");
});

Promise.allSettled([promise1,promise2,promise3]).then(([one,two,three])=>{
  console.log(one,two,three);
});

Promise.allSettled([promise1.one,promise2,promise3]).then(([one,two,three])=>{
  console.log(one,two,three);
});

//Promise.any method
//ex 1
const promise11 = Promise.reject(0);
const promise22 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise33 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise11, promise22, promise33];

Promise.any(promises).then((value) => console.log(value));

//ex 2
const pErr = new Promise((resolve, reject) => {
  reject("Always fails");
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Done eventually");
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Done quick");
});

Promise.any([pErr, pSlow, pFast]).then((value) => {
  console.log(value);
  // pFast fulfills first
});


//rece() method 

const promise112 = new Promise((resolve, reject) => {
  setTimeout(()=>{
    console.log("save data");
  },9000);
});

const promise212 = new Promise((resolve, reject) => {
  setTimeout(()=>{
    console.log("save data");
  },8000);
});

const pFast1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Done quick");
});

Promise.race([promise1, promise2,pFast1]).then((value) => {
  console.log(value);
});
// Expected output: "two"


//reject method 
function resolved(result) {
  console.log('Resolved');
}

function rejected(result) {
  console.error(result);
}

Promise.reject("fail").then((resolved, rejected)=>{
  console.log("reject",rejected);
});
// Expected output: Error: fail

//resolve 
Promise.resolve("resolve").then((resolved,rejected)=>{
  console.log("resolve",resolved);
})

//axios.all method 
let one = axios.get("https://api.github.com/users/MaksymRudnyi");
let two = axios.get("https://api.github.com/users/MaksymRudnyi");
let three = axios.get("https://api.github.com/users/MaksymRudnyi");

axios.all([
  one,two,three
]).then((one,two,three)=>{
  console.log(one,two,three);
}).catch(( error)=>{
  console.log(error);
});

 
//first way using spread method
axios.all([
  axios.get("https://api.github.com/users/MaksymRudnyi"),
  axios.get("https://catfact.ninja/facts"),
  axios.get("https://catfact.ninja/facts")
])
.then(axios.spread((res1,re2,re3)=>{
console.log(res1.data,re2.data,re3.data);
}))
.catch((error)=>{
  if(error.response){
    console.log("error");
  }
  else if(error.request){
    console.log("error in request");
  }
  else{
    console.log("error occurse");
  }

});


// second way
axios.all([
  axios.get("https://api.github.com/users/MaksymRudnyi"),
  axios.get("https://catfact.ninja/facts"),
  axios.get("https://catfact.ninja/facts")
])
.then(axios.spread((...res)=>{
console.log(res[0].data,res[1],res[2]);
}))
.catch((error)=>{
  if(error.response){
    console.log("error");
  }
  else if(error.request){
    console.log("error in request");
  }
  else{
    console.log("error occurse");
  }

});



