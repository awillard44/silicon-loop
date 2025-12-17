document.addEventListener('DOMContentLoaded', () => {
    // 1. DSO Visualization Chart
    const ctx = document.getElementById('dsoChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['TSMC', 'AMD', 'Intel', 'NVDA Target', 'NVDA Actual 2025'],
            datasets: [{
                label: 'DSO (Days)',
                data: [35, 42, 38, 40, 53.3],
                backgroundColor: ['#333', '#333', '#333', '#555', '#ff3b3b'],
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true, grid: { color: 'rgba(255,255,255,0.05)' } },
                x: { grid: { display: false } }
            },
            plugins: { legend: { display: false } }
        }
    });

    // 2. Form Submission Simulation
    const form = document.getElementById('whistle-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.submit-btn');
        btn.innerText = "TRANSMITTING...";
        btn.style.opacity = "0.7";

        setTimeout(() => {
            alert("EVIDENCE SECURED. Secure hash generated. Routing to SEC task force.");
            btn.innerText = "TRANSMISSION COMPLETE";
            btn.style.background = "#22c55e";
            form.reset();
        }, 2000);
    });
});