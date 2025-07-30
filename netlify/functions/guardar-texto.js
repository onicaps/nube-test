let textoGuardado = ''; // Esto es temporal, solo para test

exports.handler = async (event) => {
  if (event.httpMethod === 'POST') {
    const { texto } = JSON.parse(event.body);
    textoGuardado = texto;
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, texto })
    };
  }

  if (event.httpMethod === 'GET') {
    return {
      statusCode: 200,
      body: JSON.stringify({ texto: textoGuardado })
    };
  }

  return {
    statusCode: 405,
    body: 'Method Not Allowed'
  };
};
