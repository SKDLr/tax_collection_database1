const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    try {
        res.json('WELCOME TO NATIONAL TAX COLLECTION API');
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});


const tables = ['regions', 'provinces', 'tax_offices', 'tax_types', 'taxpayers', 'tax_returns', 'payments', 'tax_rates', 'officials', 'audits'];

// GET all data routes
for (const table of tables) {
    app.get(`/${table}`, async (req, res) => {
        try {
            const result = await pool.query(`SELECT * FROM ${table}`);
            res.json(result.rows);
        } catch (err) {
            res.status(500).json({ Error: err.message });
        }
    });
}

// GET count routes
app.get('/totaltaxpayers', async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(taxpayer_id) FROM taxpayers');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/totalregions', async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(region_id) FROM regions');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/totalprovinces', async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(province_id) FROM provinces');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/totaltaxoffices', async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(office_id) FROM tax_offices');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/totaltaxreturns', async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(return_id) FROM tax_returns');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/totalpayments', async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(payment_id) FROM payments');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/totaltaxrates', async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(rate_id) FROM tax_rates');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/totalofficials', async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(official_id) FROM officials');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});

app.get('/totalaudits', async (req, res) => {
    try {
        const result = await pool.query('SELECT COUNT(audit_id) FROM audits');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ Error: err.message });
    }
});





//GET POST Endpoints
// POST: Regions
app.post('/regions', async (req, res) => {
    const { region_id, region_name } = req.body;
    try {
        await pool.query('INSERT INTO regions (region_id, region_name) VALUES ($1, $2)', [region_id, region_name]);
        res.status(201).json({ message: 'Region added' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST: Provinces
app.post('/provinces', async (req, res) => {
    const { province_id, province_name, region_id } = req.body;
    try {
        await pool.query('INSERT INTO provinces (province_id, province_name, region_id) VALUES ($1, $2, $3)', [province_id, province_name, region_id]);
        res.status(201).json({ message: 'Province added' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST: Tax Offices
app.post('/tax_offices', async (req, res) => {
    const { office_id, office_name, province_id, address } = req.body;
    try {
        await pool.query('INSERT INTO tax_offices (office_id, office_name, province_id, address) VALUES ($1, $2, $3, $4)', [office_id, office_name, province_id, address]);
        res.status(201).json({ message: 'Tax office added' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST: Tax Types
app.post('/tax_types', async (req, res) => {
    const { tax_type_id, tax_name, description } = req.body;
    try {
        await pool.query('INSERT INTO tax_types (tax_type_id, tax_name, description) VALUES ($1, $2, $3)', [tax_type_id, tax_name, description]);
        res.status(201).json({ message: 'Tax type added' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST: Taxpayers
app.post('/taxpayers', async (req, res) => {
    const { taxpayer_id, full_name, cnic, contact, address, registration_date } = req.body;
    try {
        await pool.query('INSERT INTO taxpayers (taxpayer_id, full_name, cnic, contact, address, registration_date) VALUES ($1, $2, $3, $4, $5, $6)', [taxpayer_id, full_name, cnic, contact, address, registration_date]);
        res.status(201).json({ message: 'Taxpayer added' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST: Tax Returns
app.post('/tax_returns', async (req, res) => {
    const { return_id, taxpayer_id, tax_type_id, fiscal_year, return_date } = req.body;
    try {
        await pool.query('INSERT INTO tax_returns (return_id, taxpayer_id, tax_type_id, fiscal_year, return_date) VALUES ($1, $2, $3, $4, $5)', [return_id, taxpayer_id, tax_type_id, fiscal_year, return_date]);
        res.status(201).json({ message: 'Tax return added' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST: Payments
app.post('/payments', async (req, res) => {
    const { payment_id, return_id, amount_paid, payment_date } = req.body;
    try {
        await pool.query('INSERT INTO payments (payment_id, return_id, amount_paid, payment_date) VALUES ($1, $2, $3, $4)', [payment_id, return_id, amount_paid, payment_date]);
        res.status(201).json({ message: 'Payment added' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST: Tax Rates
app.post('/tax_rates', async (req, res) => {
    const { rate_id, tax_type_id, fiscal_year, rate_percent } = req.body;
    try {
        await pool.query('INSERT INTO tax_rates (rate_id, tax_type_id, fiscal_year, rate_percent) VALUES ($1, $2, $3, $4)', [rate_id, tax_type_id, fiscal_year, rate_percent]);
        res.status(201).json({ message: 'Tax rate added' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST: Officials
app.post('/officials', async (req, res) => {
    const { official_id, name, designation, office_id, hire_date } = req.body;
    try {
        await pool.query('INSERT INTO officials (official_id, name, designation, office_id, hire_date) VALUES ($1, $2, $3, $4, $5)', [official_id, name, designation, office_id, hire_date]);
        res.status(201).json({ message: 'Official added' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST: Audits
app.post('/audits', async (req, res) => {
    const { audit_id, taxpayer_id, audit_date, findings, officer_id } = req.body;
    try {
        await pool.query('INSERT INTO audits (audit_id, taxpayer_id, audit_date, findings, officer_id) VALUES ($1, $2, $3, $4, $5)', [audit_id, taxpayer_id, audit_date, findings, officer_id]);
        res.status(201).json({ message: 'Audit added' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});






// For Charts
app.get('/taxpayers-by-region', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        CASE
          WHEN address ILIKE '%lahore%' THEN 'Lahore'
          WHEN address ILIKE '%karachi%' THEN 'Karachi'
          WHEN address ILIKE '%islamabad%' THEN 'Islamabad'
          WHEN address ILIKE '%quetta%' THEN 'Quetta'
          WHEN address ILIKE '%rawalpindi%' THEN 'Rawalpindi'
          ELSE 'Other'
        END AS region,
        COUNT(*) AS total
      FROM taxpayers
      GROUP BY region
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/payments-by-month', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT TO_CHAR(payment_date, 'Mon') AS month, SUM(amount_paid) AS total_amount
      FROM payments
      GROUP BY TO_CHAR(payment_date, 'Mon'), EXTRACT(MONTH FROM payment_date)
      ORDER BY EXTRACT(MONTH FROM payment_date)
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/returns-by-type', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT tt.tax_name, COUNT(tr.return_id) AS total
      FROM tax_returns tr
      JOIN tax_types tt ON tr.tax_type_id = tt.tax_type_id
      GROUP BY tt.tax_name
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/audits-by-officer', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT o.name, COUNT(a.audit_id) AS total
      FROM audits a
      JOIN officials o ON a.officer_id = o.official_id
      GROUP BY o.name
    `);
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});





const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Connected Successfully on PORT ${PORT}`);
});