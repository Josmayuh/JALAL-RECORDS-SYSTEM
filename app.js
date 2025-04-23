function saveProduct() {
  const product = {
    name: document.getElementById("name").value,
    category: document.getElementById("category").value,
    subCategory: document.getElementById("subCategory").value,
    model: document.getElementById("model").value,
    serial: document.getElementById("serial").value,
    price: document.getElementById("price").value,
    count: document.getElementById("count").value,
    date: document.getElementById("date").value,
  };

  if (!product.name || !product.category || !product.model || !product.serial) {
    alert("Please fill in all required fields.");
    return;
  }

  const products = JSON.parse(localStorage.getItem("products")) || [];
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));

  document.querySelectorAll("input").forEach(input => input.value = "");
  renderProducts();
}

let sortKey = '';
let sortAsc = true;

function renderProducts() {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const tableBody = document.querySelector("#productTable tbody");
  const searchVal = document.getElementById("searchInput").value.toLowerCase();
  const catFilter = document.getElementById("categoryFilter").value;

  let filtered = products.filter(p => {
    return (
      (!catFilter || p.category === catFilter) &&
      (!searchVal ||
        p.name.toLowerCase().includes(searchVal) ||
        p.model.toLowerCase().includes(searchVal) ||
        p.serial.toLowerCase().includes(searchVal) ||
        p.date.includes(searchVal))
    );
  });

  if (sortKey) {
    filtered.sort((a, b) => {
      const valA = a[sortKey].toString().toLowerCase();
      const valB = b[sortKey].toString().toLowerCase();
      return sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
    });
  }

  tableBody.innerHTML = filtered.map(p => `
    <tr>
      <td>${p.name}</td>
      <td>${p.category}</td>
      <td>${p.subCategory}</td>
      <td>${p.model}</td>
      <td>${p.serial}</td>
      <td>${p.price}</td>
      <td>${p.count}</td>
      <td>${p.date}</td>
    </tr>
  `).join("");

  updateFilterOptions(products);
}

function updateFilterOptions(products) {
  const uniqueCats = [...new Set(products.map(p => p.category))];
  const filter = document.getElementById("categoryFilter");
  filter.innerHTML = `<option value="">All Categories</option>` +
    uniqueCats.map(c => `<option value="${c}">${c}</option>`).join("");
}

function sortTable(key) {
  if (sortKey === key) sortAsc = !sortAsc;
  else {
    sortKey = key;
    sortAsc = true;
  }
  renderProducts();
}

window.onload = renderProducts;
