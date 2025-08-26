// Data for the charts
const recoveryData = {
    vitaminD: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      data: [20, 40, 60, 80], // Example progress (in %)
      backgroundColor: 'rgba(255, 193, 7, 0.5)',
      borderColor: 'rgba(255, 193, 7, 1)',
    },
    ironLevel: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      data: [15, 30, 50, 70],
      backgroundColor: 'rgba(33, 150, 243, 0.5)',
      borderColor: 'rgba(33, 150, 243, 1)',
    },
    calciumLevel: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      data: [10, 25, 50, 75],
      backgroundColor: 'rgba(76, 175, 80, 0.5)',
      borderColor: 'rgba(76, 175, 80, 1)',
    }
  };
  
  // Create charts using Chart.js
  window.onload = function () {
    const ctxVitaminD = document.getElementById('vitaminDChart').getContext('2d');
    const ctxIronLevel = document.getElementById('ironLevelChart').getContext('2d');
    const ctxCalciumLevel = document.getElementById('calciumLevelChart').getContext('2d');
    
    // Vitamin D Chart
    new Chart(ctxVitaminD, {
      type: 'line',
      data: {
        labels: recoveryData.vitaminD.labels,
        datasets: [{
          label: 'Vitamin D Recovery Progress',
          data: recoveryData.vitaminD.data,
          backgroundColor: recoveryData.vitaminD.backgroundColor,
          borderColor: recoveryData.vitaminD.borderColor,
          fill: true,
          tension: 0.4,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  
    // Iron Level Chart
    new Chart(ctxIronLevel, {
      type: 'line',
      data: {
        labels: recoveryData.ironLevel.labels,
        datasets: [{
          label: 'Iron Level Recovery Progress',
          data: recoveryData.ironLevel.data,
          backgroundColor: recoveryData.ironLevel.backgroundColor,
          borderColor: recoveryData.ironLevel.borderColor,
          fill: true,
          tension: 0.4,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  
    // Calcium Level Chart
    new Chart(ctxCalciumLevel, {
      type: 'line',
      data: {
        labels: recoveryData.calciumLevel.labels,
        datasets: [{
          label: 'Calcium Level Recovery Progress',
          data: recoveryData.calciumLevel.data,
          backgroundColor: recoveryData.calciumLevel.backgroundColor,
          borderColor: recoveryData.calciumLevel.borderColor,
          fill: true,
          tension: 0.4,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true,
            max: 100
          }
        }
      }
    });
  };
  