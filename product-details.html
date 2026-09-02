/* =========================================================
   PRODUCT DETAILS PAGE SCRIPT
   Loaded after data.js and cart.js.
   ========================================================= */

let currentQty = 1;

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

function getIdFromUrl() {
  return new URLSearchParams(window.location.search).get("id");
}

function setupQtySelector(product) {
  currentQty = product.stock === 0 ? 0 : 1;
  document.getElementById("qtyValue").textContent = currentQty;

  const minusBtn = document.getElementById("qtyMinus");
  const plusBtn = document.getElementById("qtyPlus");

  if (product.stock === 0) {
    minusBtn.disabled = true;
    plusBtn.disabled = true;
  }

  minusBtn.onclick = () => {
    if (currentQty > 1) {
      currentQty--;
      document.getElementById("qtyValue").textContent = currentQty;
    }
  };

  plusBtn.onclick = () => {
    if (currentQty < product.stock) {
      currentQty++;
      document.getElementById("qtyValue").textContent = currentQty;
    }
  };

  const addBtn = document.getElementById("addToCartBtn");
  if (product.stock === 0) {
    addBtn.disabled = true;
    addBtn.textContent = "Out of Stock";
  } else {
    addBtn.onclick = () => addToCart(product.id, currentQty);
  }
}

function renderRelatedProducts(product) {
  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const container = document.getElementById("relatedProducts");
  const section = document.getElementById("relatedSection");

  if (related.length === 0) {
    if (section) section.style.display = "none";
    return;
  }
  container.innerHTML = related.map(productCardHTML).join("");
}

function renderProductDetails() {
  const id = getIdFromUrl();
  const product = getProductById(id);

  if (!product) {
    window.location.href = "products.html";
    return;
  }

  document.title = product.name + " | ShopNest";
  document.getElementById("breadcrumbName").textContent = product.name;

  const img = document.getElementById("pdImage");
  img.src = product.image;
  img.alt = product.name;

  document.getElementById("pdCategory").textContent = product.category;
  document.getElementById("pdName").textContent = product.name;

  const discounted = getDiscountedPrice(product);
  document.getElementById("pdRating").innerHTML =
    renderStars(product.rating) + ` <span>(${product.rating} rating)</span>`;

  let priceHtml = `<span class="price-current">${formatPrice(discounted)}</span>`;
  if (product.discount > 0) {
    priceHtml += `<span class="price-old">${formatPrice(product.price)}</span><span class="discount-badge">-${product.discount}%</span>`;
  }
  document.getElementById("pdPrice").innerHTML = priceHtml;
  document.getElementById("pdDesc").textContent = product.description;

  const stockInfo = getStockLabel(product.stock);
  const stockEl = document.getElementById("pdStock");
  stockEl.textContent = stockInfo.text;
  stockEl.className = "pd-stock " + stockInfo.cls;

  setupQtySelector(product);
  renderRelatedProducts(product);
}

document.addEventListener("DOMContentLoaded", renderProductDetails);
