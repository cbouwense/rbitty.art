const products = require('./data/products.json');
const stripe = require("stripe")("sk_test_51LiPLkGp6Qs26GN4dkzzfIFl4FRNfugJQHQTtTS7xrxadINN28hnaG6DxeMhBaVjR75nLJhwsNwNWZeWdcWYk0jJ00thXEKTLc");

exports.handler = async (event) => {
  const sku = 1;
  const quantity = 1;
  const product = {
    "sku": "1",
    "name": "Bun-E",
    "description": "This is a painting of a rabbit.",
    "image": "https://www.rbitty.art/static/bun-e.jpeg",
    "amount": 3000,
    "currency": "USD"
  };

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ['card'],
    billing_address_collection: 'auto',
    shipping_address_collection: {
      allowed_countries: ['US', 'CA'],
    },
    success_url: 'https://shrug.sh',
    cancel_url: 'https://shrug.sh:1738',
    line_items: [
      {
        price_data: {
          currency: product.currency,
          product_data: {
            name: product.name,
            description: product.description,
            images: [product.image],
          },
          unit_amount: product.amount,
          
        },
        quantity: 1,
        
      },
    ],
  });

  console.log({ session })

  return {
    statusCode: 303,
    body: JSON.stringify({
      sessionId: session.id,
      url: session.url,
      publishableKey: "pk_test_51LiPLkGp6Qs26GN4kp26Gv7dlX7boAEMV3MrUHHP5g9PHHXcbZeE2Ziujv7113sOWJwJ49eT8Axuw2bmzycMwMLk00OQOISTy9",
    }),
  };
};