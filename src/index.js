import ingredients from "./scripts/items";
import dropDown from "./scripts/dropdown"


document.addEventListener("DOMContentLoaded",() => {
  const element = document.getElementById("dropdown")
  console.log(element)

  // create item list for dropdown
  const items = new dropDown(element, ingredients)
  items.createLi()

  // creat collabsible About section
  document.querySelectorAll(".about-info").forEach(button => {
    button.addEventListener('click', () => {
      const aboutContent = button.nextElementSibling;
      button.classList.toggle('about-info--active');
      if (button.classList.contains('about-info--active')) {
        aboutContent.style.maxHeight = aboutContent.scrollHeight + 'px'
      } else {
        aboutContent.style.maxHeight = 0;
      }
    })
  })



})







