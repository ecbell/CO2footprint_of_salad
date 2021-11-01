import carbonCounter from "./carbon_counter"

class dropDown {
  
  constructor (parent, ingredients) {
    this.parent = parent
    this.ingredients = ingredients

    this.parent.addEventListener('mouseenter', this.handleEnter.bind(this));
    this.parent.addEventListener('mouseleave', this.handleLeave.bind(this));
    document.getElementById("dropdown").addEventListener("click", this.clickEvent.bind(this));
    
    let image = document.getElementsByClassName("image")
    image[0].addEventListener("click", this.removeImage.bind(this));
    image[0].addEventListener("mouseover", this.mouseOverImage.bind(this))

  }

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


  clickEvent(e) {
    if (e.currentTarget !== e.target) {
      let link = document.createElement("img");
    
      link.src = this.ingredients[e.target.innerText].img;
      link.id = e.target.innerText;
  
      document.getElementsByClassName('image')[0].appendChild(link);
    }
  }

    mouseOverImage(e) {
      if (e.target.nodeName === "IMG") {
        const carbonDisplay = document.getElementById("CO2perItem")
        carbonDisplay.innerText = this.ingredients[e.target.id].averageCO2
      }
    }

  removeImage(e) {
    let parentImg = document.querySelector('.image');
    e.target.remove();

  }
}


export default dropDown