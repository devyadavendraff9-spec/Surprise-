let data = JSON.parse(localStorage.getItem("studyData")) || [];

const tableBody = document.getElementById("tableBody");

function saveData() {
  localStorage.setItem("studyData", JSON.stringify(data));
}

function renderTable() {
  tableBody.innerHTML = "";

  data.forEach((row, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td><input value="${row.subject}" oninput="update(${index}, 'subject', this.value)"></td>
      <td><input value="${row.topic}" oninput="update(${index}, 'topic', this.value)"></td>
      <td><input value="${row.hours}" oninput="update(${index}, 'hours', this.value)"></td>
      <td><input type="date" value="${row.deadline}" oninput="update(${index}, 'deadline', this.value)"></td>
      <td><button onclick="deleteRow(${index})">❌</button></td>
    `;

    tableBody.appendChild(tr);
  });

  saveData();
}

function addRow() {
  data.push({ subject: "", topic: "", hours: "", deadline: "" });
  renderTable();
}

function deleteRow(index) {
  data.splice(index, 1);
  renderTable();
}

function update(index, field, value) {
  data[index][field] = value;
  saveData();
}

renderTable();
