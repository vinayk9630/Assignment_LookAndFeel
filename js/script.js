// Ensure the external libraries are loaded as before
const scriptChart = document.createElement('script');
scriptChart.src = 'https://cdn.jsdelivr.net/npm/chart.js';
document.head.appendChild(scriptChart);

const scriptD3 = document.createElement('script');
scriptD3.src = 'https://d3js.org/d3.v6.min.js';
document.head.appendChild(scriptD3);

scriptChart.onload = () => {
    const ctxPerformance = document.getElementById('performanceComparisonChart').getContext('2d');
    const performanceComparisonChart = new Chart(ctxPerformance, {
        type: 'line',
        data: {
            labels: ['Model 1', 'Model 2', 'Model 3'],
            datasets: [{
                label: 'Sensitivity',
                data: [95, 88, 90],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }, {
                label: 'Specificity',
                data: [85, 90, 88],
                borderColor: 'rgb(255, 99, 192)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};

scriptD3.onload = () => {
    const svg = d3.select("#timeSeriesVisualization").append("svg")
        .attr("width", 800)
        .attr("height", 300)
        .style("background", "#fff");

    // Simulated EEG data
    const eegData = Array.from({ length: 100 }, () => Math.random() * 100);

    const xScale = d3.scaleLinear()
        .domain([0, eegData.length])
        .range([0, 800]);

    const yScale = d3.scaleLinear()
        .domain([0, 100])
        .range([300, 0]);

    const line = d3.line()
        .x((d, i) => xScale(i))
        .y(d => yScale(d))
        .curve(d3.curveNatural);

    svg.append("path")
        .datum(eegData)
        .attr("fill", "none")
        .attr("stroke", "blue")
        .attr("stroke-width", 2)
        .attr("d", line);
};

// Load Chart.js library and create a chart
// Load Chart.js library and create a chart
document.addEventListener('DOMContentLoaded', function () {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    document.head.appendChild(script);

    script.onload = function () {
        const ctx = document.getElementById('healthDataChart').getContext('2d');
        const healthDataChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
                datasets: [{
                    label: 'Number of Patients Covered',
                    data: [200, 250, 300, 350, 400, 450, 500],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    fill: true
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    };
});

//register 
/// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('modalBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// Get the toggle link
var formToggle = document.getElementById('formToggle');

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// Get the forms and the toggle link
var registerForm = document.getElementById('registerForm');
var loginForm = document.getElementById('loginForm');
var toggleLink = document.getElementById('toggleLink');

// Toggle forms when the 'Sign up here' link is clicked
toggleLink.onclick = function (event) {
    event.preventDefault();  // Prevent the default anchor link behavior
    registerForm.style.display = 'block'; // Show the register form
    loginForm.style.display = 'none'; // Hide the login form
    formToggle.style.display = 'none'; // Hide the toggle message
}




