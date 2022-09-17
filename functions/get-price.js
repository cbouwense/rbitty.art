const products = require('./data/products.json');

exports.handler = async (event) => {
  const sku = event.path.split('/').pop();
  const product = products.find(p => p.sku === sku);

  return {
    statusCode: 200,
    headers: {
      // 'access-control-allow-origin': 'rbitty.art',
      'access-control-allow-origin': '*',
    },
    body: JSON.stringify(product),
  };
};