const products = require('./data/products.json');

exports.handler = async () => {
  console.log('in here')
  console.log(products.map(p => p.sku))

  return {
    statusCode: 200,
    headers: {
      // 'access-control-allow-origin': 'rbitty.art',
      'access-control-allow-origin': '*',
    },
    body: JSON.stringify(products.map(p => p.sku)),
  };
};