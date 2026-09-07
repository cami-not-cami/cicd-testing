const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.json({ message: 'Hello CICD!' });
});
app.get('/health', (req, res) => {
res.json({ status: 'healthy' });
});
module.exports = app;
app.get('/version', (req, res) => {
res.json({ version: '1.0.0' });
});
