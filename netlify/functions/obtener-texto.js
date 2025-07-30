const fetch = require('node-fetch');

exports.handler = async () => {
  try {
    const res = await fetch('https://asd22.netlify.app/.netlify/functions/guardar-texto');
    const data = await res.json();

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ texto: data.texto || '' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al obtener el texto', detalle: error.message }),
    };
  }
};
