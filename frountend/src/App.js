import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async () => {
    await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price, description })
    });

    setName("");
    setPrice("");
    setDescription("");
    fetchProducts();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Campus Marketplace</h1>

      <h3>Add Product</h3>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <br />
      <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
      <br />
      <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <br /><br />
      <button onClick={addProduct}>Add</button>

      <hr />

      <h3>Products</h3>
      {products.map((p, i) => (
        <div key={i} style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
          <h4>{p.name}</h4>
          <p>₹{p.price}</p>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
