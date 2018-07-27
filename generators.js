"use strict"
const generatorButton = document.getElementById("generator");

function* numberGenerator() {
    let index = 0;

    while(index < 4) {
        yield index++;
    }
}

let gen = numberGenerator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log("Generators keep the state");
console.log(gen.next());
console.log(gen.next());
