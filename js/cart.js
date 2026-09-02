/* =========================================================
   CART LOGIC (LocalStorage) + SHARED UI HELPERS
   Loaded on every page, AFTER data.js.
   ========================================================= */

const CART_KEY = "shopnest_cart";

/* Cart is stored as an array of { id, qty } */
function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, qty = 1) {
  const product = getProductById(productId);
  if (!product || product.stock === 0) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === Number(productId));

  if (existing) {
    existing.qty = Math.min(existing.qty + qty, product.stock);
  } else {
    cart.push({ id: Number(productId), qty: Math.min(qty, product.stock) });
  }

  saveCart(cart);
  showToast(`${product.name} added to cart`);
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== Number(productId));
  saveCart(cart);
}

function updateCartQty(productId, newQty) {
  const product = getProductById(productId);
  let cart = getCart();
  const item = cart.find(i => i.id === Number(productId));
  if (!item) return;

  if (newQty <= 0) {
    cart = cart.filter(i => i.id !== Number(productId));
  } else {
    item.qty = Math.min(newQty, product ? product.stock : newQty);
  }
  saveCart(cart);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

/* Returns full cart details with product info + line totals,
   skipping any cart entries whose product no longer exists. */
function getCartDetails() {
  return getCart()
    .map(item => {
      const product = getProductById(item.id);
      if (!product) return null;
      const unitPrice = getDiscountedPrice(product);
      return {
        product,
        qty: item.qty,
        unitPrice,
        lineTotal: unitPrice * item.qty
      };
    })
    .filter(Boolean);
}

function getCartTotal() {
  return getCartDetails().reduce((sum, item) => sum + item.lineTotal, 0);
}

function updateCartBadge() {
  const count = getCartCount();
  document.querySelectorAll(".cart-count").forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });
}

/* ---------- TOAST NOTIFICATIONS ---------- */
function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.style.position = "fixed";
    container.style.bottom = "24px";
    container.style.left = "50%";
    container.style.transform = "translateX(-50%)";
    container.style.zIndex = "9999";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.gap = "8px";
    container.style.alignItems = "center";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.background = "#0f172a";
  toast.style.color = "#fff";
  toast.style.padding = "12px 22px";
  toast.style.borderRadius = "30px";
  toast.style.fontSize = "13px";
  toast.style.fontWeight = "600";
  toast.style.boxShadow = "0 8px 24px rgba(0,0,0,0.2)";
  toast.style.opacity = "0";
  toast.style.transition = "opacity 0.25s ease, transform 0.25s ease";
  toast.style.transform = "translateY(10px)";
  toast.style.maxWidth = "90vw";
  toast.style.textAlign = "center";
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";
  });

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 250);
  }, 2200);
}

/* ---------- MOBILE NAV TOGGLE ---------- */
function initMobileNav() {
  const toggle = document.getElementById("navMenuToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
  });
}

/* ---------- INIT ON EVERY PAGE ---------- */
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  initMobileNav();
});
