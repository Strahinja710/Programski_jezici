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

fetchStudents();
