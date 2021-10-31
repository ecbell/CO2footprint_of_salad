class dropDown {
  constructor (parent, ingredients) {
    this.parent = parent
    this.ingredients = ingredients

    this.parent.addEventListener('mouseenter', this.handleEnter.bind(this));
    this.parent.addEventListener('mouseleave', this.handleLeave.bind(this));
    document.getElementById("dropdown").addEventListener("click", this.clickEvent.bind(this));
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
    // console.log(e.target.innerText)
    let link = document.createElement("img");
    let carbonPerItem = document.createElement("p")
    carbonPerItem.className = "CO2-ticker"
    carbonPerItem.innerHTML = this.ingredients[e.target.innerText].averageCO2;
    // console.log(carbonPerItem.innerHTML)
    link.src = this.ingredients[e.target.innerText].img;
    document.getElementsByClassName('image')[0].appendChild(carbonPerItem);
    document.getElementsByClassName('image')[0].appendChild(link);
  }
}


export default dropDown