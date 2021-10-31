class dropDown {
  constructor (parent, ingredients) {
    this.parent = parent
    this.ingredients = ingredients

    this.parent.addEventListener('mouseenter', this.handleEnter.bind(this));
    this.parent.addEventListener('mouseleave', this.handleLeave.bind(this));
    document.getElementById("dropdown").addEventListener("click", this.clickEvent.bind(this));
    const image = document.getElementsByClassName("image");
    
    // for (let i = 0; i < image.length; i++) {
    //   const element = image[i];
    //   element.addEventListener("mouseover", this.mouseOverImage.bind(this))
    // }
    
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
      const carbonPerItem = document.createElement("p")
      carbonPerItem.id = e.target.innerText
      carbonPerItem.innerHTML = this.ingredients[e.target.innerText].averageCO2;
      carbonPerItem.setAttribute('hidden', true)
      link.src = this.ingredients[e.target.innerText].img;
  
      document.getElementsByClassName('image')[0].appendChild(carbonPerItem);
      document.getElementsByClassName('image')[0].appendChild(link);
    }
  }

    mouseOverImage(e) {
      const pTags = document.querySelectorAll("p")
      for (let i = 0; i < pTags.length; i++) {
        const el = pTags[i];

      if (this.ingredients[el.id].img === e.target.src) {
        el.removeAttribute('hidden')
      }
    }
  }
}


export default dropDown