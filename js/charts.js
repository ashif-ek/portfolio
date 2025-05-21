// Initialize Radar Chart
function initRadarChart() {
    const ctx = document.getElementById('radarChart').getContext('2d');
    
    const radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Problem Solving', 'Communication', 'Teamwork', 'Creativity', 'Leadership', 'Time Management'],
            datasets: [{
                label: 'Professional Skills',
                data: [95, 90, 85, 88, 92, 87],
                backgroundColor: 'rgba(67, 97, 238, 0.2)',
                borderColor: 'rgba(67, 97, 238, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(67, 97, 238, 1)',
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                r: {
                    angleLines: {
                        display: true,
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: {
                        stepSize: 20,
                        backdropColor: 'transparent'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    pointLabels: {
                        font: {
                            size: 12,
                            family: "'Inter', sans-serif"
                        },
                        color: 'var(--text-color)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleFont: {
                        family: "'Inter', sans-serif",
                        size: 14
                    },
                    bodyFont: {
                        family: "'Inter', sans-serif",
                        size: 12
                    },
                    callbacks: {
                        label: function(context) {
                            return context.parsed.r + '%';
                        }
                    }
                }
            },
            elements: {
                line: {
                    tension: 0.1
                }
            }
        }
    });
    
    // Update chart on theme change
    document.addEventListener('themeChanged', function() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
        const angleLinesColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
        const pointLabelsColor = isDark ? '#e9ecef' : '#495057';
        
        radarChart.options.scales.r.grid.color = gridColor;
        radarChart.options.scales.r.angleLines.color = angleLinesColor;
        radarChart.options.scales.r.pointLabels.color = pointLabelsColor;
        radarChart.update();
    });
}