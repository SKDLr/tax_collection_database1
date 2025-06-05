const baseURL = "https://friendly-bassoon-wr7g69wxrp4p25vr7-6007.app.github.dev";

const endpoints = {
    taxpayers: "/totaltaxpayers",
    regions: "/totalregions",
    provinces: "/totalprovinces",
    offices: "/totaltaxoffices",
    taxtypes: "/totaltaxrates",
    returns: "/totaltaxreturns",
    payments: "/totalpayments",
    rates: "/totaltaxrates",
    officials: "/totalofficials",
    audits: "/totalaudits"
};

// Load single count
function loadCount(key) {
    fetch(baseURL + endpoints[key])
        .then(response => {
            if (!response.ok) throw new Error(`Failed to fetch ${key}`);
            return response.json();
        })
        .then(data => {
            document.getElementById(key).innerText = data[0].count;
        })
        .catch(err => {
            document.getElementById(key).innerText = "Error";
            console.error(err.message);
        });
}

// Load all counts
function loadAllCounts() {
    Object.keys(endpoints).forEach(loadCount);
}

// Hide counts
function hideCount(key) {
    document.getElementById(key).innerText = "--";
}

// Hide all count
function hideAllCounts() {
    Object.keys(endpoints).forEach(hideCount);
}