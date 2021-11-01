// class carbonCounter {

//   constructor(parent, ingredients) {
//     this.ingredients = ingredients;
//     this.parent = parent;
//     this.counter = 0
//     this.numImages = 0

//     document.getElementById("dropdown").addEventListener('click', this.handleclick.bind(this));
//   }

//   handleclick(e) {
//     if (e.currentTarget !== e.target) {
//       this.numImages += 1
//       let count = this.counter += this.ingredients[e.target.innerText].averageCO2
//       let average = (count).toFixed(2)
//       document.querySelector("#carbon-counter").innerHTML = average + "g CO2e"
//     }
//   }

// }

// export default carbonCounter