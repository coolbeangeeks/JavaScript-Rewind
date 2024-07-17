createOrder(cart)
.then((order_id)=>proceedtopayment(order_id))
.then((payment_info)=>showorderSum(payment_info))
.then((payment_info)=>pdateWallet(payment_info))


// this is promise chaining because we are 
// 1- create order will return a promise object 
// 2- that object attach a callback function using then 
// 3- After that (2) also return a  promise then we pass this to another this
// hence we have a made a chain of promises