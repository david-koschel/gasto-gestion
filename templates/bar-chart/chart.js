const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/chart.js";
script.onload = () => document.dispatchEvent(new Event("chart-script-loaded"));
document.body.appendChild(script);


function loadChart(labels, data) {
    const ctx = document.getElementById('bar-chart');
    Chart.defaults.color = '#fff';

    const chartData = {
        labels: labels,
        datasets: [{
            showLabel: false,
            data: data,
            backgroundColor: ['#BCEF7D', '#54B42E', '#417324']
        }],
    };

    new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}
