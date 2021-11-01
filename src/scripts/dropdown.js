import carbonCounter from "./carbon_counter"

class dropDown {
  
  constructor (parent, ingredients) {
    this.parent = parent
    this.ingredients = ingredients
    
    this.counter = 0

    this.parent.addEventListener('mouseenter', this.handleEnter.bind(this));
    this.parent.addEventListener('mouseleave', this.handleLeave.bind(this));
    document.getElementById("dropdown").addEventListener("click", this.clickEvent.bind(this));
    document.getElementById("dropdown").addEventListener('click', this.handleclick.bind(this));


    let image = document.getElementsByClassName("image")
    image[0].addEventListener("click", this.removeImage.bind(this));
    image[0].addEventListener("mouseover", this.mouseOverImage.bind(this))

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
      carbonDisplay.innerText = this.ingredients[e.target.id].averageCO2
    }
  }

  // Create functionality for a counter
  handleclick(e) {
    if (e.currentTarget !== e.target) {
      this.numImages += 1
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
    document.querySelector("#carbon-counter").innerHTML = average + "g CO2e"
  }

  
}

export default dropDown