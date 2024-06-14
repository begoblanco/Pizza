import promptSync from "prompt-sync";
import { pizzas } from "./js/pizzas.js";
import { makePizza, deliverOrder, bake } from "./js/makePizza.js";

const prompt = promptSync();

function findPizza(pizzaName) {
  for (let i = 0; i < pizzas.length; i++) {
    if (pizzas[i].name.toLowerCase() === pizzaName.toLowerCase()) {
      return pizzas[i];
    }
  }
  return null;
}

function order() {
  const pizzaName = prompt("And your pizza is... : (pepperoni, margarita or hawaiian)  ");
  const pizza = findPizza(pizzaName);

  if (pizza !== null) {
    const olivesQuantity = parseInt(prompt("How many olives do you want?: "), 10);
    console.log(`Pizza ${pizza.name} in preparation`);
    makePizza(pizza.ingredients, olivesQuantity);
    console.log(`Adding ${olivesQuantity} olives`);
    bake();
    deliverOrder();
  } else {
    console.log("Not valid");
  }

  // return { pizzaName, olivesNumber };
}

order();

// const orderedPizza = order();
// makePizza(orderedPizza.pizzaName, orderedPizza.olivesNumber);
// deliverOrder();
