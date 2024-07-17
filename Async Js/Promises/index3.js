const p1= new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("This is p1");
    },1000)
    
})
const p2= new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("This is p2");
    },5000)
    
})
const p3= new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("This is p3");
    },2000)
    
})

Promise.all([p1,p2,p3]).then(val=>console.log(val)); // will wait for all the promise to resolve and will give error if the any of the promise fails.


const p4= new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("This is p4");
    },1000)
    
})
const p5= new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("This is p5");
    },5000)
    
})
const p6= new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("This is p6");
    },2000)
    
})
Promise.allSettled([p4,p5,p6]).then(val=>console.log(val)) // it will wait for all the promise to be settled if any one is reject it will return the promise object of all the value.


const p7= new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("This is p7");
    },1000)
    
})
const p8= new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("This is p8");
    },5000)
    
})
const p9= new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("This is p9");
    },2000)
    
})
Promise.race([p7,p8,p9]).then(val=>console.log(val)) // it will give the res of the promise which takes the miminum tym and wheather its rejected or not 


