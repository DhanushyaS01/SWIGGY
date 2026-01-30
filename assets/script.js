
const menuItems = [
    { id: 1, name: "Burger", price: 100, image: "../images/burger.jpg" },
    { id: 2, name: "Pizza", price: 200, image: "../images/pizza.jpg" },
    { id: 3, name: "Fries", price: 80, image: "../images/fries.jpg" },
    { id: 4, name: "Biryani", price: 150, image: "../images/biryani.jpg" },
    { id: 5, name: "Wrap", price: 120, image: "../images/wrap.jpg" },
    { id: 6, name: "Momos", price: 90, image: "../images/momos.jpg" }
  ];  
  

  if (document.getElementById("menu-list")) {
    menuItems.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="card-content">
          <h4>${item.name}</h4>
          <p>₹${item.price}</p>
          <button onclick="addToCart(${item.id})">Add to Cart</button>
        </div>
      `;
      document.getElementById("menu-list").appendChild(card);
    });
    updateCartBadge();
  }
 
  function addToCart(id) {
    const item = menuItems.find(i => i.id === id);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(c => c.id === id);
  
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...item, qty: 1 });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
    updateCartBadge();
    alert(`${item.name} added to cart!`);
  }
  
  
  if (document.getElementById("cart-items")) {
    updateCartUI();
  }
  
  
  function updateCartUI() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cart-items");
    container.innerHTML = "";
    let total = 0;
  
    if (cart.length === 0) {
      container.innerHTML = "<p>Your cart is empty</p>";
    } else {
      cart.forEach(item => {
        const subtotal = item.price * item.qty;
        total += subtotal;
  
        const row = document.createElement("div");
        row.className = "cart-item";
        row.innerHTML = `
          <p>${item.name}</p>
          <div class="qty-controls">
            <button onclick="changeQty(${item.id}, -1)">–</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${item.id}, 1)">+</button>
          </div>
          <p>₹${subtotal}</p>
        `;
        container.appendChild(row);
      });
    }
  
    const totalEl = document.getElementById("total");
    if (totalEl) totalEl.textContent = total;
  
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", total);
    updateCartBadge();
  }
  
  
  function changeQty(id, delta) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const item = cart.find(c => c.id === id);
    if (!item) return;
  
    item.qty += delta;
    if (item.qty < 1) {
      cart = cart.filter(c => c.id !== id);
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
    updateCartBadge();
  }
  
  
  if (document.getElementById("checkout-total")) {
    const total = localStorage.getItem("total") || 0;
    document.getElementById("checkout-total").textContent = total;
  }
  
  
  function payNow() {
    alert("🎉 Payment successful! Thank you for ordering.");
    localStorage.removeItem("cart");
    localStorage.removeItem("total");
    window.location.href = "../index.html";
  }
  
  
  function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const badge = document.getElementById("cart-count");
    if (badge) badge.textContent = totalCount;
  }
  
  
