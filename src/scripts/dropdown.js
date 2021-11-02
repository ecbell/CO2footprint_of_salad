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
    image[0].addEventListener("mouseover", this.mouseOverImage.bind(this))
    image[0].addEventListener("mouseout", this.mouseLeaveImage.bind(this))
  }

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
  
      document.getElementsByClassName('image')[0].appendChild(link);
    }
  }

  // create functionality for displaying carbon per ingredient
  mouseOverImage(e) {
    if (e.target.nodeName === "IMG") {
      const carbonDisplay = document.getElementById("CO2perItem")
      const servingItem = this.ingredients[e.target.id].serving
      const averageCO2PerItem = this.ingredients[e.target.id].averageCO2 + `g CO2 per ${servingItem}`
      const descriptionPerItem = this.ingredients[e.target.id].description

      carbonDisplay.innerText = averageCO2PerItem + `\n\n` + descriptionPerItem 
    }
  }

  // functionality for removing text when not moused over image
  mouseLeaveImage(e) {
    const carbonDisplay = document.getElementById("CO2perItem")
    carbonDisplay.innerText = ""
  }

  // Create functionality to count carbon 
  handleclick(e) {
    if (e.currentTarget !== e.target) {
      let count = this.counter += this.ingredients[e.target.innerText].averageCO2
      let average = (count).toFixed(2)
      document.querySelector("#carbon-counter").innerHTML = average + "g CO2e"
    }
  }

  // establish basic functionality to allow the user to remove an image.
  removeImage(e) {
    let parentImg = document.querySelector('.image');
    e.target.remove();
    let count = this.counter -= this.ingredients[e.target.id].averageCO2
    let average = Math.abs(count).toFixed(2)
    let percent = this.percentCount -= this.ingredients[e.target.id].percentEmissions
    document.querySelector("#carbon-counter").innerHTML = average + "g CO2e"
    document.querySelector("#carbon-percent-counter").innerHTML = Math.abs(percent).toFixed(2) + "%"
  }

  // creat functionality to add a percent-fait emissions counter:
  handleclickPercent(e) {
    if (e.currentTarget !== e.target) {
      let count = this.percentCount += this.ingredients[e.target.innerText].percentEmissions
      let percent = (count).toFixed(2)
      document.querySelector("#carbon-percent-counter").innerHTML = percent + "%"
    }
  }
}


export default dropDown