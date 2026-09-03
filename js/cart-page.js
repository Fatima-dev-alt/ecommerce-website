/* =========================================================
   CART PAGE SCRIPT
   Loaded after data.js and cart.js.
   ========================================================= */

function cartItemHTML(item) {
  return `
    <div class="cart-item" data-id="${item.product.id}">
      <img src="${item.product.image}" alt="${item.product.name}" onerror="handleImgError(this)">
      <div class="cart-item-info">
        <h4>${item.product.name}</h4>
        <div class="cat">${item.product.category}</div>
        <button class="cart-item-remove" data-action="remove" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
          Remove
        </button>
      </div>
      <div class="qty-selector" style="margin-bottom:0">
        <button type="button" data-action="decrease">-</button>
        <span>${item.qty}</span>
        <button type="button" data-action="increase">+</button>
      </div>
      <div class="cart-item-price">${formatPrice(item.lineTotal)}</div>
    </div>
  `;
}

function renderCartPage() {
  const details = getCartDetails();
  const listEl = document.getElementById("cartItemsList");
  const emptyEl = document.getElementById("emptyCartState");
  const layoutEl = document.getElementById("cartLayout");

  if (details.length === 0) {
    layoutEl.style.display = "none";
    emptyEl.style.display = "block";
    return;
  }

  layoutEl.style.display = "grid";
  emptyEl.style.display = "none";
  listEl.innerHTML = details.map(cartItemHTML).join("");

  const totalItems = details.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = details.reduce((sum, i) => sum + i.lineTotal, 0);

  document.getElementById("summaryItemCount").textContent = totalItems;
  document.getElementById("summarySubtotal").textContent = formatPrice(subtotal);
  document.getElementById("summaryTotal").textContent = formatPrice(subtotal);
}

function initCartEvents() {
  document.getElementById("cartItemsList").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;

    const itemEl = e.target.closest(".cart-item");
    const id = Number(itemEl.dataset.id);
    const action = btn.dataset.action;

    if (action === "remove") {
      removeFromCart(id);
    } else if (action === "increase" || action === "decrease") {
      const cart = getCart();
      const item = cart.find(i => i.id === id);
      const currentQty = item ? item.qty : 0;
      const newQty = action === "increase" ? currentQty + 1 : currentQty - 1;
      updateCartQty(id, newQty);
    }

    renderCartPage();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCartPage();
  initCartEvents();
});
