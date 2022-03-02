const agregarCampo = document.createElement("input");
const btnCrearCampo = document.querySelector("#btn-crear-campo");
const form = document.querySelector("#form");
function agregar() {
   document.createElement("input");
}
btnCrearCampo.onclick = function () {
   agregar();
   form.appendChild(agregarCampo);
};

function deneter(dps){
   dps.preventDefault();
}

const nombreCampo = Array.from(document.querySelectorAll("#nombre-campo"));
const valorCampo = Array.from(document.querySelectorAll("#valor-campo"));
const contenedorBarChart = document.querySelector("#bar-chart").getContext("2d");

const configBar = {
   type: "bar",
   data: [
      {
         labels: nombreCampo,
      },
      {
         datasets: valorCampo,
      },
   ],
}

const barChart = new Chart(contenedorBarChart,configBar)

const btnCrearChart = document.querySelector("#btn-crear");
btnCrearChart.onclick = function () {
   barChart;
   deneter;
}