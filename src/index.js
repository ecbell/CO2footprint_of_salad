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
        // aboutContent.style.maxHeight = aboutContent.scrollHeight + 'px'
        aboutContent.style.maxHeight = '1000' + 'px'

      } else {
        aboutContent.style.maxHeight = 0;
      }
    })
  })

  // Create a pop-out
  const popOut = document.querySelectorAll(".pop-out")[0]
  let toggle = document.getElementById('toggle')
  let text = document.getElementById('toggle').innerHTML;
  const textPopOut = document.getElementById("popouttext");

  // popOut.addEventListener('click', () => {
  //   const textPopOut = document.getElementById("popouttext");

  //   textPopOut.classList.toggle("popouttext--show");

  //   if (textPopOut.classList.contains('popouttext--show')) {
  //     textPopOut.innerHTML = text
  //   } else {
  //     textPopOut.innerHTML = ""
  //   }
  // })

  // popOut.addEventListener('click', () => {
  //   const textPopOut = document.getElementById("popouttext");
  //   textPopOut.classList.add("popouttext--show");
  //   textPopOut.innerHTML = text
  // })


  //   console.log(textPopOut.classList.contains("popouttext--show"))
  //   document.addEventListener('click', () => {
  //     if (textPopOut.classList.contains("popouttext--show")) {
  //       textPopOut.classList.remove("popouttext--show");
  //       // textPopOut.innerHTML = ""
  //   }
  // })


  popOut.addEventListener('click', () => {
        const textPopOut = document.getElementById("toggle");
        textPopOut.classList.add('visible');
  })

  const closeModal = document.querySelectorAll(".modal-backdrop")[0]


  closeModal.addEventListener('click', () => {
    const textPopOut = document.getElementById("toggle");
    textPopOut.classList.remove('visible');
  })
})







