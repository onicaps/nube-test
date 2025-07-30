const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

let textoGuardado = ''; // Acá se guarda lo que mande el panel

// Guardar texto desde el panel
app.post('/guardar-texto', (req, res) => {
  const { texto } = req.body;
  textoGuardado = texto;
  console.log('📝 Texto recibido y guardado:', texto);
  res.json({ success: true, texto });
});

// Obtener el texto guardado (para el script inyectado)
app.get('/texto', (req, res) => {
  res.json({ texto: textoGuardado });
});

app.listen(3000, () => {
  console.log('🚀 Backend escuchando en http://localhost:3000');
});
