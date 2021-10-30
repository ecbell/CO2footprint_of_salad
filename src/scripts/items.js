
const ingredients = {
  'avocado': {
    'averageCO2': '423.18 gCO2e',
    'serving': '1 avocado'
  },

  'hard cheese': {
    'averageCO2': '12 kgCO2e',
    'serving': '1 kg'
  },

  'tofu': {
    'averageCO2': '0.72kg CO2e',
    'serving': '1 kg'
  }
};




export default ingredients

// console.log(ingredients['avocado'])
// console.log(Object.keys(ingredients)[0])



// const ingredientCreator = (ingredients) => {
//   const ingNames = Object.keys(ingredients)

//   ingNames.forEach(ingredient => {
//     const li = document.createElement("li");
//   })
// }

// const attachIng = () => {
//   const dropDownList = document.querySelector("#salad-dropdown");
//   const links = ingredientCreator(ingredients);
//   links.forEach(link => dropDownList.appendChild(link));
// };

// attachIng();
