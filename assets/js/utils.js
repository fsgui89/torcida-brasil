function formatCurrency(value) {
  return Number(value || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getProductById(productId) {
  return PRODUCTS.find((product) => product.id === Number(productId));
}

function getUrlParam(paramName) {
  const params = new URLSearchParams(window.location.search);
  return params.get(paramName);
}

function createUniqueList(items, key) {
  return [...new Set(items.map((item) => item[key]))].filter(Boolean).sort();
}

function calculateCartTotals(cart) {
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const originalSubtotal = cart.reduce((total, item) => {
    const originalPrice = item.oldPrice || item.price;
    return total + originalPrice * item.quantity;
  }, 0);

  const discount = Math.max(originalSubtotal - subtotal, 0);
  const shipping = subtotal === 0 ? 0 : subtotal >= 399 ? 0 : 19.90;
  const total = subtotal + shipping;

  return {
    subtotal,
    originalSubtotal,
    discount,
    shipping,
    total
  };
}

function generateOrderNumber() {
  const datePart = new Date().getTime().toString().slice(-6);
  const randomPart = Math.floor(Math.random() * 900 + 100);
  return `TB-${datePart}-${randomPart}`;
}

function redirectToHomeIfEmptyCart() {
  const cart = getCartFromStorage();

  if (!cart.length) {
    window.location.href = "./index.html#produtos";
  }
}
