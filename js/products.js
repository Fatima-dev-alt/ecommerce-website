/* =========================================================
   PRODUCTS PAGE SCRIPT
   Search, category filter, price filter, sorting.
   Loaded after data.js and cart.js.
   ========================================================= */

function productCardHTML(p) {
  const discounted = getDiscountedPrice(p);
  return `
    <div class="product-card">
      ${p.discount > 0 ? `<span class="discount-badge">-${p.discount}%</span>` : ""}
      ${p.stock === 0 ? `<span class="stock-badge">Sold Out</span>` : ""}
      <a href="product-details.html?id=${p.id}" class="product-thumb">
        <img src="${p.image}" alt="${p.name}" onerror="handleImgError(this)">
      </a>
      <div class="product-info">
        <span class="product-category">${p.category}</span>
        <a href="product-details.html?id=${p.id}"><h3 class="product-name">${p.name}</h3></a>
        <div class="product-rating">${renderStars(p.rating)} <span>(${p.rating})</span></div>
        <div class="product-price">
          <span class="price-current">${formatPrice(discounted)}</span>
          ${p.discount > 0 ? `<span class="price-old">${formatPrice(p.price)}</span>` : ""}
        </div>
      </div>
      <div class="product-actions">
        <button class="btn btn-primary" onclick="addToCart(${p.id})" ${p.stock === 0 ? "disabled" : ""}>Add to Cart</button>
        <a href="product-details.html?id=${p.id}" class="btn btn-outline">View</a>
      </div>
    </div>
  `;
}

function getFilteredProducts() {
  const search = (document.getElementById("searchInput").value || "").trim().toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  const priceRange = document.getElementById("priceFilter").value;
  const sort = document.getElementById("sortFilter").value;

  let list = PRODUCTS.filter(p => {
    const matchesSearch =
      !search ||
      p.name.toLowerCase().includes(search) ||
      p.category.toLowerCase().includes(search);

    const matchesCategory = category === "all" || p.category === category;

    const price = getDiscountedPrice(p);
    let matchesPrice = true;
    if (priceRange === "under25") matchesPrice = price < 25;
    else if (priceRange === "25-50") matchesPrice = price >= 25 && price <= 50;
    else if (priceRange === "50-100") matchesPrice = price > 50 && price <= 100;
    else if (priceRange === "over100") matchesPrice = price > 100;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  if (sort === "price-asc") {
    list = list.slice().sort((a, b) => getDiscountedPrice(a) - getDiscountedPrice(b));
  } else if (sort === "price-desc") {
    list = list.slice().sort((a, b) => getDiscountedPrice(b) - getDiscountedPrice(a));
  } else if (sort === "rating-desc") {
    list = list.slice().sort((a, b) => b.rating - a.rating);
  }

  return list;
}

function renderProducts() {
  const grid = document.getElementById("productsGrid");
  const empty = document.getElementById("emptyState");
  const countEl = document.getElementById("filtersCount");
  const list = getFilteredProducts();

  countEl.textContent = `Showing ${list.length} of ${PRODUCTS.length} products`;

  if (list.length === 0) {
    grid.innerHTML = "";
    grid.style.display = "none";
    empty.style.display = "block";
  } else {
    grid.style.display = "grid";
    empty.style.display = "none";
    grid.innerHTML = list.map(productCardHTML).join("");
  }
}

function applyUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const search = params.get("search");
  const category = params.get("category");

  if (search) document.getElementById("searchInput").value = search;

  if (category) {
    const select = document.getElementById("categoryFilter");
    const optionExists = Array.from(select.options).some(o => o.value === category);
    if (optionExists) select.value = category;
  }
}

function initFilters() {
  document.getElementById("searchInput").addEventListener("input", renderProducts);
  document.getElementById("categoryFilter").addEventListener("change", renderProducts);
  document.getElementById("priceFilter").addEventListener("change", renderProducts);
  document.getElementById("sortFilter").addEventListener("change", renderProducts);
}

document.addEventListener("DOMContentLoaded", () => {
  applyUrlParams();
  initFilters();
  renderProducts();
});
