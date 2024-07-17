console.log('virat');

setTimeout(()=>{
    console.log('Dhoni')
},5000)  // will execute after 5 sec and dhoni will be printed after 5 sec

console.log('Rohit')

// callback hell example-------------------------
let cart=['shoes','pant']
Api.createOrder(cart,function(){
    api.proceedtopayment(function(){
        api.cartSummey(function(){
            console.log('summary of cart')
        })
    })
})