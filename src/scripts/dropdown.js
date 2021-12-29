import carbonCounter from "./carbon_counter"

class dropDown {
  
  constructor (parent, ingredients) {
    this.parent = parent
    this.ingredients = ingredients
    
    this.counter = 0
    this.percentCount = 0

    this.parent.addEventListener('mouseenter', this.handleEnter.bind(this));
    this.parent.addEventListener('mouseleave', this.handleLeave.bind(this));
    document.getElementById("dropdown").addEventListener("click", this.clickEvent.bind(this));
    document.getElementById("dropdown").addEventListener('click', this.handleclick.bind(this));
    document.getElementById("dropdown").addEventListener('click', this.handleclickPercent.bind(this));

    let image = document.getElementsByClassName("image")
    image[0].addEventListener("click", this.removeImage.bind(this));
    image[0].addEventListener("click", this.mouseOverImage.bind(this));
    image[0].addEventListener("mouseout", this.mouseLeaveImage.bind(this));

    // let button = document.getElementsByClassName("closeBtn")
    // button[0].addEventListener("click", this.removeImage.bind(this));
    
  
    // document.addEventListener("click", this.removeImage.bind(this))


  }

// need to fix async motion. -> to do for later
  // updateCount() {
  //   console.log(parseInt(document.querySelector("#carbon-counter").innerText))
  //   console.log(this.counter)
  //   setTimeout(() => {
  //     document.querySelector("#carbon-counter").innerText = (parseInt(document.querySelector("#carbon-counter").innerText) + Math.trunc(this.counter / 200)) + "g CO2e"
  //     }, 1);
  // }


  // Create the dropdown functionality
  createLi() {
    const items = Object.keys(this.ingredients)
    items.forEach(item => {
      let li = document.createElement("li")
      li.innerHTML = item;
      li.classList = 'item'
      this.parent.appendChild(li)
    });
  }
    
  handleLeave() {
    const items = document.querySelectorAll(".item");
    items.forEach(child => child.classList.remove('open'));
  };

  handleEnter() {
    const items = document.querySelectorAll(".item");
    items.forEach(child => child.classList.add('open'));
  };

// Create click functionality for dropdown where images/ gifs appear
  clickEvent(e) {
    if (e.currentTarget !== e.target) {
      let link = document.createElement("img");
    
      link.src = this.ingredients[e.target.innerText].img;
      link.id = e.target.innerText;

      let closeBtn = document.createElement('button');
      // closeBtn.setAttribute("id", "closeBtn");
      closeBtn.id = e.target.innerText;
      closeBtn.className = "closeBtn"
      closeBtn.innerText = "X";

      let parent = document.createElement("div");
      parent.className = "veggie"
      parent.append(closeBtn)
      parent.appendChild(link)
      

      // document.getElementsByClassName('image')[0].appendChild(link)
      let noSalad = document.getElementById('no-ingredients');
      if(noSalad) {
        noSalad.parentNode.removeChild(noSalad);
      }
      document.getElementsByClassName('image')[0].appendChild(parent);
    }
  }

  // create functionality for displaying carbon per ingredient
  mouseOverImage(e) {
    if (e.target.nodeName === "IMG") {
      const carbonDisplay = document.getElementById("CO2perItem")
      const servingItem = this.ingredients[e.target.id].serving
      const averageCO2PerItem = this.ingredients[e.target.id].averageCO2 + `g CO2 per ${servingItem}` + ` of ${e.target.id}`
      const descriptionPerItem = this.ingredients[e.target.id].description
      const funFacts = `Fun Facts:\n\n`
      carbonDisplay.innerText = funFacts + `Serving size: ` + averageCO2PerItem + `\n\n` + descriptionPerItem
    }
  }

  // functionality for removing text on carbon per ingredient when not moused over image
  mouseLeaveImage(e) {
    const carbonDisplay = document.getElementById("CO2perItem")
    carbonDisplay.innerText = "Click on an ingredient to view more information!"
  }

  // Create functionality to count carbon 
  handleclick(e) {
    if (e.currentTarget !== e.target) {
      let count = this.counter += this.ingredients[e.target.innerText].averageCO2
      let average = (count).toFixed(2)
      document.querySelector("#carbon-counter").innerHTML = average + "g CO2e"
        // this.updateCount();
    }
  }

  // establish basic functionality to allow the user to remove an image.
  removeImage(e) {
    if (e.target.className === "closeBtn") {
      // e.target.remove();
      // console.log(e.target.parentElement.classList)

      let image = document.getElementsByClassName("image")[0]
      let children = document.querySelectorAll('.image .veggie');

      e.target.parentElement.remove();

      if (children.length < 2) {
        let noIng = document.createElement("p");
        noIng.innerText = 'You currently have no ingredients in your salad.'
        noIng.id = 'no-ingredients';
        image.appendChild(noIng);
      }

      let count = this.counter -= this.ingredients[e.target.id].averageCO2
      let average = Math.abs(count).toFixed(2)
      let percent = this.percentCount -= this.ingredients[e.target.id].percentEmissions
      document.querySelector("#carbon-counter").innerHTML = average + "g CO2e"
      document.querySelector("#carbon-percent-counter").innerHTML = Math.abs(percent).toFixed(2) + "%"
      const carbonDisplay = document.getElementById("CO2perItem")
      carbonDisplay.innerText = "Click on an ingredient to view more information!"
    }
  }

  // creat functionality to add a percent-fair emissions counter:
  handleclickPercent(e) {
    if (e.currentTarget !== e.target) {
      let count = this.percentCount += this.ingredients[e.target.innerText].percentEmissions
      let percent = (count).toFixed(2)
      document.querySelector("#carbon-percent-counter").innerHTML = percent + "%"
    }
  }

}


export default dropDown