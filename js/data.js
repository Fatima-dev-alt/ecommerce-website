/* =========================================================
   PRODUCT DATA
   Shared across all pages. Loaded BEFORE cart.js and any
   page-specific script.
   ========================================================= */

/* A guaranteed-to-work inline fallback image (a simple grey box
   icon). If any product photo ever fails to load from the internet,
   JavaScript automatically swaps it in so the site never shows a
   broken image icon. */
const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Cpath d='M60 72h80v68a8 8 0 0 1-8 8H68a8 8 0 0 1-8-8V72z' fill='none' stroke='%23c7cdd6' stroke-width='6'/%3E%3Cpath d='M70 72V56a30 30 0 0 1 60 0v16' fill='none' stroke='%23c7cdd6' stroke-width='6'/%3E%3Ccircle cx='85' cy='95' r='6' fill='%23c7cdd6'/%3E%3Cpath d='M60 130l30-25 20 16 20-14 30 27' fill='none' stroke='%23c7cdd6' stroke-width='6'/%3E%3C/svg%3E";

/* Called via onerror="handleImgError(this)" on every <img> we render */
function handleImgError(img) {
  img.onerror = null;
  img.src = FALLBACK_IMAGE;
}

const PRODUCTS = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 59.99,
    discount: 20,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80&auto=format&fit=crop",
    rating: 4.6,
    description: "Over-ear wireless headphones with active noise cancellation, 30-hour battery life, and deep, balanced bass for music, calls, and gaming.",
    stock: 34
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    category: "Electronics",
    price: 129.00,
    discount: 15,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80&auto=format&fit=crop",
    rating: 4.4,
    description: "Track heart rate, sleep, and workouts with this sleek smartwatch. Water-resistant with a 7-day battery life and smartphone notifications.",
    stock: 21
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    price: 45.00,
    discount: 0,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80&auto=format&fit=crop",
    rating: 4.2,
    description: "Compact speaker with rich 360° sound, deep bass, and IPX7 waterproofing — perfect for outdoor adventures and pool days.",
    stock: 50
  },
  {
    id: 4,
    name: "Ultra-Slim Laptop 14-inch",
    category: "Electronics",
    price: 699.00,
    discount: 8,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80&auto=format&fit=crop",
    rating: 4.7,
    description: "Lightweight 14-inch laptop with all-day battery life, fast SSD storage, and a crisp full-HD display for work and entertainment.",
    stock: 12
  },
  {
    id: 5,
    name: "Classic Denim Jacket",
    category: "Fashion",
    price: 75.00,
    discount: 25,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80&auto=format&fit=crop",
    rating: 4.5,
    description: "A timeless denim jacket with a comfortable regular fit, sturdy stitching, and a versatile look that pairs with anything.",
    stock: 18
  },
  {
    id: 6,
    name: "Floral Summer Dress",
    category: "Fashion",
    price: 48.00,
    discount: 0,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80&auto=format&fit=crop",
    rating: 4.3,
    description: "Lightweight, breathable summer dress with a flattering silhouette and cheerful floral print — perfect for warm days.",
    stock: 27
  },
  {
    id: 7,
    name: "Classic Cotton T-Shirt",
    category: "Fashion",
    price: 14.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80&auto=format&fit=crop",
    rating: 4.1,
    description: "Soft, breathable 100% cotton t-shirt with a classic fit. A wardrobe essential available in everyday colors.",
    stock: 120
  },
  {
    id: 8,
    name: "Running Sneakers",
    category: "Shoes",
    price: 79.99,
    discount: 10,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80&auto=format&fit=crop",
    rating: 4.6,
    description: "Lightweight running shoes with responsive cushioning and a breathable mesh upper, built for long-distance comfort.",
    stock: 0
  },
  {
    id: 9,
    name: "Canvas Casual Shoes",
    category: "Shoes",
    price: 39.99,
    discount: 0,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80&auto=format&fit=crop",
    rating: 4.0,
    description: "Everyday canvas sneakers with a durable rubber sole and relaxed fit — easy to dress up or down.",
    stock: 45
  },
  {
    id: 10,
    name: "Leather Ankle Boots",
    category: "Shoes",
    price: 95.00,
    discount: 12,
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&q=80&auto=format&fit=crop",
    rating: 4.5,
    description: "Genuine leather ankle boots with a cushioned insole and sturdy sole, built to last through every season.",
    stock: 16
  },
  {
    id: 11,
    name: "Leather Wallet",
    category: "Accessories",
    price: 24.50,
    discount: 0,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&q=80&auto=format&fit=crop",
    rating: 4.3,
    description: "Slim genuine leather wallet with multiple card slots and a coin pocket, designed for everyday durability.",
    stock: 8
  },
  {
    id: 12,
    name: "Aviator Sunglasses",
    category: "Accessories",
    price: 34.99,
    discount: 18,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80&auto=format&fit=crop",
    rating: 4.4,
    description: "Classic aviator sunglasses with UV400 protection and polarized lenses for glare-free clarity outdoors.",
    stock: 56
  },
  {
    id: 13,
    name: "Travel Backpack",
    category: "Accessories",
    price: 65.00,
    discount: 0,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80&auto=format&fit=crop",
    rating: 4.6,
    description: "Spacious, water-resistant travel backpack with padded laptop compartment and ergonomic straps for all-day comfort.",
    stock: 19
  },
  {
    id: 14,
    name: "Modern Table Lamp",
    category: "Home & Living",
    price: 42.00,
    discount: 0,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80&auto=format&fit=crop",
    rating: 4.2,
    description: "A minimalist table lamp with warm, adjustable lighting — a stylish addition to any desk or bedside table.",
    stock: 30
  },
  {
    id: 15,
    name: "Ceramic Coffee Mug Set",
    category: "Home & Living",
    price: 22.00,
    discount: 15,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80&auto=format&fit=crop",
    rating: 4.5,
    description: "Set of 4 handcrafted ceramic mugs, microwave and dishwasher safe, perfect for coffee, tea, or a cozy gift.",
    stock: 40
  }
];

/* ---------- SHARED HELPER FUNCTIONS ---------- */

function formatPrice(amount) {
  return "$" + Number(amount).toFixed(2);
}

function getDiscountedPrice(product) {
  if (!product.discount) return product.price;
  return product.price - (product.price * product.discount / 100);
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === Number(id));
}

function renderStars(rating) {
  const full = Math.round(rating);
  let html = '<span class="stars">';
  for (let i = 1; i <= 5; i++) {
    html += i <= full
      ? '<svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z"/></svg>'
      : '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z"/></svg>';
  }
  html += '</span>';
  return html;
}

function getStockLabel(stock) {
  if (stock === 0) return { text: "Out of Stock", cls: "out" };
  if (stock <= 10) return { text: `Only ${stock} left in stock`, cls: "low" };
  return { text: "In Stock", cls: "in" };
}
