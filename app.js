import promptSync from "prompt-sync";

import {makePizza} from "./js/makePizza.js"
import {deliverPizza} from "./js/makePizza.js"

function app(){
    const prompt = promptSync();
    const pizzaName = prompt("And your pizza is... :");

    let result = makePizza(pizzaName);

}

app();


// function makePizza(){

// }

// function deliverOrder(){

// }

// function app(){
//     makePizza();
//     deliverOrder(pizza);
// }