
// 5 METTODA ZA REQUESTE
// GET - dobijanje podataka sa servera
// POST - slanje podataka sa serrvera
//DELETE - BRISANJE PODATAKA SA ....
//PUT - UPDATE PODATAKA, mijenja čitav podatak
//PATCH - update podataka, mijenja samo dijelove podataka


//https://jsonplaceholder.typicode.com/album

// kada u fetchu ne naznačimo metodu, podrazumijevana metoda je GET


//promise
/*
const albumFech = () => {

fetch ('https://jsonplaceholder.typicode.com/albums')
.then(serverResponse=> serverResponse.json())
.then(jsonData=> console.log(jsonData))
.catch(err=> console.log(err.message))

}

albumFech()
*/

//ASYNC-AWAIT

/*
const asyncFetch = async() => {
    console.log("Početak")
     const serverResponse = await fetch ('https://jsonplaceholder.typicode.com/albums')

    const jsonData = await serverResponse.json()
    console.log(jsonData);
    console.log("Kraj")
}

asyncFetch()*/
//prvo izvrsi prvi log, pa obda asinhronu funckiju pa kraj

const asyncFetch = async() => {
    
     const serverResponse = await fetch ('https://jsonplaceholder.typicode.com/albums')
    //const serverResponse = await fetch ('https://jsonplaceholder.typicode.com/albums/10') ako ocemo samo jedan album npr. 10. album
    const jsonData = await serverResponse.json()
    console.log(jsonData.slice(0,10));
    

} //klikom na dugme da se pojave podaci, button se nalazi u html-u