// Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

// It’s called “destructuring assignment,” because it “destructurizes” by copying items into variables. However, the array and object  itself is not modified.



let a=[1,2,3,4];   // creating a array 
let b=[...a]   // using the spread operator to assign a same value to the array be
let [...rest]=a;  // rest will take all the value from the array a and create a new array with name rest and contains the all the same value as a
console.log(rest)  // [1,2,3,4]
let d=[1,2,3,4,5,6,7,8,9,10]
let [x,y1,z1,...t]=d    // the fisrt 3 value of array d will be given to x,y1,z1 and rest be store as array in t 
console.log(x)   // 1
console.log(y1) // 2
console.log(z1)  // 3
console.log(t) // [4,5,6,7,8,9,10]
let c=[1,23,4,5];
c=[...a,...c]   // using the spread operator to use the value of a and c and create a new c with new value
console.log(c)  // [1,2,3,4,1,23,4,54]



let [var1]=a;  // the value at index 0 will be assign to var1
console.log(var1)  // 1

// object destructiing

let obj1={
  var2:1,
  var3:2
}  // creating a array
let {var2,var3}=obj1   

console.log(var2)  //   value corresponding to the key var2 i.e 1
console.log(var3)  //  2

let obj2={...obj1,var2:3}   //  creating obj2 from spreading obj1 and modifying the value of var2 to 3
let obj3={...obj2,var4:2}
console.log(obj1)  // original obj1 
console.log(obj2)  // {var2:3 ,var3:2}

let arobj=[obj1,obj2,obj3]  // array of obj 

let [x2,y,z]=arobj;  // 
console.log(x2)
console.log(y)
console.log(z)




//  Nested Destruction   
let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  
  // destructuring assignment split in multiple lines for clarity
  let {
    size: { // put size here
      width,
      height
    },
    items: [item1, item2], // assign items here
    title = "Menu" // not present in the object (default value is used)
  } = options;
  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200
  alert(item1);  // Cake
  alert(item2);  // Donut



// Adding  a default value while destructing

let option = {
    titlee: "Menu",
  };
  
  let { widthh = 100, heightt = 200, titlee } = option;
  
  console.log(widthh);  // 100
  console.log(heightt); // 200
  console.log(titlee); // Menu
  console.log(option); // {titlee:"Menu"}  // will not chnage the original array 
  