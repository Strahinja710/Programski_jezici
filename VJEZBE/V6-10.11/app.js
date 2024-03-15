// OBJECT (instanca)

const auto = {
marka: "Volvo",
brojVrata: 4,
kubikaza: 2200,
tip: "limuzina",
sviraj: function () {
console.log("beep beep");
},
 kreni: function () {
console.log("Automobil krece...");
}
}

// Printanje objekta u konzoli
console.log(auto);

// Pristupanje pojedinacnom atributu (naziv objekta.atribut)
console.log("Kubikaza auta je ", auto.kubikaza);
console.log("Nas auto ima vrata ", auto.brojVrata);

const provjeraKlase = (automobil) => {
if(!automobil.kubikaza) return "automobil nema kubikazu" 
// ! - znak negacije
 if (automobil.kubikaza > 2200) return "luksuzna klasa"
return "standardna klasa"
}

console.log("Provjera kubikaze: ", provjeraKlase(auto));


// Class - šablon za kreiranje objekta
class Animal {
constructor(breed, hair, numOfLegs) {
this.breed = breed
this.hair = hair
this.numOfLegs = numOfLegs
}

makeSound(sound) {
console.log(this.breed, "makes ", sound, " sound!")
}
}

const dog = new Animal("husky", true, 4) // New poziva konstruktor
console.log("nas cuko:", dog)
const cat = new Animal("persian", true, 4)
console.log("nasa maca:", cat)
const elephant = new Animal("africki:", true, 4)
console.log("nas slon:", elephant)

dog.makeSound("bark")


const user1 = {
name: "Petar",
age: 25
}

const user2 = {
name: "Petar",
age: 25
}

const user3 = user2

console.log("Da li su isti objekti :", user3 == user2); 

user2.name = "Marko"

console.log(user2);
console.log(user3);


const auto1 = {
tip: "mercedes",
osiguranje: {
datumIsteka: "1.1.2024",
polisa: "premium",
iznos: 10000
},
godiste: 2012,
prethodniVlasnici: ["Petar", "Milan", "Marko"]
}

console.log("Poslednji vlasnik: ", auto.prethodniVlasnici[auto.prethodniVlasnici.length - 1]);
// Ispisuje posljednjeg vlasnika iz niza


// Izmjena polise na standard
// Ne printati čitav objekat, nego samo atribut koji je potreban
console.log("Stari", auto.osiguranje.polisa);

auto.osiguranje.polisa = "standard"

console.log("Novi", auto.osiguranje.polisa);

