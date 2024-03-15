// FUNKCIJE

function prvaFunkcija() {
  console.log("Printam prvu funkciju");
}

const drugaFunkcija = function () {
  console.log("Printam drugu funkciju");
};

// ARROW
const trecaFunkcija = () => {
  console.log("Printam trecu funkciju");
};

prvaFunkcija();
drugaFunkcija();
trecaFunkcija();

/////////////////////////////////

const add = (num1, num2) => {
  console.log("num1: ", num1);
  console.log("num2: ", num2);
  console.log(num1 + num2);
};

add(4, 7);

/////////////////////////////////

const funkcijaBezArgumenta = () => {
  console.log("Ja nemam argumente");
};

funkcijaBezArgumenta();

/////////////////////////////////

let ukupnoBodova = 0;
const obracunajBodove = (kol1, kol2) => {
  return kol1 + kol2;
};

ukupnoBodova = obracunajBodove(20, 30);

console.log("ukupnoBodova", ukupnoBodova);

/////////////////////////////////

const daLiJePunoljetno = (godine) => {
  if (godine >= 18) {
    return true;
  } else {
    return false;
  }
};

console.log(daLiJePunoljetno(15));

/////////////////////////////////

const vratiPunoIme = (ime, prezime) => {
  return ime + "" + prezime;
};

console.log(vratiPunoIme("Strahinja", "Ostojic"));

// CALLBACK FUNKCIJA

const izvrsiOperaciju = (broj1, broj2, operacija) => {
  return operacija(broj1, broj2);
};

const saberi = (prviSabirak, drugiSabirak) => {
  return prviSabirak + drugiSabirak;
};

const rezultat = izvrsiOperaciju(5, 6, saberi);

console.log(rezultat); //11

