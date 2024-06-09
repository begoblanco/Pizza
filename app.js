import promptSync from "prompt-sync";

import { makePizza } from "./js/makePizza.js";
import { deliverOrder } from "./js/makePizza.js";

function order() {
  const prompt = promptSync();
  const pizzaName = prompt("And your pizza is... :");
  const olivesNumber = parseInt(prompt("How many olives do you want?: "), 10);
  return { pizzaName, olivesNumber };
}

const orderedPizza = order();
makePizza(orderedPizza.pizzaName, orderedPizza.olivesNumber);
