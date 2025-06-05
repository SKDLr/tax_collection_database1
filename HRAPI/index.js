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

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Connected Successfully on PORT ${PORT}`);
});