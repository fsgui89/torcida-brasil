function renderProductDetail() {
  const container = document.getElementById("productDetail");

  if (!container) return;

  const productId = getUrlParam("id");
  const product = getProductById(productId);

  if (!product) {
    container.innerHTML = `
      <div class="empty-state">
        <h1>Produto não encontrado</h1>
        <p>O produto que você tentou acessar não existe ou foi removido.</p>
        <a href="./index.html#produtos" class="btn btn-primary">Voltar para a loja</a>
      </div>
    `;
    return;
  }

  document.title = `${product.name} | Torcida Brasil`;

  const hasPromotion = product.promotion && product.oldPrice;
  const optionValues = product.options || product.sizes || ["Único"];
  const optionTitle = product.optionTitle || "Escolha o tamanho";

  const thumbnails = product.images.map((image, index) => `
    <button type="button" class="thumbnail-btn ${index === 0 ? "active" : ""}" data-image="${image}">
      <img src="${image}" alt="${product.name} imagem ${index + 1}" />
    </button>
  `).join("");

  container.innerHTML = `
    <div class="product-gallery">
      ${hasPromotion ? `<span class="discount-badge large">Oferta</span>` : ""}
      <img src="${product.images[0]}" alt="${product.name}" class="main-product-image" id="mainProductImage" />
      <div class="thumbnail-list">
        ${thumbnails}
      </div>
    </div>

    <article class="product-info-panel">
      <span class="eyebrow">${product.category} • ${product.brand}</span>
      <h1>${product.name}</h1>

      <p class="detail-description">${product.description}</p>

      <div class="detail-tags">
        <span>${product.type}</span>
        <span>${product.audience}</span>
        <span>${product.brand}</span>
      </div>

      <div class="price-row detail-price">
        ${hasPromotion ? `<span class="old-price">${formatCurrency(product.oldPrice)}</span>` : ""}
        <strong>${formatCurrency(product.price)}</strong>
      </div>

      ${hasPromotion ? `<p class="saving-text">Você economiza ${formatCurrency(product.oldPrice - product.price)} neste produto.</p>` : ""}

      <label class="size-select-label" for="optionSelect">
        ${optionTitle}
        <select id="optionSelect">
          ${optionValues.map((option) => `<option value="${option}">${option}</option>`).join("")}
        </select>
      </label>

      <div class="detail-actions">
        <button type="button" class="btn btn-primary" id="addDetailToCart">Adicionar ao carrinho</button>
        <a href="./carrinho.html" class="btn btn-light">Ir para o carrinho</a>
      </div>

      <div class="educational-note">
        <strong>Observação:</strong> este produto faz parte de um projeto educacional de e-commerce.
      </div>
    </article>
  `;

  setupProductDetailEvents(product);
  renderRelatedProducts(product);
}

function setupProductDetailEvents(product) {
  const mainImage = document.getElementById("mainProductImage");
  const thumbnails = document.querySelectorAll(".thumbnail-btn");
  const addButton = document.getElementById("addDetailToCart");
  const optionSelect = document.getElementById("optionSelect");

  thumbnails.forEach((button) => {
    button.addEventListener("click", () => {
      thumbnails.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      mainImage.src = button.dataset.image;
    });
  });

  addButton.addEventListener("click", () => {
    addToCart(product.id, 1, optionSelect.value);
  });
}

function renderRelatedProducts(currentProduct) {
  const container = document.getElementById("relatedProducts");

  if (!container) return;

  const related = PRODUCTS
    .filter((product) => product.id !== currentProduct.id && product.category === currentProduct.category)
    .slice(0, 3);

  container.innerHTML = related.map((product) => `
    <article class="product-card">
      <a href="./produto.html?id=${product.id}" class="product-image-link">
        <img src="${product.images[0]}" alt="${product.name}" />
      </a>

      <div class="product-card-content">
        <div class="product-meta">
          <span>${product.category}</span>
          <span>${product.audience}</span>
        </div>

        <h3>${product.name}</h3>

        <div class="price-row">
          ${product.oldPrice ? `<span class="old-price">${formatCurrency(product.oldPrice)}</span>` : ""}
          <strong>${formatCurrency(product.price)}</strong>
        </div>

        <a href="./produto.html?id=${product.id}" class="btn btn-light full">Ver detalhes</a>
      </div>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderProductDetail);
