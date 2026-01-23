const API = "http://localhost:5000/api/products";
console.log("JS loaded");
/* LOAD PRODUCTS */
if (document.getElementById("products")) {
  fetch(API)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("products");
      container.innerHTML = "";

      data.forEach(product => {
        container.innerHTML += `
          <div class="card">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <small>${product.discreption}</small>
          </div>
        `;
      });
    });
}

/* ADD PRODUCT */
const form = document.getElementById("productForm");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const product = {
      name: document.getElementById("name").value,
      price: document.getElementById("price").value,
      category: document.getElementById("category").value
    };

    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    })
    .then(() => {
      alert("Product Added ");
      window.location.href = "index.html";
    });
  });
}
document.getElementById("addBtn").addEventListener("click", () => {
  window.location.href = "add.html";
});




//const API = "http://localhost:5000/api";


