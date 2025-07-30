const fetch = require('node-fetch');

exports.handler = async () => {
  const res = await fetch('https://asd22.netlify.app/.netlify/functions/guardar-texto');
  const data = await res.json();

  return {
    statusCode: 200,
    headers: {'Access-Control-Allow-Origin': '*'},
    body: JSON.stringify({ texto: data.texto || '' }),
  };
};
