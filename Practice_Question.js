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

 /* 4:  Write a function createIncrement that returns another function.
  The returned function should increment a value and return it.
   Explain how the closure works and why it's important in JavaScript,*/
  
function createIncrement() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const increment = createIncrement();
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2
console.log(increment()); // Output: 3


/* 5: Write a function createIncrement that function should increment a value and return it.*/
function* countGenerator() {
  let count = 0;
  while (true) {
      yield count++;
  }
}

// Create an instance of the generator
const generator = countGenerator();

// Call next() to get the next value from the generator
console.log(generator.next().value); // Output: 0
console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
// And so on...


/* 6: Implement a function asyncTask that logs a message to the console after 2 seconds. 
Then, call asyncTask multiple times and explain the order in which the messages are logged.
 Discuss the event loop and how JavaScript handles asynchronous operations. */

 function asyncTask() {
  setTimeout(() => {
    console.log("Message logged after 2 seconds");
  }, 2000);
}

asyncTask();
asyncTask();
asyncTask();


/* 7: Explain what hoisting is in JavaScript and how it works for variables and functions. 
Create examples that demonstrate the behavior of hoisting for both variable and function declarations. */

console.log(x); // undefined
var x = 5;

var x ;
console.log(x); // undefined
 x = 5;


 foo(); // "Hello, I am foo!"

function foo() {
  console.log("Hello, I am foo!");
}

function foo() {
  console.log("Hello, I am foo!");
}

foo(); // "Hello, I am foo!"


/* Write a generator function fibonacciGenerator that generates the Fibonacci sequence up to a given number. 
Implement a way to iterate over the generated values using the next() method.
 Explain the concept of generators and iterators in JavaScript*/

function* fibonacciGenerator(limit) {
  let prev = 0;
  let curr = 1;
  
  while (curr <= limit) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

//Example usage:
const fibonacciSeq = fibonacciGenerator(100); // Generate Fibonacci sequence up to 100

// Iterate over the generated values using the next() method
let result = fibonacciSeq.next();
while (!result.done) {
  console.log(result.value);
  result = fibonacciSeq.next();
}


//Iterate over the generated values using the for...of loop
for (const value of fibonacciSeq) {
  console.log(value);
}
