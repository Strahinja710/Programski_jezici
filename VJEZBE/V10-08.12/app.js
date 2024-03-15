const fetchStudents = async () => {
  const response = await fetch("http://localhost:4000/students");
  const data = await response.json();

  let tableB = document.getElementById("tableBody"); // selektuje table body

  console.log(tableB);

  data.forEach((student) => {
    let row = `
    <tr>
        <td>${student.name}</td>
        <td>${student.lastName}</td>
        <td>${student.age}</td>
        <td>${student.city}</td>
    </tr>`;

    tableB.innerHTML = tableB.innerHTML += row;
  });
};

const postStudents = async () => {
  //preuzimanje podataka iz input polja
  const data = {
    id: Math.random(),
    name: document.getElementById("nameInput").value,
    lastname: document.getElementById("lastNameInput").value,
    age: document.getElementById("ageInput").value,
    city: document.getElementById("cityInput").value,
  };

  // kod za slanje podataka na server
  try {
    const response = await fetch("http://localhost:4000/students", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseJSON = await response.json();
    console.lpg("responseJSON", responseJSON);
  } catch (err) {
    console.log(err);
  }
  console.log(data);
};

fetchStudents();

// json-server --watch db.json --port 4000
