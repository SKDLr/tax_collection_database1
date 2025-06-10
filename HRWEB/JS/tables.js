window.addEventListener("DOMContentLoaded", () => {
const base = "https://symmetrical-parakeet-r4gp9rjw4x74f6gg-6008.app.github.dev";

fetch(`${base}/regions`).then(r => r.json()).then(data => {
    const tbody = document.querySelector("#regionstable tbody");
    data.forEach(item => {
        tbody.innerHTML += `<tr><td>${item.region_id}</td><td>${item.region_name}</td></tr>`;
    });
});

fetch(`${base}/provinces`).then(r => r.json()).then(data => {
    const tbody = document.querySelector("#provincestable tbody");
    data.forEach(item => {
        tbody.innerHTML += `<tr><td>${item.province_id}</td><td>${item.province_name}</td><td>${item.region_id}</td></tr>`;
    });
});

fetch(`${base}/tax_offices`).then(r => r.json()).then(data => {
    const tbody = document.querySelector("#officestable tbody");
    data.forEach(item => {
        tbody.innerHTML += `<tr><td>${item.office_id}</td><td>${item.office_name}</td><td>${item.province_id}</td><td>${item.address}</td></tr>`;
    });
});

fetch(`${base}/tax_types`).then(r => r.json()).then(data => {
    const tbody = document.querySelector("#typestable tbody");
    data.forEach(item => {
        tbody.innerHTML += `<tr><td>${item.tax_type_id}</td><td>${item.tax_name}</td><td>${item.description}</td></tr>`;
    });
});

fetch(`${base}/taxpayers`).then(r => r.json()).then(data => {
    const tbody = document.querySelector("#payerstable tbody");
    data.forEach(item => {
        tbody.innerHTML += `<tr><td>${item.taxpayer_id}</td><td>${item.full_name}</td><td>${item.cnic}</td><td>${item.contact}</td><td>${item.address}</td><td>${item.registration_date}</td></tr>`;
    });
});

fetch(`${base}/tax_returns`).then(r => r.json()).then(data => {
    const tbody = document.querySelector("#returnstable tbody");
    data.forEach(item => {
        tbody.innerHTML += `<tr><td>${item.return_id}</td><td>${item.taxpayer_id}</td><td>${item.tax_type_id}</td><td>${item.fiscal_year}</td><td>${item.return_date}</td></tr>`;
    });
});

fetch(`${base}/payments`).then(r => r.json()).then(data => {
    const tbody = document.querySelector("#paymentstable tbody");
    data.forEach(item => {
        tbody.innerHTML += `<tr><td>${item.payment_id}</td><td>${item.return_id}</td><td>${item.amount_paid}</td><td>${item.payment_date}</td></tr>`;
    });
});

fetch(`${base}/tax_rates`).then(r => r.json()).then(data => {
    const tbody = document.querySelector("#ratestable tbody");
    data.forEach(item => {
        tbody.innerHTML += `<tr><td>${item.rate_id}</td><td>${item.tax_type_id}</td><td>${item.fiscal_year}</td><td>${item.rate_percent}</td></tr>`;
    });
});

fetch(`${base}/officials`).then(r => r.json()).then(data => {
    const tbody = document.querySelector("#officialstable tbody");
    data.forEach(item => {
        tbody.innerHTML += `<tr><td>${item.official_id}</td><td>${item.name}</td><td>${item.designation}</td><td>${item.office_id}</td><td>${item.hire_date}</td></tr>`;
    });
});

fetch(`${base}/audits`).then(r => r.json()).then(data => {
    const tbody = document.querySelector("#auditstable tbody");
    data.forEach(item => {
        tbody.innerHTML += `<tr><td>${item.audit_id}</td><td>${item.taxpayer_id}</td><td>${item.audit_date}</td><td>${item.findings}</td><td>${item.officer_id}</td></tr>`;
    });
});
});






// gi










// opo



















