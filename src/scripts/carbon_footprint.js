class carbonFootprint {
  constructor(ingredients) {
    this.ingredients = ingredients

    // this.ingredients.addEventListener("mouseover", this.mouseOverImage.bind(this));
  }

  mouseOverImage(e) {
    const items = Object.keys(this.ingredients)
    let carbonPerItem = document.createClassList("div");
    carbonPerItem.className = "CO2-ticker"
    this.ingredients[e.target.innerText].img;

    document.getElementsByClassName('image')[0].appendChild(link);
    document.getElementsByClassName('averageCO2')[0].appendChild(link);
  }

  mouseOut() {

  }

}

export default carbonFootprint