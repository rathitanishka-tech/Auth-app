const API = "http://localhost:5000";

function showMessage(msg, isError = false) {
  const el = document.getElementById("message");
  el.innerText = msg;
  el.className = isError ? "message error" : "message success";
}

// REGISTER
async function register() {
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  

  if (!username || !email || !password) {
    showMessage("All fields required", true);
    return;
  }

  try {
    showMessage("Registering...");

    const res = await fetch(`${API}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
        role: "ADMIN"
      })
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    showMessage("Registered successfully!");
  } catch (err) {
    showMessage(err.message || "Error occurred", true);
  }
}

// LOGIN
async function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    showMessage("Enter username & password", true);
    return;
  }

  try {
    showMessage("Logging in...");

    const res = await fetch(`${API}/login`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    showMessage("Login successful!");

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 800);

  } catch (err) {
    showMessage(err.message || "Login failed", true);
  }
}

// GET CURRENT USER
async function getCurrentUser() {
  try {
    const res = await fetch(`${API}/current-user`, {
      method: "GET",
      credentials: "include"
    });

    const data = await res.json();
    if (!res.ok) throw new Error();

    const user = data.data;

document.getElementById("userInfo").innerHTML = `
  <p><strong>Username:</strong> ${user.username}</p>
  <p><strong>Email:</strong> ${user.email}</p>
  <p><strong>Role:</strong> ${user.role}</p>
`;
  } catch {
    window.location.href = "index.html";
  }
}

// LOGOUT
async function logout() {
  try {
    await fetch(`${API}/logout`, {
      method: "POST",
      credentials: "include"
    });

    window.location.href = "index.html";
  } catch {
    alert("Logout failed");
  }
}