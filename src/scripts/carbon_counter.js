class carbonCounter {

  constructor(parent, ingredients) {
    this.ingredients = ingredients;
    this.parent = parent;
    this.counter = 0

    document.querySelector("#carbon-counter").innerHTML = this.counter
    document.getElementById("dropdown").addEventListener('click', this.handleclick.bind(this));
  }

  handleclick(e) {
    if (e.currentTarget !== e.target) {
      let count = this.counter += this.ingredients[e.target.innerText].averageCO2
      document.querySelector("#carbon-counter").innerHTML = count
    }
  }

}

export default carbonCounter