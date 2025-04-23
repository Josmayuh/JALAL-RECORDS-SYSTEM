document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const dashboard = document.getElementById('dashboard');
    const productForm = document.getElementById('productForm');
    const inventoryTable = document.getElementById('inventoryTable').getElementsByTagName('tbody')[0];
    const searchInput = document.getElementById('searchInput');
    const dateFilter = document.getElementById('dateFilter');

    const masterPassword = 'Josmayuh@2320.';
    const users = [
        { email: 'admin@example.com', password: 'admin123' },
        { email: 'user@example.com', password: 'user123' }
    ];

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.email.value;
        const password = loginForm.password.value;
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            loginForm.style.display = 'none';
            dashboard.style.display = 'block';
        } else {
            alert('Invalid credentials');
        }
    });

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(productForm);
        const row = inventoryTable.insertRow();
        formData.forEach((value, key) => {
            const cell = row.insertCell();
            cell.textContent = value;
        });
        const dateCell = row.insertCell();
        dateCell.textContent = new Date().toLocaleDateString();
        productForm.reset();
    });

    function filterInventory() {
        const query = searchInput.value.toLowerCase();
        const date = dateFilter.value;
        const rows = inventoryTable.getElementsByTagName('tr');

        Array.from(rows).forEach(row => {
            const cells = row.getElementsByTagName('td');
            const text = Array.from(cells).map(td => td.textContent.toLowerCase()).join(' ');
            const dateMatch = !date || row.lastChild.textContent === date;
            row.style.display = text.includes(query) && dateMatch ? '' : 'none';
        });
    }

    searchInput.addEventListener('input', filterInventory);
    dateFilter.addEventListener('change', filterInventory);
});
