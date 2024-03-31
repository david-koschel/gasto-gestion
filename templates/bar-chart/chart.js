document.addEventListener("DOMContentLoaded", () => {
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/chart.js";
    script.onload = () => document.dispatchEvent(new Event("chart-script-loaded"));
    document.body.appendChild(script);
});

function loadChart(labels, smallLabels, data) {
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

    const ctxSmall = ctx.cloneNode(true);
    const container = document.getElementById('chart-container');
    container.appendChild(ctxSmall);

    new Chart(ctxSmall, {
        type: 'bar',
        data: {...chartData, labels: smallLabels},
        options: {
            indexAxis: 'y',
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    ctx.classList = "d-none d-sm-block";
    ctxSmall.classList = "d-sm-none";
}
