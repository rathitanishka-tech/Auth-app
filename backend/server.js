const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

// ✅ IMPORTANT: use localhost (not 127.0.0.1)
app.use(cors({
  origin: "http://localhost:5500",
  credentials: true
}));

const BASE = "https://api.freeapi.app/api/v1/users";

// 🔐 LOGIN
app.post("/login", async (req, res) => {
  try {
    const response = await fetch(`${BASE}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();

    // ✅ FIX: forward ALL cookies properly
    const cookies = response.headers.getSetCookie?.() 
      || response.headers.raw?.()["set-cookie"];

    if (cookies) {
      res.setHeader("Set-Cookie", cookies);
    }

    res.status(response.status).json(data);

  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

// 📝 REGISTER
app.post("/register", async (req, res) => {
  try {
    const response = await fetch(`${BASE}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.status(response.status).json(data);

  } catch (err) {
    console.error("REGISTER ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

// 👤 CURRENT USER
app.get("/current-user", async (req, res) => {
  try {
    const response = await fetch(`${BASE}/current-user`, {
      method: "GET",
      headers: {
        cookie: req.headers.cookie || ""
      }
    });

    const data = await response.json();
    res.status(response.status).json(data);

  } catch (err) {
    console.error("CURRENT USER ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

// 🚪 LOGOUT
app.post("/logout", async (req, res) => {
  try {
    const response = await fetch(`${BASE}/logout`, {
      method: "POST",
      headers: {
        cookie: req.headers.cookie || ""
      }
    });

    const data = await response.json();

    res.clearCookie("connect.sid");
    res.status(response.status).json(data);

  } catch (err) {
    console.error("LOGOUT ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});