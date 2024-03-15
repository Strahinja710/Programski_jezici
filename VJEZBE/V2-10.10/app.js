// TIPOVI PODATAKA

let firstNumber = 50
let secondNumber = 30

// prvi način:

let sum = firstNumber + secondNumber
console.log("Ovo je prvi način:", sum)

// drugi način:

console.log("Ovo je drugi način:", firstNumber+secondNumber)

// IF PROVJERA USLOVA
// razlika između =; ==; ===

let age = 18

if(age===18){
    console.log("Ima tačno 18 godina!")
}
else {console.log("Nema tačno 18 godina!")}


let age1 = 11

if(age1 >=18){
    console.log("Veće ili jednako od 18")
}else if (age1 >=15){
    console.log("Veće ili jednako od 15")
} else {
    console.log("Manje od 15")
}

// FOR PETLJA

for(let i = 0; i < 12; i++){
console.log("Ovo je spoljna petlja", i)}
for(let j = 0; j < 5; j++){
    console.log("Ovo je unutrašnja petlja", j)
}

// deklarisanje brojača, često se naziva sa i
// petlja se vrši sve dok je uslov tačan
// izmjena brojača, povećanje za 1

// {} block scope

// SWITCH - CASE

let role = "Iser"

switch (role) {
    case "Admin":
        console.log("Ovo je admin")
            break
        case "User":
            console.log("Ovo je user")
            break
        default:
            console.log("Izvršava se svakako")
}

// TRUTHY ILI FALSY
// Falsy: 0, null, undefiend, prazan string

let data = 5

if(data){
    console.log("Tačan uslov")
}else{
        console.log("Netačan uslov")
    }
