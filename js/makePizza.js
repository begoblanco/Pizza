const eggs = "3 eggs,";
const yeast = "7 tea spoons of yeast,";
const salt = "1 spoon of salt.";
const flour = "490gr of flour,";
const mass = "To make the mass we must mix: ";
const water = "300ml of water,";

//const ingredients = [" Tomato sauce", " Mozzarella", " Pepperoni", "Olives"];

//let olivesQuantity = 4;
let bakeTime = 10;

function makeDough() {
  let mixedMass =
    mass + eggs + " " + yeast + " " + flour + " " + water + " and " + salt;
  return mixedMass;
}

function addIngredients(ingredients, olivesQuantity) {
  ingredients.forEach((ingredient) => {
    if (ingredient === "Olives") {
      if (olivesQuantity >= 1) {
        console.log("Add " + olivesQuantity + " " + ingredient);
      } else {
        console.log("No olives pizza " + ingredient);
      }
    } else {
      console.log("Add" + ingredient);
    }
  });
}

export function makePizza(ingredients, olivesQuantity) {
  console.log(makeDough());
  console.log("let the dough rest for 45 min");
  addIngredients(ingredients, olivesQuantity);
  //bake();
  //deliverOrder();
}

export function bake() {
  console.log("Bake pizza for: " + bakeTime + " min");
  console.log("Pizza ready!");
}

export function deliverOrder() {
  console.log("Pizza Delivered");
}

// console.log(makeDough());
// addIngredients(ingredients, olivesQuantity);
// bake()
