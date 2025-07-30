const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  const filePath = path.resolve(__dirname, 'texto.json');

  let texto = '';
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath);
    texto = JSON.parse(data).texto || '';
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ texto })
  };
};
