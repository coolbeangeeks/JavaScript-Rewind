let obj=new Object(); // empty object

// Accessing object value
let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };
console.log(user.name)  // jhon
console.log(user.age) // 30

delete user.age // will delete the user age
let user2 = {};

// set
user2["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];

// user2.likes birds  // will give error

let user4 = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist

let user5 = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in user5) {
    // keys
     alert( key );  // name, age, isAdmin
    // values for the keys
    alert( user5[key] ); // John, 30, true
  }

//   ------------------------------------------------------------------------------------

let user6 = { name: 'John' };

let admin = user6; // the object is copied by refrence both user and admin refers to the same address 

admin.name = 'Pete'; 

alert(user6.name); // 'Pete', changes are seen from the "user" reference

let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

let a1 = {};
let b1 = {}; // two independent objects

alert( a1 == b1 ); // false
console.log(a1===b1)  // false

// Cloning and merging, Object.assign 
let user7 = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // the new empty object
  
  // let's copy all user properties into it
  for (let key in user7) {
    clone[key] = user7[key];
  }
  
  // now clone is a fully independent object with the same content
  clone.name = "Pete"; // changed the data in it
  
  alert( user7.name ); // still John in the original object

//   We can also use the method Object.assign. 
let user8 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user8, permissions1, permissions2);  // 

// now user = { name: "John", canView: true, canEdit: true }
alert(user8.name); // John
alert(user8.canView); // true
alert(user8.canEdit); // true


// ---------------------------------Deep clone object---------------------------------------


const original = {
    name: 'Alice',
    job: {
        title: 'Developer',
        company: 'Tech Co'
    }
};

// Deep clone using JSON methods
const deepClone = JSON.parse(JSON.stringify(original));

// Modifying a nested object affects only the copy
deepClone.job.title = 'Senior Developer';

console.log(original.job.title); // Output: 'Developer'
console.log(deepClone.job.title); // Output: 'Senior Developer'
