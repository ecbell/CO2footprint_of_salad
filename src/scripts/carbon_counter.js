class carbonCounter {
  constructor(parent, ingredients) {
    this.ingredients = ingredients;
    this.parent = parent;
    this.counter = 0

    document.getElementById("dropdown").addEventListener('click', this.handleclick.bind(this));
  }

  handleclick(e) {
    if (e.currentTarget !== e.target) {
      // this.ingredients[e.target.innerText].averageCO2;
      // let clickImage = document.querySelector(".image")
      // console.log(this.counter)
      // console.log(this.ingredients[e.target.innerText].averageCO2)
      document.querySelector("#carbon-counter").innerHTML = this.counter
      this.counter += this.ingredients[e.target.innerText].averageCO2
      // document.querySelector(".carbon-counter").innerHTML = counter
      console.log(this.counter)
    }
  }

}

export default carbonCounter