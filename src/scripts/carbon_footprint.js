class carbonFootprint {
  constructor(ingredients) {
    this.ingredients = ingredients

    this.img.addEventListener("mouseover", this.mouseOverImage.bind(this));

  }

  mouseOverImage() {
    const items = Object.keys(this.ingredients)
    items.forEach(item => {
      let li = document.createElement("li")
      li.innerHTML = item;
      li.classList = 'item'
      this.parent.appendChild(li)
    });
  }

}

export default carbonFootprint

// createLi() {
//   const items = Object.keys(this.ingredients)
//   items.forEach(item => {
//     let li = document.createElement("li")
//     li.innerHTML = item;
//     li.classList = 'item'
//     this.parent.appendChild(li)
//   });
// }

// handleLeave() {
//   const items = document.querySelectorAll(".item");
//   items.forEach(child => child.classList.remove('open'));
// };

// handleEnter() {
//   const items = document.querySelectorAll(".item");
//   items.forEach(child => child.classList.add('open'));
// };


// clickEvent(e) {
//   console.log(e.target.innerText)
//   let link = document.createElement("img");
//   link.src = this.ingredients[e.target.innerText].img;
//   console.log(link.src)
//   document.getElementsByClassName('image')[0].appendChild(link);
// }