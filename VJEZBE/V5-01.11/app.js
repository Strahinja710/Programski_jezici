// NIZOVI

const niz = [1,2,3,4,5,6,7]

// push - dodaje element na kraj niza
const rezultat = niz.push(8) // vraca duzinu niza
console.log("niz:", niz)
console.log("duzina niza:", rezultat)

// pop - uklanja posljednji element niza
const rezultat1 = niz.pop()
console.log("rezultat:", rezultat1); // uklonjeni element
console.log("niz", niz);

//unshift operacija - dodaje na prvo mjesto
const rezultat2 = niz.unshift(1) // nova duzina niza
console.log("rezultat:", rezultat2);
console.log("niz:", niz);

// shift - uklanja prvi element niza
const rezultat3 = niz.shift() // uklonjeni element
console.log("niz:", niz);
console.log("rezultat:", rezultat);


const ucenici = ["Petar", "Marko", "Vanja", "Jelena"]
// napraviti fuknciju koja dodaje novog djaka u niz na posljednje mjesto = jedan parametar *ime djaka)

const dodajUcenika = (ime) => {
ucenici.push(ime)
}
// poziv fukcnije
 dodajUcenika("Milan")

// console.log("Ucenici:", ucenici);

// indexOf - vraca prvi element na koji naidje, ostalo ne gleda
const ucenici1 = ["Petar", "Marko", "Vanja", "Jelena", "Petar"]
console.log(ucenici1.indexOf("Petar"))

// napravite funkciju da vrati da li ima studenta u nizu
const imaLiUcenika = (ime) => {
    if (ucenici.indexOf(ime) > -1) {
        return "DA"
         } else {
        return "NE"
        }
    }

console.log(imaLiUcenika("Milena"));


//slice - odsjecanje

const niz1 = ["Petar", "Marko", "Vanja", "Jelena", "Mile"]

const niz2 = niz1.slice(0,2) // ne mijenja originalni niz, samo vraca novi

console.log("niz2:", niz2);
console.log("niz", niz1)



const brojevi = [0, 1, 2, 3, 4, 5, 6]
const vratiDioNiza = (niz, brojDoKojegSjecem) => {

if (Array.isArray(niz)) { // Array.isArray - provjerava da li je nesto niz
return niz.slice(0, brojDoKojegSjecem)
} else {
return "Prvi parametar nije niz"
}
}

const sjeceniDio = vratiDioNiza(brojevi, 3)
console.log("sjeceni dio:", sjeceniDio);


const brojevi1 = [0, 1, 2, 3, 4, 5, 6]

const kvadriraniBrojevi1 = []
for (let i = 0; i < brojevi1.length; i++) {
kvadriraniBrojevi.push(brojevi1[i] * brojevi1[i])
}

console.log("kvadriranibrojevi:", kvadriraniBrojevi);


// map - isto k'o ovo iznad, samo lakse
const brojevi2 = [0, 1, 2, 3, 4, 5, 6]
const kvadriraniBrojevi = brojevi2.map((el) => {
return el * el
})

console.log("kvadriran brojevi:", kvadriraniBrojevi);


// includes - provjerava da li niz sadrzi neki element

const brojevi3 = [0, 1, 2, 3, 4, 5, 6]
console.log(brojevi3.includes(2));


// filter - izdvaja(filtrira) elemente koji ispunjavaju odredjeni uslov, i od njih pravi novi niz
//prolazi kroz cijeli niz 
const brojevi4 = [5, 20, 31, 9, 6, 40, 0]

const filtriraniNiz = brojevi4.filter((el) => {
return el > 10
})

console.log("filtriraniNiz:", filtriraniNiz);
