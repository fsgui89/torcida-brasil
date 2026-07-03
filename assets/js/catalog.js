let currentProducts = [...PRODUCTS];

function fillFilterOptions() {
  const categoryFilter = document.getElementById("categoryFilter");
  const audienceFilter = document.getElementById("audienceFilter");
  const brandFilter = document.getElementById("brandFilter");

  if (!categoryFilter || !audienceFilter || !brandFilter) return;

  createUniqueList(PRODUCTS, "category").forEach((category) => {
    categoryFilter.insertAdjacentHTML("beforeend", `<option value="${category}">${category}</option>`);
  });

  createUniqueList(PRODUCTS, "audience").forEach((audience) => {
    audienceFilter.insertAdjacentHTML("beforeend", `<option value="${audience}">${audience}</option>`);
  });

  createUniqueList(PRODUCTS, "brand").forEach((brand) => {
    brandFilter.insertAdjacentHTML("beforeend", `<option value="${brand}">${brand}</option>`);
  });
}

function createProductCard(product) {
  const hasPromotion = product.promotion && product.oldPrice;

  return `
    <article class="product-card">
      <a href="./produto.html?id=${product.id}" class="product-image-link" aria-label="Ver detalhes de ${product.name}">
        ${hasPromotion ? `<span class="discount-badge">Oferta</span>` : ""}
        <img src="${product.images[0]}" alt="${product.name}" />
      </a>

      <div class="product-card-content">
        <div class="product-meta">
          <span>${product.category}</span>
          <span>${product.audience}</span>
        </div>

        <h3>${product.name}</h3>

        <p class="product-description">${product.description}</p>

        <div class="price-row">
          ${hasPromotion ? `<span class="old-price">${formatCurrency(product.oldPrice)}</span>` : ""}
          <strong>${formatCurrency(product.price)}</strong>
        </div>

        <div class="card-actions">
          <a href="./produto.html?id=${product.id}" class="btn btn-light">Detalhes</a>
          <button type="button" class="btn btn-primary" data-add-cart="${product.id}">
            Comprar
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts(productsToRender) {
  const grid = document.getElementById("productsGrid");
  const emptyState = document.getElementById("emptyState");
  const resultCount = document.getElementById("resultCount");

  if (!grid || !emptyState || !resultCount) return;

  if (!productsToRender.length) {
    grid.innerHTML = "";
    emptyState.classList.remove("hidden");
    resultCount.textContent = "Nenhum produto encontrado.";
    return;
  }

  emptyState.classList.add("hidden");
  resultCount.textContent = `${productsToRender.length} produto(s) encontrado(s).`;
  grid.innerHTML = productsToRender.map(createProductCard).join("");

  grid.querySelectorAll("[data-add-cart]").forEach((button) => {
    button.addEventListener("click", () => {
      addToCart(Number(button.dataset.addCart), 1);
    });
  });
}

function applyFilters() {
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const audienceFilter = document.getElementById("audienceFilter");
  const brandFilter = document.getElementById("brandFilter");
  const sortFilter = document.getElementById("sortFilter");

  const searchTerm = normalizeText(searchInput.value);
  const selectedCategory = categoryFilter.value;
  const selectedAudience = audienceFilter.value;
  const selectedBrand = brandFilter.value;
  const selectedSort = sortFilter.value;

  currentProducts = PRODUCTS.filter((product) => {
    const matchesSearch =
      normalizeText(product.name).includes(searchTerm) ||
      normalizeText(product.description).includes(searchTerm) ||
      normalizeText(product.type).includes(searchTerm);

    const matchesCategory = selectedCategory === "todos" || product.category === selectedCategory;
    const matchesAudience = selectedAudience === "todos" || product.audience === selectedAudience;
    const matchesBrand = selectedBrand === "todos" || product.brand === selectedBrand;

    return matchesSearch && matchesCategory && matchesAudience && matchesBrand;
  });

  if (selectedSort === "lowest") {
    currentProducts.sort((a, b) => a.price - b.price);
  }

  if (selectedSort === "highest") {
    currentProducts.sort((a, b) => b.price - a.price);
  }

  if (selectedSort === "name") {
    currentProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (selectedSort === "featured") {
    currentProducts.sort((a, b) => Number(b.featured) - Number(a.featured));
  }

  renderProducts(currentProducts);
}

function setupCatalogEvents() {
  const filters = ["searchInput", "categoryFilter", "audienceFilter", "brandFilter", "sortFilter"];

  filters.forEach((id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const eventType = element.tagName === "INPUT" ? "input" : "change";
    element.addEventListener(eventType, applyFilters);
  });

  const clearFiltersBtn = document.getElementById("clearFiltersBtn");

  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener("click", () => {
      document.getElementById("searchInput").value = "";
      document.getElementById("categoryFilter").value = "todos";
      document.getElementById("audienceFilter").value = "todos";
      document.getElementById("brandFilter").value = "todos";
      document.getElementById("sortFilter").value = "featured";

      applyFilters();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fillFilterOptions();
  setupCatalogEvents();
  applyFilters();
});
