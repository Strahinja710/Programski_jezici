//SINHRONO LOGOVANJE
// log 1
// log 2
// log 3

console.log("Prvi log");
console.log("Drugi log");
console.log("Treći log");

// ASINHRONO LOGOVANJE
// log 1
// asinh log 2
// log 3
// log 4
// CALL STACK
// API STACK asgne log
// cons
// log 1
// log 3
// log 4
// log 2

console.log("Prvi log");

setTimeout(() => {
  console.log("Drugi log");
}, 2000);

console.log("Treći log");

// SA FUNKCIJAMA

const prvaF = function () {
  console.log("prva");
};

const drugaF = function () {
  setTimeout(() => {
    console.log("druga");
  }, 2000);
};

const trećaF = function () {
  console.log("treća");
};

prvaF();
drugaF();
trećaF();

// CALLBACK ADSINHRONA FUNKCIJA

const prvaFC = function () {
  console.log("prva");
};

const drugaFC = function (callback) {
  setTimeout(() => {
    console.log("druga");
    callback();
  }, 2000);
};

const trecaFC = function () {
  console.log("treća");
};

prvaFC();
drugaFC(trecaFC());

let promise1 = new Promise((resolve, reject) => {
  let bodovi = 56;
  if (bodovi > 50) {
    resolve("Student položio!");
  } else {
    reject("Student nije položio!");
  }
});

promise1
  .then((res) => console.log(res)) // ako je sve ok, RESOLVE
  .catch((err) => console.log(err)); // ako nešto nije ok, REJECT

console.log("Prije fetcha");
fetch("https://jsonplaceholder.typicode.com/") // fetch sa servera
  .then((data) => data.json()) // ako dobijem podatke, pretvori ih u js-objekte
  .then((newData) => console.log(newData)) // prikazi u konzoli korisnike
  .catch((err) => console.log(err)); // prikazi u konzoli grešku

console.log("Poslije fetcha");
