function getCart() {
  return getCartFromStorage();
}

function saveCart(cart) {
  saveCartToStorage(cart);
  updateCartCount();
}

function addToCart(productId, quantity = 1, selectedOption = null) {
  const product = getProductById(productId);

  if (!product) {
    showToast("Produto não encontrado.");
    return;
  }

  const cart = getCart();
  const optionValues = product.options || product.sizes || ["Único"];
  const optionValue = selectedOption || optionValues[0] || "Único";
  const selectionLabel = product.optionLabel || "Tamanho";

  const existingItem = cart.find((item) => item.id === product.id && item.size === optionValue);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      category: product.category,
      audience: product.audience,
      brand: product.brand,
      type: product.type,
      price: product.price,
      oldPrice: product.oldPrice,
      image: product.images[0],
      size: optionValue,
      selectionLabel,
      quantity
    });
  }

  saveCart(cart);
  showToast("Produto adicionado ao carrinho!");
}

function removeFromCart(productId, size) {
  const cart = getCart().filter((item) => !(item.id === Number(productId) && item.size === size));
  saveCart(cart);
  renderCartPage();
  showToast("Produto removido do carrinho.");
}

function updateCartQuantity(productId, size, operation) {
  const cart = getCart();
  const item = cart.find((cartItem) => cartItem.id === Number(productId) && cartItem.size === size);

  if (!item) return;

  if (operation === "increase") {
    item.quantity += 1;
  }

  if (operation === "decrease") {
    item.quantity -= 1;
  }

  const updatedCart = cart.filter((cartItem) => cartItem.quantity > 0);
  saveCart(updatedCart);
  renderCartPage();
}

function updateCartCount() {
  const cartCountElements = document.querySelectorAll("[data-cart-count]");
  const totalItems = getCart().reduce((total, item) => total + item.quantity, 0);

  cartCountElements.forEach((element) => {
    element.textContent = totalItems;
  });
}

function renderCartPage() {
  const cartItemsContainer = document.getElementById("cartItems");

  if (!cartItemsContainer) return;

  const cart = getCart();
  const checkoutButton = document.getElementById("checkoutButton");

  if (!cart.length) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart">
        <h2>Seu carrinho está vazio</h2>
        <p>Escolha seus produtos favoritos e venha torcer com o Brasil.</p>
        <a href="./index.html#produtos" class="btn btn-primary">Ver produtos</a>
      </div>
    `;

    if (checkoutButton) {
      checkoutButton.classList.add("disabled");
      checkoutButton.setAttribute("aria-disabled", "true");
      checkoutButton.addEventListener("click", (event) => event.preventDefault());
    }

    updateSummaryValues(cart);
    return;
  }

  cartItemsContainer.innerHTML = cart.map((item) => {
    const selectionLabel = item.selectionLabel || "Tamanho";

    return `
      <article class="cart-item">
        <img src="${item.image}" alt="${item.name}" />

        <div class="cart-item-info">
          <span class="product-tag">${item.category}</span>
          <h2>${item.name}</h2>
          <p>${item.brand} • ${item.audience} • ${selectionLabel}: ${item.size}</p>
          <strong>${formatCurrency(item.price)}</strong>
        </div>

        <div class="quantity-control" aria-label="Controle de quantidade">
          <button type="button" data-action="decrease" data-id="${item.id}" data-size="${item.size}">−</button>
          <span>${item.quantity}</span>
          <button type="button" data-action="increase" data-id="${item.id}" data-size="${item.size}">+</button>
        </div>

        <div class="cart-item-total">
          <strong>${formatCurrency(item.price * item.quantity)}</strong>
          <button type="button" class="remove-btn" data-action="remove" data-id="${item.id}" data-size="${item.size}">
            Remover
          </button>
        </div>
      </article>
    `;
  }).join("");

  updateSummaryValues(cart);
  attachCartEvents();
}

function attachCartEvents() {
  const cartItemsContainer = document.getElementById("cartItems");

  if (!cartItemsContainer) return;

  cartItemsContainer.querySelectorAll("button[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      const id = button.dataset.id;
      const size = button.dataset.size;

      if (action === "remove") {
        removeFromCart(id, size);
        return;
      }

      updateCartQuantity(id, size, action);
    });
  });
}

function updateSummaryValues(cart) {
  const totals = calculateCartTotals(cart);

  const subtotalValue = document.getElementById("subtotalValue");
  const discountValue = document.getElementById("discountValue");
  const shippingValue = document.getElementById("shippingValue");
  const totalValue = document.getElementById("totalValue");

  if (subtotalValue) subtotalValue.textContent = formatCurrency(totals.subtotal);
  if (discountValue) discountValue.textContent = `- ${formatCurrency(totals.discount)}`;
  if (shippingValue) shippingValue.textContent = totals.shipping === 0 && totals.subtotal > 0 ? "Grátis" : formatCurrency(totals.shipping);
  if (totalValue) totalValue.textContent = formatCurrency(totals.total);
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderCartPage();
});
