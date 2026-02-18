# 🔐 Auth App (Vanilla JavaScript)

A simple authentication-based web application built using **HTML, CSS, and Vanilla JavaScript**.
This project demonstrates a complete authentication flow using session-based APIs, including login, registration, and user session handling.

---

## 🚀 Live Demo

  https://auth-app-freeapi.netlify.app

---

## ✨ Features

* User Registration
* User Login
* Session-based Authentication (Cookies)
* Fetch Current Logged-in User
* Logout Functionality
* Error & Success Messages
* Basic Loading States
* Clean and minimal UI (CSS)

---

## 🛠 Tech Stack

* **Frontend:** HTML, CSS, Vanilla JavaScript
* **Backend:** Node.js (Express proxy)
* **API:** FreeAPI Authentication Module

---

## 🧠 How It Works

* The frontend sends authentication requests to a backend proxy
* The backend communicates with FreeAPI and forwards responses
* Session cookies are securely handled and stored in the browser
* Authenticated requests fetch the current user
* Logout clears the active session

---

## 📁 Project Structure

```
Auth-app/
│
├── backend/
│   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── dashboard.html
│   ├── app.js
│   └── style.css
```

---

## ⚙️ Local Setup

### 1. Clone the repository

```
git clone https://github.com/rathitanishka-tech/Auth-app.git
cd auth-app
```

---

### 2. Install backend dependencies

```
cd backend
npm install
```

---

### 3. Start backend server

```
node server.js
```

---

### 4. Run frontend

Use Live Server (VS Code) and open:

```
http://localhost:5500
```

---

## ⚠️ Important Notes

* A backend proxy is required to handle **CORS and session cookies**
* Frontend and backend are deployed separately (Netlify + Render)
* Cookies require `credentials: "include"` in frontend requests

---

## 🙌 Acknowledgement

Built as part of learning authentication flows using APIs and session management.
