const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());


app.use(cors({
  origin: "https://auth-app-freeapi.netlify.app",
  credentials: true
}));

const BASE = "https://api.freeapi.app/api/v1/users";


app.post("/login", async (req, res) => {
  try {
    const response = await fetch(`${BASE}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();



   const cookies = response.headers.get("set-cookie");

if (cookies) {
  const fixedCookie = cookies
    .replace(/SameSite=Lax/gi, "SameSite=None")
    .replace(/Secure/gi, "Secure")
    + "; SameSite=None; Secure";

  res.setHeader("Set-Cookie", fixedCookie);
}

    res.status(response.status).json(data);

  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});


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