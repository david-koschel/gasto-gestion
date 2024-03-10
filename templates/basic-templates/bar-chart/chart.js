const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/chart.js";
script.onload = () => loadChart();
document.body.appendChild(script);


function loadChart() {
    const ctx = document.getElementById('bar-chart');
    Chart.defaults.color = '#fff';

    const data = {
        labels: ['Lorem', 'impsum', 'Lorem', 'impsum', 'Lorem', 'impsum'],
        datasets: [{
            showLabel: false,
            data: [200, 400, 300, 400, 500, 460],
            backgroundColor: ['#BCEF7D', '#54B42E', '#417324']
        }],
    };

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    });
}
