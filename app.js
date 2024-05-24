let water = "300ml of water,"
let eggs = "3 eggs,"
let yeast = "7 tea spoons of yeast,"
let salt = "1 spoon of salt."
let flour = "490gr of flour,"
let mass = "To make the mass we must mix: "

const makeDough=(mass, eggs, flour, water, salt)=>{
    let mixedMass = mass + eggs + " " + flour + " " + water + " " + salt;
    return mixedMass;
}
 
console.log(makeDough(mass, eggs, flour, water, salt));

// function makePizza(){

// }

// function deliverOrder(){

// }

// function app(){
//     makePizza();
//     deliverOrder(pizza);
// }