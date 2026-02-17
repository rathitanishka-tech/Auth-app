const API = "https://api-projects-chaicode.onrender.com";

function showMessage(msg, isError = false) {
  const el = document.getElementById("message");
  el.innerText = msg;
  el.className = isError ? "message error" : "message success";
}


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
        
      })
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    showMessage("Registered successfully!");
  } catch (err) {
    showMessage(err.message || "Error occurred", true);
  }
}


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

    window.location.href = "dashboard.html";

  } catch (err) {
    showMessage(err.message || "Login failed", true);
  }
}


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
    `;
  } catch {
    window.location.href = "index.html";
  }
}


async function logout() {
  await fetch(`${API}/logout`, {
    method: "POST",
    credentials: "include"
  });

  window.location.href = "index.html";
}