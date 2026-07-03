const CART_STORAGE_KEY = "torcidaBrasilCart";
const ORDER_STORAGE_KEY = "torcidaBrasilLastOrder";

function getCartFromStorage() {
  try {
    return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
  } catch (error) {
    console.error("Erro ao ler carrinho:", error);
    return [];
  }
}

function saveCartToStorage(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function clearCartStorage() {
  localStorage.removeItem(CART_STORAGE_KEY);
}

function saveLastOrder(order) {
  localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(order));
}

function getLastOrder() {
  try {
    return JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY));
  } catch (error) {
    console.error("Erro ao ler último pedido:", error);
    return null;
  }
}
