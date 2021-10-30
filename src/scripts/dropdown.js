class dropDown {
  constructor (parent, ingredients) {
    this.parent = parent
    this.ingredients = ingredients

  }

  createLi() {
    const items = Object.keys(this.ingredients)
    items.forEach(item => {
      let li = document.createElement("li")
      // li.setAttribute('hidden', true)
      li.innerHTML = item;
      li.classList = 'item'
      this.parent.appendChild(li)
    });
  }
    
  createEventListener() {
    // next step add event listener on ul
    const items = document.querySelectorAll(".item");
    items.forEach(child => child.classList.remove('open'));
  }
}

// event listeners on list items, add attribute for hidden for each li. 
// hidden 
export default dropDown