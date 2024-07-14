// Storing data
localStorage.setItem('username', 'JohnDoe'); // where usename is the key and the value is the johnDoe 

// Retrieving data
let username = localStorage.getItem('username');
console.log(username); // Output: JohnDoe

// Removing data
localStorage.removeItem('username');

// Clearing all data
localStorage.clear();

// *********Session storage Example************************
// Storing data
sessionStorage.setItem('sessionID', 'abc123');

// Retrieving data
let sessionID = sessionStorage.getItem('sessionID');
console.log(sessionID); // Output: abc123

// Removing data
sessionStorage.removeItem('sessionID');

// Clearing all data
sessionStorage.clear();


// Practicle example using the local storage function
