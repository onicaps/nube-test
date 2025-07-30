const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  const ruta = path.resolve(__dirname, 'texto.json');

  let texto = '';
  if (fs.existsSync(ruta)) {
    const data = fs.readFileSync(ruta);
    texto = JSON.parse(data).texto;
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // 🔥 Esto habilita CORS
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ texto }),
  };
};
