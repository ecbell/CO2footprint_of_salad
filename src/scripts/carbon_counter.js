class carbonCounter {
  constructor(ingredients) {
    this.ingredients = ingredients

  }

  handleclick(e) {
    if (e.currentTarget !== e.target) {
      this.ingredients[e.target.innerText].averageCO2;

      document.getElementsByClassName('image')[0].appendChild(carbonPerItem);
      document.getElementsByClassName('image')[0].appendChild(link);
    }
  }

}

export default carbonCounter