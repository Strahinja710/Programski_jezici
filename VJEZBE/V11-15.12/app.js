const fetchStudents = async () => {
    const response = await fetch("http://localhost:4000/students")
    const data = await response.json()

    let tableB = document.getElementById("tableBody") // selektuje table body 


    console.log(data);

    data.forEach((student) => {
        console.log(student)
        let row = `
        <tr>
        <td>${student.name}</td>
        <td>${student.lastName}</td>
        <td>${student.age}</td>
        <td>${student.city}</td>
        <td>
            <button onClick={deleteStudents(${student.id})}>Delete</button>
            <button onClick={selectStudents(${student.id})}>Update</button>
        </td>
        </tr>
        `
        tableB.innerHTML += row
    })
}

fetchStudents()

// preuzimanje podataka iz input polja
const postStudents = async () => {

    const data = {
        id: Math.random(),
        name: document.getElementById("nameInput").value,
        lastName: document.getElementById("lastNameInput").value,
        age: document.getElementById("ageInput").value,
        city: document.getElementById("cityInput").value,
    }

    // kod za slanje podataka na server

    try {
        const response = await fetch("http://localhost:4000/students", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const responseJson = await response.json()
        console.log("responseJson", responseJson);
    } catch (err) {
        console.log(err);
    }
}

const deleteStudents = async (studentId) => {
    // DELETE
    // id korisnika kog brisemo

    console.log("Pokrenuta funkcija");

    try {
        const response = await fetch(`http://localhost:4000/students/${studentId}`, {
            method: "DELETE"
        })

        console.log(response);
    } catch (err) {
        console.log(err);
    }
}

const selectStudents = async (studentId) => {
    try {
        const response = await fetch(`http://localhost:4000/students/${studentId}`)
        const data = await response.json()

        console.log("Selektovani student je :", data);

        document.getElementById("nameUpdate").value = data.name
        document.getElementById("lastNameUpdate").value = data.lastName
        document.getElementById("ageUpdate").value = data.age
        document.getElementById("cityUpdate").value = data.city
        document.getElementById("idUpdate").value = data.id

    } catch (err) {
        console.log(err);
    }
}

const updateStudents = async (studentId) => {

try{
    const newData = {
        name: document.getElementById("nameUpdate").value,
        lastname: document.getElementById("lastNameUpdate").value,
        age: document.getElementById("ageUpdate").value,
        city: document.getElementById("cityUpdate").value,
        id: document.getElementById("idUpdate").value
    }

    let id = document.getElementById("idUpdate").value

    const response = await fetch(`http://localhost:4000/students/${id}`,{
        method: "PUT",
        body: JSON.stringify(newData),
        headers: {
            "Content-Type": "application/json"
        }
    })


    //console.log("Novi podaci", newData);
    console.log("response", response)
}catch(err){console.log(err)}
}

// json-server --watch db.json --port 4000