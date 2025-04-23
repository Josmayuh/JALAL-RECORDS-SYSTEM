const masterPassword = "Josmayuh@2320.";

function login() {
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPassword").value;

  if (email && pass === masterPassword) {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("product-entry").style.display = "block";
  } else {
    alert("Incorrect login credentials.");
  }
}

function logout() {
  document.getElementById("product-entry").style.display = "none";
  document.getElementById("login-page").style.display = "block";
}

function saveProduct() {
  const name = document.getElementById("productName").value;
  const category = document.getElementById("category").value;
  const subCategory = document.getElementById("subCategory").value;
  const model = document.getElementById("model").value;
  const serial = document.getElementById("serialNumber").value;
  const price = document.getElementById("price").value;
  const count = document.getElementById("stockCount").value;
  const date = document.getElementById("entryDate").value;

  const product = {
    name, category, subCategory, model, serial, price, count, date
  };

  let products = JSON.parse(localStorage.getItem("products")) || [];
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));

  alert("Product saved successfully!");
  
  // Clear fields after saving
  document.querySelectorAll("#product-entry input").forEach(i => i.value = "");
}
