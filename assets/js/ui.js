function showToast(message) {
  const toast = document.getElementById("toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function setupMobileMenu() {
  const button = document.getElementById("mobileMenuBtn");
  const nav = document.getElementById("mainNav");

  if (!button || !nav) return;

  button.addEventListener("click", () => {
    nav.classList.toggle("open");
    button.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      button.classList.remove("open");
    });
  });
}

function setupBackToTop() {
  const button = document.getElementById("backToTop");

  if (!button) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      button.classList.add("visible");
    } else {
      button.classList.remove("visible");
    }
  });

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

function setupNewsletter() {
  const form = document.getElementById("newsletterForm");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = document.getElementById("newsletterEmail");

    if (!emailInput.value.trim()) {
      showToast("Digite um e-mail válido.");
      return;
    }

    showToast("Cadastro realizado na Torcida Brasil+!");
    form.reset();
  });
}

function renderSuccessDetails() {
  const container = document.getElementById("successDetails");

  if (!container) return;

  const order = getLastOrder();

  if (!order) {
    container.innerHTML = `
      <p>Nenhum pedido recente foi encontrado.</p>
    `;
    return;
  }

  container.innerHTML = `
    <div class="success-info-row">
      <span>Número do pedido</span>
      <strong>${order.orderNumber}</strong>
    </div>
    <div class="success-info-row">
      <span>Cliente</span>
      <strong>${order.customerName}</strong>
    </div>
    <div class="success-info-row">
      <span>Pagamento</span>
      <strong>${order.paymentMethod}</strong>
    </div>
    <div class="success-info-row">
      <span>Total</span>
      <strong>${formatCurrency(order.total)}</strong>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  setupMobileMenu();
  setupBackToTop();
  setupNewsletter();
  renderSuccessDetails();
});
