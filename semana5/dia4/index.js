

const contenedorBarChart = document.getElementById("#bar-chart").getContext("2d");

const barChart = new Chart(contenedorBarChart, {
    type: "bar",
    data: {
        labels: [
            "Lunes",
            "Martes",
            "Miercoles",
            "Jueves",
            "Viernes",
            "Sabado",
            "Domingo",
        ],

        datasets: [
            {
                label: "Numero de usuarios por dia",
                data: [20, 40, 10, 30, 20, 50, 30, 75],
                borderWidth: 3,
                borderColor: "#f01",
                backgroundColor: [
                    "#BD8A71",
                    "#704A38",
                    "#907365",
                    "#5F2E16",
                    "#D7B4A3",
                    "#431E0B",
                    "#96867E",
                ]
            },

        ],
    },
})

const containerDoughnutChart = document.getElementById("#doughnut-chart").getContext("2d");

const dataForChart = {
    labels: ['computadoras', 'celulares', 'refrigeradoras', 'parlantes'],
    datasets: [
        {
            label: "PRODUCTOS ELECTRONICOS",
            data: [100, 300, 520, 628],
            backgroundColor: ["#54BA98", "#1C9F8D", "#84DA88", "#8EB32A"],
        },
    ],
};

const config = {
    type: 'doughnut',
    data: dataForChart,
};
const doughnutChart = new Chart(containerDoughnutChart, config);


const containerLineChart = document.getElementById("#lineal-chart");
const configLineal = {
    type: "line",
    data: dataForChart,
};
const lineChart = new Chart(containerLineChart, configLineal);

const containerBubbleChart = document.getElementById("#bubble-chart");

dataForChart.datasets[0].data=[
    {
        x: 20,
        y: 30,
        r: 15,
    },
    {
        x: 40,
        y: 10,
        r: 10,
    },
];
const configBubble = {
    type: 'bubble',
    data: dataForChart,
};
const bubbleChart = new Chart(containerBubbleChart, configBubble);

const containerPolarChart = document.getElementById("#polar-chart");

dataForChart.datasets[0].data =[300,149,321,678];
const configPolar={
    type:"polarArea",
    data: dataForChart,
};
const polarChart = new Chart(containerPolarChart,configPolar);

const containerRadarChart = document.getElementById("#radar-chart").getContext("2d");
const configRadar={
    type:'radar',
    data: dataForChart,
}
const radarChart = new Chart(containerRadarChart, configRadar);

const containerScatterChart = document.getElementById("#scatter-chart").getContext("2d");
dataForChart.datasets[0].data=[
    {
        x: -10,
        y: 0,
      },
      {
        x: 0,
        y: 10,
      },
      {
        x: 10,
        y: 5,
      },
      {
        x: 0.5,
        y: 5.5,
      },
];
const configScatter ={
    type : "scatter",
    data: dataForChart,
}
const scatterChart = new Chart(containerScatterChart, configScatter);