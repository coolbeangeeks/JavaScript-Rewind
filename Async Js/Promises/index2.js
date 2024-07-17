let cart=[];
// ['pants','tshirt','jeans'];
function createCart(cart){
    const pr=new Promise(function(resolve,reject){

        if(!validatecart()){
            const err=new Error("Cart is not valid")
            reject(err)
        }
        const orderid=123456;
        resolve(orderid);

    });
    return pr
}
function paymentinfo(orderid){
    const pr2= new Promise(function(resolve,reject){
        if(!orderid){
            const err=new Error('u cannot proceed to payment because ur cart is empty')
            reject(err)
        }
        const totalpayment=5000;
        resolve(totalpayment)
    })
    return pr2;
}
function validatecart(){
   if(cart.length!==0){
    return true;
   }
   return false
}

createCart(cart).then((orderid)=>{
    console.log(orderid)
    return orderid
})
.then((orderid)=>{
    return paymentinfo(orderid)

})
.then(function(totalpayment){
    console.log(`your total bill is ${totalpayment}`)
})
.catch(function(err){
    console.log(err.message)
})