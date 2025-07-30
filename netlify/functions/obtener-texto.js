const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  const ruta = path.resolve(__dirname, 'texto.json');

  if (fs.existsSync(ruta)) {
    const data = fs.readFileSync(ruta);
    const { texto } = JSON.parse(data);
    return {
      statusCode: 200,
      body: JSON.stringify({ texto }),
    };
  } else {
    return {
      statusCode: 200,
      body: JSON.stringify({ texto: '' }),
    };
  }
};
