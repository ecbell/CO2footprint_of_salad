// import Example from "./scripts/example";
import ingredients from "./scripts/items";
import dropDown from "./scripts/dropdown"
// import carbonCounter from "./scripts/carbon_counter"


document.addEventListener("DOMContentLoaded",() => {
  const element = document.getElementById("dropdown")
  console.log(element)

  // create item list for dropdown
  const items = new dropDown(element, ingredients)
  items.createLi()

  // create counter
  // const counter = new carbonCounter(element, ingredients)

  // creat collabsible about section
  document.querySelectorAll(".about-info").forEach(button => {
    button.addEventListener('click', () => {
      const aboutContent = button.nextElementSibling;
      console.log(aboutContent.style.maxHeight)
      console.log(aboutContent.scrollHeight)
      button.classList.toggle('about-info--active');

      if (button.classList.contains('about-info--active')) {
        aboutContent.style.maxHeight = aboutContent.scrollHeight + 'px'
      } else {
        aboutContent.style.maxHeight = 0;
      }
    })
  })


})







