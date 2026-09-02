/* =========================================================
   HOME PAGE SCRIPT
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

function renderFeaturedProducts() {
  const container = document.getElementById("featuredProducts");
  if (!container) return;

  let featured = PRODUCTS.filter(p => p.rating >= 4.4).slice(0, 8);
  if (featured.length === 0) featured = PRODUCTS.slice(0, 8);

  container.innerHTML = featured.map(productCardHTML).join("");
}

function initNewsletterForm() {
  const form = document.getElementById("newsletterForm");
  const msg = document.getElementById("newsletterMsg");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    const email = input.value.trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg.style.color = "#f87171";
      msg.textContent = "Please enter a valid email address.";
      return;
    }

    msg.style.color = "#4ade80";
    msg.textContent = "Thanks for subscribing! Check your inbox soon.";
    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedProducts();
  initNewsletterForm();
});
