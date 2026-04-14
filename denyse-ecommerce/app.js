const products = [
  { id: 1, name: "Ergonomic Code Keyboard", price: 149.99, icon: "⌨️" },
  { id: 2, name: "Ultra-Wide Dev Monitor", price: 499.00, icon: "🖥️" },
  { id: 3, name: "Noise-Cancelling Headphones", price: 249.50, icon: "🎧" },
  { id: 4, name: "Wireless Master Mouse", price: 99.99, icon: "🖱️" },
  { id: 5, name: "Adjustable Standing Desk", price: 599.00, icon: "🪑" },
  { id: 6, name: "1080p Web Camera", price: 79.99, icon: "📷" }
];

let cart = [];

const productsContainer = document.getElementById('products-container');
const cartBtn = document.getElementById('cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartCount = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');

function renderProducts() {
  productsContainer.innerHTML = '';
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
      <div class="product-img">${product.icon}</div>
      <h3>${product.name}</h3>
      <p class="price">$${product.price.toFixed(2)}</p>
      <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productsContainer.appendChild(productCard);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingCartItem = cart.find(item => item.id === productId);

  if (existingCartItem) {
    existingCartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
  openCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.innerText = totalItems;

  cartItemsContainer.innerHTML = '';

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    cartTotalPrice.innerText = '$0.00';
    return;
  }

  let totalCost = 0;

  cart.forEach(item => {
    totalCost += item.price * item.quantity;

    const cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item');

    cartItemDiv.innerHTML = `
      <div class="cart-item-info">
        <h4>${item.name} x${item.quantity}</h4>
        <p class="item-price">$${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
    `;

    cartItemsContainer.appendChild(cartItemDiv);
  });

  cartTotalPrice.innerText = `$${totalCost.toFixed(2)}`;
}

function openCart() {
  cartSidebar.classList.add('active');
  cartOverlay.classList.add('active');
}

function closeCart() {
  cartSidebar.classList.remove('active');
  cartOverlay.classList.remove('active');
}

cartBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

renderProducts();