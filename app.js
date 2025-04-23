const data = [
  {
    product: "Printer",
    model: "Kyocera M2040dn",
    serial: "KYO12345",
    price: "KSh 40,000",
    counter: "2500",
    date: "2025-04-24"
  },
  {
    product: "Toner",
    model: "Bizhub TN217",
    serial: "TN217001",
    price: "KSh 6,000",
    counter: "-",
    date: "2025-04-20"
  }
];

const tbody = document.querySelector("#inventoryTable tbody");
const searchBar = document.getElementById("searchBar");

function displayData(filtered = data) {
  tbody.innerHTML = "";
  filtered.forEach(item => {
    const row = `<tr>
      <td>${item.product}</td>
      <td>${item.model}</td>
      <td>${item.serial}</td>
      <td>${item.price}</td>
      <td>${item.counter}</td>
      <td>${item.date}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

searchBar.addEventListener("input", () => {
  const term = searchBar.value.toLowerCase();
  const filtered = data.filter(d =>
    Object.values(d).some(val =>
      val.toLowerCase().includes(term)
    )
  );
  displayData(filtered);
});

displayData();
