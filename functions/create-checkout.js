const products = require('./data/products.json');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  const tokens = event.path.split('/');
  const sku = tokens.pop();
  const isOriginal = tokens.pop() === 'original';

  const product = products.find(p => p.sku === sku);

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    billing_address_collection: 'auto',
    shipping_address_collection: {
      allowed_countries: ['US'],
    },
    success_url: `https://rbitty.art/success`,
    cancel_url: `https://rbitty.art/failure`,
    line_items: [
      {
        price_data: {
          currency: product.currency,
          product_data: {
            name: product.name,
            description: 
              isOriginal  
                ? 'Original work'
                : 'Print',
            images: [product.image],
          },
          unit_amount: 
            isOriginal 
              ? product.amountInCentsOriginal
              : product.amountInCentsPrint,
        },
        quantity: 1,
      },
    ],
  });

  return {
    statusCode: 303,
    headers: {
      // 'access-control-allow-origin': 'rbitty.art',
      'access-control-allow-origin': '*',
    },
    body: JSON.stringify({
      sessionId: session.id,
      url: session.url,
      publishableKey: 'pk_test_51LiPLkGp6Qs26GN4kp26Gv7dlX7boAEMV3MrUHHP5g9PHHXcbZeE2Ziujv7113sOWJwJ49eT8Axuw2bmzycMwMLk00OQOISTy9',
    }),
  };
};