const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000; // process.env.PORT is for Azure.

const app = express();

app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'imgs')));
app.use(express.static(path.join(__dirname, 'fuentes')));
app.use(express.static(path.join(__dirname, 'audios')));

// Ruta que muestra la página de inicio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/', 'index.html'));
 });
 

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
 });
 