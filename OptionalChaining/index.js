let user = {}; // a user without "address" property

alert(user.address.street); // Error! because the user has no adddress and address is undefined threfore undefined.street gives us error

let user2 = {}; // user has no address

alert(user2.address ? user2.address.street ? user2.address.street.name : null : null);
let user3 = {}; // user has no address

alert( user3.address && user3.address.street && user3.address.street.name ); // undefined (no error)   but the duplication of user3.address so many times is not good for readbility

// Using Optional chaninig --------------------------
let user4 = {}; // user has no address

alert( user4?.address?.street ); // undefined (no error)

// using Optional chaining for the function call if exits
let userAdmin = {
    admin() {
      alert("I am admin");
    }
  };
  
  let userGuest = {};
  
  userAdmin.admin?.(); // I am admin
  
  userGuest.admin?.(); // nothing happens (no such method)
// -------------- using optinal chaining with square bracket--------------------------------
  let key = "firstName";

let user5 = {
  firstName: "John"
};

let user6 = null;

alert( user5?.[key] ); // John
alert( user6?.[key] ); // undefined
