const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/watch', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'live.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/discord', (req, res) => {
    res.redirect("https://discord.gg/k9GW4MmS9C");
});

app.get('/info', (req, res) => {
    res.json({"site": "TVBox", "description": "Ücretsiz TV Kanalı izleme platformu"});
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor!`);
});