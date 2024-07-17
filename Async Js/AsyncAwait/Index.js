async function getdata(){   // always return a promise
    return "Hello coding Dunia" 
}
const datapromise=getdata();
datapromise.then(res=>console.log(res));  // Hello coding Dunia

const p_1= new Promise((resolve, reject) => {
    resolve("Creating new promise")
})

async function getdata_1(){
    return p_1;
}
p_1.then(res=>console.log(res)) // Creating new promise

const p_2= new Promise((resolve, reject) => {
    resolve("Creating new promise_2")
})

async function getdata_2(){
    const val=await p_2    // await keyword is use to handle the promise
    console.log(val) // Creating new promise_
}
getdata_2();
const p_3= new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("will wait for 10sec_3")

    },10000)
    
})
function getdata_3(){
    p_3.then(res=>console.log(res)) // will console log after 10 sec because promise is resolve after 10 sec
    console.log("Quickly printed")  // will printed immediately after the js engine runs

}
getdata_3();

// Playing with Async Await
const p_4= new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Creating new promise_4")

    },10000)
    
})

async function getdata_4(){
    console.log("Quicly Printed_1")
    const val=await p_4    // await keyword is use to handle the promise
    console.log("will wait for 10 sec till the promise is resolved and then will be printed")
    console.log(val) // Creating new promise_4 will be printed after 10 sec

}
getdata_4();

const p_10sec= new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Creating new promise_10sec")

    },10000)
    
})
const p_5sec= new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Creating new promise_5sec")

    },5000)
    
})
async function getdata_5(){
    console.log("Quicly Printed_1")
    const val=await p_10sec    // await keyword is use to handle the promise
    console.log("will wait for 10 sec till the promise is resolved and then will be printed")
    console.log(val) // Creating new promise_4 will be printed after 10 sec

    const val2=await p_5sec    // await keyword is use to handle the promise
    console.log("will wait for 10 sec till the promise is resolved and then will be printed")
    console.log(val2) // 

}
getdata_5();

// after reversing the order
async function getdata_6(){
    console.log("Quicly Printed_1")
    const val=await p_5sec    // await keyword is use to handle the promise
    console.log("will wait for 5 sec till the promise is resolved and then will be printed")
    console.log(val) // Creating new promise_4 will be printed after 5 sec

    const val2=await p_10sec   // await keyword is use to handle the promise
    console.log("will wait for another 5 sec till the promise is resolved and then will be printed")
    console.log(val2) // 

}
getdata_6();