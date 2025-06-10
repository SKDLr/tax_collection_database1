const baseURL = "https://symmetrical-parakeet-r4gp9rjw4x74f6gg-6008.app.github.dev"; // Change if port changes

// 1️⃣ PIE CHART: Taxpayers by Region
fetch(`${baseURL}/taxpayers-by-region`)
  .then(res => res.json())
  .then(data => {
    const labels = data.map(row => row.region);
    const values = data.map(row => parseInt(row.total));

    new Chart(document.getElementById("taxpayerRegionChart"), {
      type: "pie",
      data: {
        labels,
        datasets: [{
          data: values,
          backgroundColor: ["#007bff", "#28a745", "#ffc107", "#dc3545", "#6c757d", "#6610f2"]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });
  })
  .catch(err => console.error("Pie chart error:", err));

// 2️⃣ BAR CHART: Payments by Month
fetch(`${baseURL}/payments-by-month`)
  .then(res => res.json())
  .then(data => {
    const labels = data.map(row => row.month);
    const values = data.map(row => parseFloat(row.total_amount));

    new Chart(document.getElementById("paymentsBarChart"), {
      type: "bar",
      data: {
        labels,
        datasets: [{
          label: "Amount Paid",
          data: values,
          backgroundColor: "#198754"
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  })
  .catch(err => console.error("Bar chart error:", err));

// 3️⃣ DOUGHNUT CHART: Returns by Tax Type
fetch(`${baseURL}/returns-by-type`)
  .then(res => res.json())
  .then(data => {
    const labels = data.map(row => row.tax_name);
    const values = data.map(row => parseInt(row.total));

    new Chart(document.getElementById("returnsTypeChart"), {
      type: "doughnut",
      data: {
        labels,
        datasets: [{
          label: "Returns",
          data: values,
          backgroundColor: ["#0d6efd", "#20c997", "#fd7e14", "#e83e8c"]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });
  })
  .catch(err => console.error("Doughnut chart error:", err));

// 4️⃣ HORIZONTAL BAR CHART: Audits per Officer
fetch(`${baseURL}/audits-by-officer`)
  .then(res => res.json())
  .then(data => {
    const labels = data.map(row => row.name);
    const values = data.map(row => parseInt(row.total));

    new Chart(document.getElementById("auditsOfficerChart"), {
      type: "bar",
      data: {
        labels,
        datasets: [{
          label: "Audits Conducted",
          data: values,
          backgroundColor: "#6610f2"
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        scales: {
          x: { beginAtZero: true }
        }
      }
    });
  })
  .catch(err => console.error("Horizontal bar chart error:", err));
