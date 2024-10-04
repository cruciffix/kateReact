const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
const mysql2 = require('mysql2/promise');
const pool = mysql2.createPool({
	host: 'localhost',
	user: 'root',
	database: 'kate_tutor',
	password: '',
});

app.use(express.json());

const port = 3003;

app.get('/menu', async (req, res) => {
	let [menu] = await pool.query('SELECT * FROM menu');

	res.json({ menu });
});

app.get('/section2', async (req, res) => {
	let [data] = await pool.query('SELECT * FROM section2_item');
	res.json({ data });
});

app.get('/section4', async (req, res) => {
	let [data] = await pool.query('SELECT * FROM stages');
	res.json({ data });
});

app.get('/section6', async (req, res) => {
	let [data] = await pool.query('SELECT * FROM section6_messengers');
	res.json({ data });
});

app.get('/section7', async (req, res) => {
	let [data] = await pool.query('SELECT * FROM section7_items');
	res.json({ data });
});

app.get('/section8', async (req, res) => {
	let [data] = await pool.query('SELECT * FROM section8_rating');
	res.json({ data });
});

app.listen(port, () => {
	console.log('listening on port ', port);
});
