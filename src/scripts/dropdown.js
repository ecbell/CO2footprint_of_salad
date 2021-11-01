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
      // const carbonPerItem = document.createElement("p")
      // carbonPerItem.id = e.target.innerText
      // carbonPerItem.innerHTML = this.ingredients[e.target.innerText].averageCO2;
      // // carbonPerItem.setAttribute('hidden', true)
      link.src = this.ingredients[e.target.innerText].img;
      link.id = e.target.innerText;
  
      // document.getElementsByClassName('image')[0].appendChild(carbonPerItem);
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
    let parentImg = document.querySelectorAll('.image')
    // console.log(parentImg[0].children)
    let childImage = parentImg[0].children
    // childImage[0].remove()
    for (let i = 0; i < childImage.length - 1; i++) {
      childImage[i].remove()

      // console.log(parentImg[0])
      // console.log(el.remove())
      
    }

    

    //   // closeImg[i].addEventListener('click', function () {
    //   //   var imgWrap = this.parentElement;
    //   //   parentImg.removeChild(imgWrap);
    //   // });
    // }
  }
}


export default dropDown