// import Example from "./scripts/example";
import ingredients from "./scripts/items";
import dropDown from "./scripts/dropdown"
import carbonFootprint from "./scripts/carbon_footprint"

document.addEventListener("DOMContentLoaded",() => {
console.log("Hello World");
// const main = document.getElementById("main");
// new Example(main);

  const element = document.getElementById("dropdown")
  console.log(element)

  // create item list for dropdown
  const items = new dropDown(element, ingredients)
  items.createLi()

  // create mouseover events for all images

})







