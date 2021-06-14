document.addEventListener("DOMContentLoaded", function() {
    // Template Literal
// function favMovies(name = "Tommy Wiseau", movie = "The Room") {
//     console.log(`Mi nombre es ${name} and my favorite movie is ${movie}`);

// }
// favMovies("Ready Player One");
// favMovies("Jeff", "Ready Player One");
// favMovies();

// Arrow Functions
let favMovies = (name = "Tommy Wiseau", movie = "The Room") => console.log(`Mi nombre es ${name} and my favorite movie is ${movie}`)

favMovies(); 



let getFirstName = (fullName) => {
    console.log( fullName.split(" ", 1))
}
let getFirstNameConciser = (fullName) => console.log(fullName.split(" ", 1))

getFirstName("Tommy Wiseau")
getFirstNameConciser("Mike Wazowski")


let doMath = (x,y) => { return{
    x:x,
    y:y,
    product: x * y,
    exponent: x ** y,
    
 }}   
 let results = doMath(5,4);
    console.log(`The product is ${results.product}, and exponent is ${results.exponent}`)


//     // Spread Syntax

    let arr = ["Paul", "Birmingham", "Kimchi"];
function someRandom (name, location, favFood) {
    console.log(`My name is ${name} im in ${location} and i like to eat ${favFood}`)
}
someRandom(...arr)

var yourName = "some"
function numberFive (parameter) {
    let someVariable = [...parameter];
    console.log (someVariable)
    for (let i = 0; i < someVariable.length; i++){
        console.log(someVariable[i])
    }
}

numberFive(yourName)

})