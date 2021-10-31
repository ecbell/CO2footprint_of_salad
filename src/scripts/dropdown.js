class dropDown {
  constructor (parent, ingredients) {
    this.parent = parent
    this.ingredients = ingredients

    this.parent.addEventListener('mouseenter', this.handleEnter.bind(this));
    this.parent.addEventListener('mouseleave', this.handleLeave.bind(this));
    // document.getElementById("dropdown").addEventListener("click", this.clickEvent.bind(this));
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


    clickEvent() {
      let link = document.createElement("img");
      link.src = this.ingredients[item].img;
      li = document.querySelector("#item")
      li.appendChild(link)
    }
    // add Eventlister for click, and generate new img tag and appendchild 


    // append child for every time someone clicks on an ingredient. 
    // From that ingredient and take it's image link
    // create a new image tag , add new src 

}


export default dropDown