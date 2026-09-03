# ShopNest - E-Commerce Website

## Project Description
ShopNest is a modern, fully responsive e-commerce website built with **HTML5, CSS3, and Vanilla JavaScript**. Shoppers can browse products, search and filter by category or price, view detailed product pages, manage a shopping cart, and complete a full checkout flow — all with data persisted in the browser using LocalStorage.

## Technologies Used
- HTML5
- CSS3 (Flexbox, Grid, CSS Variables, Media Queries, Transitions)
- Vanilla JavaScript (ES6+)
- Git & GitHub
- GitHub Pages for deployment

## Pages
1. **Home (`index.html`)** — Hero banner, shop-by-category grid, featured products, special offer banner, customer testimonials, and a newsletter signup.
2. **Products (`products.html`)** — Full product listing with live search, category filtering, price-range filtering, and sorting (price low→high, high→low, rating).
3. **Product Details (`product-details.html`)** — Large product image, price with discount, star rating, description, stock status, quantity selector, and related products from the same category.
4. **Shopping Cart (`cart.html`)** — View cart items, increase/decrease quantity, remove items, and see a live-updating subtotal and total. Cart data is saved in LocalStorage and survives a page refresh.
5. **Checkout (`checkout.html`)** — Shipping details form with validation, payment method selection, and a live order summary.
6. **Order Confirmation (`order-confirmation.html`)** — Success message, generated order number, customer details, ordered products, and total amount.

## Features
- 15 dummy products across 5 categories (Electronics, Fashion, Shoes, Accessories, Home & Living)
- Real-time product search, category filtering, price filtering, and sorting
- Shopping cart with LocalStorage persistence (survives page refresh)
- Quantity selectors with stock-limit enforcement
- Checkout form with full client-side validation (name, email, phone, address, city, postal code)
- Auto-generated order numbers and an order confirmation summary
- Toast notifications when items are added to the cart
- Automatic image fallback — if a product photo fails to load, JavaScript swaps in a placeholder so the site never shows a broken image icon
- Fully responsive design for desktop, tablet, and mobile, including a mobile hamburger menu
- Consistent design system with reusable CSS components (buttons, cards, badges, forms)

## Product Data
Product data (15 items) is defined in `js/data.js`, with each product containing an id, name, category, price, discount, image, rating, description, and stock quantity.

## How to Run the Project
1. Clone or download this repository.
2. Open `index.html` in any modern web browser.
3. Browse products, add items to your cart, and complete a checkout — no server or build steps required.

## Screenshots
_Add your desktop and mobile screenshots here._

## Live Demo
_Add your GitHub Pages live demo link here._
