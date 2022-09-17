const createCheckoutOriginal = async (sku) => {
  const response = await fetch(`${window.location.origin}/.netlify/functions/create-checkout/original/${sku}`);
  const responseJson = await response.json();
  window.location = responseJson.url;
}

const createCheckoutPrint = async (sku) => {
  const response = await fetch(`${window.location.origin}/.netlify/functions/create-checkout/print/${sku}`);
  const responseJson = await response.json();
  window.location = responseJson.url;
}

const getOriginalPrice = async (sku) => {
  const response = await fetch(`${window.location.origin}/.netlify/functions/get-price/${sku}`);
  const { amountInCentsOriginal } = await response.json();
  const priceInDollars = Math.ceil(amountInCentsOriginal / 100);
  document.getElementById('originalPrice').innerText = `$${priceInDollars}`;
}

const getPrintPrice = async (sku) => {
  const response = await fetch(`${window.location.origin}/.netlify/functions/get-price/${sku}`);
  const { amountInCentsPrint } = await response.json();
  const priceInDollars = Math.ceil(amountInCentsPrint / 100);
  document.getElementById('printPrice').innerText = `$${priceInDollars}`;
}