function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const loginMessage = document.getElementById("loginMessage");

  // Replace with your master admin email and password
  const adminEmail = "josemutuak@gmail.com";
  const adminPassword = "Josmayuh@2320.";

  if (email === adminEmail && password === adminPassword) {
    loginMessage.style.color = "green";
    loginMessage.textContent = "Login successful! Redirecting...";
    
    // Simulate dashboard load
    setTimeout(() => {
      document.getElementById("loginSection").innerHTML = `
        <h2>Welcome, Administrator</h2>
        <p>This is your dashboard. You can now manage products, users, documents, and more.</p>
        <button onclick="alert('Coming soon: Add New Product')">Add Product</button>
        <button onclick="alert('Coming soon: View Stock')">View Stock</button>
        <button onclick="alert('Coming soon: Upload Document')">Upload Agreement</button>
      `;
    }, 1000);
  } else {
    loginMessage.style.color = "red";
    loginMessage.textContent = "Invalid email or password!";
  }
}
