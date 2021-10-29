// Your entry file is src / index.js.I'd recommend adding 
// a DOMContentLoaded event listener, and in that callback doing 
// some basic DOM manipulation. 
// Test that it works in the browser; 
// this way, you know your webpack is working and everything is hooked up correctly.
import Example from "./scripts/example";

document.addEventListener("DOMContentLoaded",() => {
console.log("Hello World");
const main = document.getElementById("main");
new Example(main);
})






