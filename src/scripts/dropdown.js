class dropDown {
  constructor (parent, ingredients) {
    this.parent = parent
    this.ingredients = ingredients

    this.parent.addEventListener('mouseenter', this.handleEnter.bind(this));
    this.parent.addEventListener('mouseleave', this.handleLeave.bind(this));
    document.getElementById("dropdown").addEventListener("click", this.clickEvent.bind(this));
    this.parent.addEventListener("click", this.removeImage.bind(this));
    let image = document.getElementsByClassName("image")
    image[0].addEventListener("mouseover", this.mouseOverImage.bind(this))

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
      // const carbonPerItem = document.createElement("p")
      // carbonPerItem.id = e.target.innerText
      // carbonPerItem.innerHTML = this.ingredients[e.target.innerText].averageCO2;
      // carbonPerItem.setAttribute('hidden', true)
      link.src = this.ingredients[e.target.innerText].img;
      link.id = e.target.innerText;
  
      // document.getElementsByClassName('image')[0].appendChild(carbonPerItem);
      document.getElementsByClassName('image')[0].appendChild(link);
    }
  }

    mouseOverImage(e) {
      if (e.target typeof)
      const carbonDisplay = document.getElementById("CO2perItem")
      console.log(this.ingredients[e.target.id])
      carbonDisplay.innerText = this.ingredients[e.target.id].averageCO2
      // e.target = img tage html src, id. 
    //   for (let i = 0; i < pTags.length; i++) {
    //     const el = pTags[i];

    //   if (this.ingredients[el.id].img === e.target.src) {
    //     el.removeAttribute('hidden')
    //   }
    // }
  }

  removeImage(e) {
    let parentImg = document.querySelectorAll('.image')
    // console.log(parentImg)
  
    let currentImages = document.querySelectorAll("p")
    // console.log(currentImages)
    // console.log(this.ingredients[e.target.innerText].img)
    // for (let i = 0; i < currentImages.length; i++) {
    //   const el = currentImages[i] 
    //   console.log(el)
    //   parentImg.removeChild(el)
      

    //   // closeImg[i].addEventListener('click', function () {
    //   //   var imgWrap = this.parentElement;
    //   //   parentImg.removeChild(imgWrap);
    //   // });
    // }
  }
}


export default dropDown