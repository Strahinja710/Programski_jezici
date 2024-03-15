const ime = "Petar Petrovic";
console.log("Duzina imena: ", ime.length); // 14
// ubraja i prazan prostor

// SLICE za odsjecanje dijela stringa
console.log(ime.slice(0, 5));

const dioImena = ime.slice(6, ime.length);

console.log(ime);
console.log(dioImena);

// REPLACE
const novoIme = ime.replace(" ", "_");
console.log("Novo ime: ", novoIme);
console.log("Orginal: ", ime);

// SUBSTRING
const subDio = ime.substring(0, 6);
console.log("Studio: ", subDio);

// TOUPPERCASE
const velikoIme = ime.toUpperCase();
console.log("velikoIme: ", velikoIme);

console.log("Orginal: ", ime);

//
const ime1 = "Petar";
const ime2 = "PEtAr";

console.log(ime1.toUpperCase() === ime2.toUpperCase());

////////////////////////////////////////

const broj = 100;
const brojText = broj.toString();

console.log(typeof broj); // broj
console.log(typeof brojText); // text

// CEIL - na veći broj
const realni = 10.15;
const noviBroj = Math.ceil(realni);
console.log("Novi broj: ", noviBroj);

// FLOOR - na manji broj
const manjiBroj = Math.floor(realni);
console.log("manji broj: ", manjiBroj);

// SQRT
const broj1 = 100;
const korijen = Math.sqrt(broj1);
console.log("Korijen: ", korijen);

console.log(Math.PI);

// NaN - Not a Number
let nekiBroj = 111;
console.log(!isNaN(nekiBroj));
