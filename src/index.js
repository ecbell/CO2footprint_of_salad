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


    // add effects to the counters 
    let carbonCounter = document.querySelector("#carbon-counter");
    const count = parseInt(carbonCounter.innerText);
    const speed = 200;
    const target = items.counter += ingredients[e.target.innerText].averageCO2;
    // const increment = target / speed;

  //   setTimeout(() => {
  //     counter.innerText = (count + increment)
  //   }, 1000);

  //   while (count < target) {
     //   setTimeout(() => {
  //     counter.innerText = (count + increment)
  //   }, 1000);
  //   }
  // }


})







