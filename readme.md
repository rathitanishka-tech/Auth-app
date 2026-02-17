# 🔐 Auth App (Vanilla JavaScript)

A simple authentication-based web application built using HTML, CSS, and Vanilla JavaScript.
This project demonstrates a complete authentication flow using session-based APIs.

---

## 🚀 Live Demo

* 🌐 Frontend (Netlify):
  https://unrivaled-paprenjak-04623b.netlify.app/

---

## ✨ Features

* User Registration
* User Login
* Session-based Authentication (Cookies)
* Fetch Current Logged-in User
* Logout Functionality
* Success & Error Messages
* Basic Loading States
* Clean UI using CSS

---

## 🛠 Tech Stack

* **Frontend:** HTML, CSS, Vanilla JavaScript
* **Backend:** Node.js (Express proxy)
* **API:** FreeAPI Authentication Module

---

## 🧠 How It Works

* Users register and log in using FreeAPI endpoints
* Backend proxy handles API communication and cookie forwarding
* Session cookies are stored in the browser
* Authenticated requests fetch current user details
* Logout clears the active session

---

## ⚙️ Setup (Local Development)

### 1. Clone the repository

git clone https://github.com/your-username/auth-app.git
cd auth-app

### 2. Install backend dependencies

cd backend
npm install

### 3. Start backend server

node server.js

### 4. Run frontend

Open using Live Server:
http://localhost:5500

---

## 📌 Notes

* Backend proxy is used to resolve CORS and handle session cookies
* Built to understand real-world authentication flow with APIs

---

## 🙌 Acknowledgement

Built as part of learning authentication workflows using FreeAPI.
