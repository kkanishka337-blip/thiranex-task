const products = [
  {id: 1, name: "Wireless Mouse", price: 499, img: "https://via.placeholder.com/150/FF0000"},
  {id: 2, name: "Keyboard", price: 899, img: "https://via.placeholder.com/150/00FF00"},
  {id: 3, name: "Headphones", price: 1299, img: "https://via.placeholder.com/150/0000FF"}
];

let cart = [];

function showProducts() {
  let html = "";
  products.forEach(p => {
    html += `<div style="border:1px solid #ccc; padding:10px; width:180px; text-align:center; display:inline-block; margin:10px">
      <img src="${p.img}" width="150"><br>
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>`;
  });
  document.getElementById("product-list").innerHTML = html;
}

function addToCart(id) {
  cart.push(id);
  document.getElementById("cart-count").innerText = cart.length;
  alert(products.find(x => x.id == id).name + " Added to Cart!");
}

showProducts();