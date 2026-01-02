window.data = [];
let chart;

function addRow() {
  data.push({ h: 0 });
  render();
}

function render() {
  const rows = document.getElementById("rows");
  rows.innerHTML = "";

  let total = 0;

  data.forEach((r, i) => {
    total += Number(r.h || 0);
    rows.innerHTML += `
      <tr>
        <td><input></td>
        <td><input></td>
        <td><input oninput="data[${i}].h=this.value; render()"></td>
        <td><input type="date"></td>
        <td onclick="data.splice(${i},1);render()">❌</td>
      </tr>
    `;
  });

  ai.innerText =
    total < 2 ? "You need to study more 📖"
    : total < 5 ? "Good pace 👍"
    : "Excellent discipline 💪";

  drawChart(total);
}

function drawChart(val) {
  if (chart) chart.destroy();
  chart = new Chart(document.getElementById("chart"), {
    type: "bar",
    data: {
      labels: ["Study Hours"],
      datasets: [{ data: [val] }]
    }
  });
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}
