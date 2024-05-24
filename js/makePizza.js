let water = "300ml of water,"
let eggs = "3 eggs,"
let yeast = "7 tea spoons of yeast,"
let salt = "1 spoon of salt."
let flour = "490gr of flour,"
let mass = "To make the mass we must mix: "

let ingredients = ["Salsa de tomate", " Mozzarella"];

function makeDough(){
    let mixedMass = mass + eggs + " " + flour + " " + water + " and " + salt;
    return mixedMass;
}
 
function addToDough(){
    let addedIngredients = "Now we must add to the mass: " + ingredients;
    return addedIngredients;
}

function bake(){

}

console.log(makeDough());
console.log(addToDough());