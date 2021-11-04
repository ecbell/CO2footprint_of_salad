import ingredients from "./scripts/items";
import dropDown from "./scripts/dropdown"


document.addEventListener("DOMContentLoaded",() => {
  const element = document.getElementById("dropdown")

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

  // Create a pop-out
  const popOut = document.querySelectorAll(".pop-out")[0]
  let toggle = document.getElementById('toggle').setAttribute('hidden', true)
  let text = document.getElementById('toggle').innerHTML;
  popOut.addEventListener('click', () => {
    const textPopOut = document.getElementById("popouttext");

    textPopOut.classList.toggle("popouttext--show");

    if (textPopOut.classList.contains('popouttext--show')) {
      textPopOut.innerHTML = text
    } else {
      textPopOut.innerHTML = ""

    }
  })



  
  
  
})







