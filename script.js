
fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    createLineChart(data.sales);
    createPieChart(data.products);
    createBarChart(data.performance);
  })
  .catch((error) => console.error('Error fetching data:', error));


function createLineChart(data) {
  const ctx = document.getElementById('lineChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.labels,
      datasets: [
        {
          label: 'Sales ($)',
          data: data.values,
          borderColor: '#007BFF',
          backgroundColor: 'rgba(0, 123, 255, 0.1)',
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
}


function createPieChart(data) {
  const ctx = document.getElementById('pieChart').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: data.labels,
      datasets: [
        {
          data: data.values,
          backgroundColor: ['#007BFF', '#FFC107', '#28A745', '#DC3545'],
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
}


function createBarChart(data) {
  const ctx = document.getElementById('barChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.labels,
      datasets: [
        {
          label: 'Monthly Revenue ($)',
          data: data.values,
          backgroundColor: '#17A2B8',
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
}
