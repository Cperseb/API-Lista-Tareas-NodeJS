const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Definir la ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Puerto en el que el servidor escucha
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
