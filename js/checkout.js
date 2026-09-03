/* =========================================================
   CHECKOUT PAGE SCRIPT
   Loaded after data.js and cart.js.
   ========================================================= */

const LAST_ORDER_KEY = "shopnest_last_order";

function renderCheckoutSummary() {
  const details = getCartDetails();

  if (details.length === 0) {
    window.location.href = "cart.html";
    return;
  }

  const list = document.getElementById("checkoutItemsList");
  list.innerHTML = details
    .map(
      (i) => `
    <div class="summary-mini-item">
      <span>${i.product.name} &times; ${i.qty}</span>
      <span>${formatPrice(i.lineTotal)}</span>
    </div>
  `
    )
    .join("");

  const total = details.reduce((sum, i) => sum + i.lineTotal, 0);
  document.getElementById("checkoutTotal").textContent = formatPrice(total);
}

function setFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const errorEl = field.querySelector(".field-error");
  if (message) {
    field.classList.add("error");
    errorEl.textContent = message;
  } else {
    field.classList.remove("error");
    errorEl.textContent = "";
  }
}

function validateCheckoutForm(data) {
  let valid = true;

  if (data.name.trim().length < 2) {
    setFieldError("fieldName", "Please enter your full name.");
    valid = false;
  } else setFieldError("fieldName", "");

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    setFieldError("fieldEmail", "Please enter a valid email address.");
    valid = false;
  } else setFieldError("fieldEmail", "");

  if (!/^[0-9+\-\s()]{7,}$/.test(data.phone)) {
    setFieldError("fieldPhone", "Please enter a valid phone number.");
    valid = false;
  } else setFieldError("fieldPhone", "");

  if (data.city.trim().length < 2) {
    setFieldError("fieldCity", "Please enter your city.");
    valid = false;
  } else setFieldError("fieldCity", "");

  if (data.address.trim().length < 5) {
    setFieldError("fieldAddress", "Please enter your full street address.");
    valid = false;
  } else setFieldError("fieldAddress", "");

  if (data.postal.trim().length < 3) {
    setFieldError("fieldPostal", "Please enter a valid postal code.");
    valid = false;
  } else setFieldError("fieldPostal", "");

  return valid;
}

function generateOrderNumber() {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 90 + 10);
  return "SN" + timestamp + random;
}

function initCheckoutForm() {
  const form = document.getElementById("checkoutForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById("custName").value,
      email: document.getElementById("custEmail").value,
      phone: document.getElementById("custPhone").value,
      address: document.getElementById("custAddress").value,
      city: document.getElementById("custCity").value,
      postal: document.getElementById("custPostal").value,
      payment: form.querySelector('input[name="payment"]:checked').value
    };

    if (!validateCheckoutForm(data)) return;

    const details = getCartDetails();
    const total = details.reduce((sum, i) => sum + i.lineTotal, 0);

    const order = {
      orderNumber: generateOrderNumber(),
      customer: data,
      items: details.map((i) => ({
        name: i.product.name,
        qty: i.qty,
        unitPrice: i.unitPrice,
        lineTotal: i.lineTotal
      })),
      total: total,
      date: new Date().toISOString()
    };

    localStorage.setItem(LAST_ORDER_KEY, JSON.stringify(order));
    localStorage.removeItem(CART_KEY);

    window.location.href = "order-confirmation.html";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCheckoutSummary();
  initCheckoutForm();
});
