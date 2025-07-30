const fetch = require('node-fetch');

exports.handler = async () => {
  const response = await fetch('https://asd22.netlify.app/.netlify/functions/guardar-texto');
  const data = await response.json();

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data),
  };
};
