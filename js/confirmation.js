/* =========================================================
   ORDER CONFIRMATION PAGE SCRIPT
   Loaded after data.js and cart.js.
   ========================================================= */

function renderConfirmation() {
  const raw = localStorage.getItem("shopnest_last_order");

  if (!raw) {
    window.location.href = "index.html";
    return;
  }

  const order = JSON.parse(raw);

  document.getElementById("confOrderNumber").textContent = "Order #" + order.orderNumber;
  document.getElementById("confCustomerName").textContent = order.customer.name;
  document.getElementById("confCustomerEmail").textContent = order.customer.email;
  document.getElementById("confCustomerAddress").textContent =
    `${order.customer.address}, ${order.customer.city}, ${order.customer.postal}`;
  document.getElementById("confPayment").textContent = order.customer.payment;

  const itemsList = document.getElementById("confItemsList");
  itemsList.innerHTML = order.items
    .map(
      (i) => `
    <div class="summary-row">
      <span>${i.name} &times; ${i.qty}</span>
      <span>${formatPrice(i.lineTotal)}</span>
    </div>
  `
    )
    .join("");

  document.getElementById("confTotal").textContent = formatPrice(order.total);
}

document.addEventListener("DOMContentLoaded", renderConfirmation);
