function renderCheckoutSummary() {
  const container = document.getElementById("checkoutItems");

  if (!container) return;

  const cart = getCartFromStorage();

  if (!cart.length) {
    container.innerHTML = `
      <div class="empty-cart compact">
        <p>Seu carrinho está vazio.</p>
        <a href="./index.html#produtos" class="btn btn-primary full">Ver produtos</a>
      </div>
    `;

    const form = document.getElementById("checkoutForm");
    if (form) form.classList.add("disabled-form");

    return;
  }

  container.innerHTML = cart.map((item) => `
    <div class="checkout-item">
      <img src="${item.image}" alt="${item.name}" />
      <div>
        <strong>${item.name}</strong>
        <span>${item.quantity}x • ${item.size}</span>
      </div>
      <span>${formatCurrency(item.price * item.quantity)}</span>
    </div>
  `).join("");

  const totals = calculateCartTotals(cart);

  document.getElementById("checkoutSubtotal").textContent = formatCurrency(totals.subtotal);
  document.getElementById("checkoutDiscount").textContent = `- ${formatCurrency(totals.discount)}`;
  document.getElementById("checkoutShipping").textContent =
    totals.shipping === 0 && totals.subtotal > 0 ? "Grátis" : formatCurrency(totals.shipping);
  document.getElementById("checkoutTotal").textContent = formatCurrency(totals.total);
}

function setupCheckoutForm() {
  const form = document.getElementById("checkoutForm");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const cart = getCartFromStorage();

    if (!cart.length) {
      showToast("Seu carrinho está vazio.");
      return;
    }

    const customerName = document.getElementById("customerName").value.trim();
    const customerEmail = document.getElementById("customerEmail").value.trim();
    const paymentMethod = document.querySelector("input[name='paymentMethod']:checked").value;

    if (!customerName || !customerEmail) {
      showToast("Preencha os dados obrigatórios.");
      return;
    }

    const totals = calculateCartTotals(cart);

    const order = {
      orderNumber: generateOrderNumber(),
      customerName,
      customerEmail,
      paymentMethod,
      items: cart,
      subtotal: totals.subtotal,
      discount: totals.discount,
      shipping: totals.shipping,
      total: totals.total,
      createdAt: new Date().toISOString()
    };

    saveLastOrder(order);
    clearCartStorage();

    showToast("Pedido confirmado!");
    setTimeout(() => {
      window.location.href = "./sucesso.html";
    }, 700);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCheckoutSummary();
  setupCheckoutForm();
});
