class carbonCounter {
  constructor(parent, ingredients) {
    this.ingredients = ingredients;
    this.parent = parent;

    document.getElementById("dropdown").addEventListener('click', this.handleclick.bind(this));
  }

  handleclick(e) {
    if (e.currentTarget !== e.target) {
      this.ingredients[e.target.innerText].averageCO2;
      let clickImage = document.querySelector(".image")

      document.getElementsByClassName('image')[0].appendChild(carbonPerItem);
      document.getElementsByClassName('image')[0].appendChild(link);
    }
  }

}

export default carbonCounter