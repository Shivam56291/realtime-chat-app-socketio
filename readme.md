# 🚀 SyncChat – Real-Time Messaging App

A modern full-stack **real-time chat application** built using **React, Socket.IO, Node.js, and MongoDB**.  
SyncChat delivers a **production-grade messaging experience** with a focus on **performance, scalability, and premium UI/UX**.

---

## ✨ Features

- ⚡ Real-time messaging with Socket.IO  
- 🔐 Secure authentication (JWT-based)  
- 💬 One-to-one chat system  
- 📡 Live online/offline user status  
- 🕓 Message history persistence  
- 🎨 30+ dynamic UI themes (daisyUI)  
- 🔄 Optimistic UI updates for instant feedback  
- 📱 Fully responsive (mobile + desktop)  

---

## 🎨 UI/UX & Animations (Premium Experience)

SyncChat is designed to feel like a **real-world SaaS product**, not just a project.

### ✨ Visual & Interaction Highlights

- 🎭 **Smooth Page Transitions**  
  Seamless navigation with fade & slide animations for a fluid experience.

- 💬 **Animated Chat Messages**  
  Messages appear with subtle motion (slide + fade), mimicking modern apps like WhatsApp.

- 🟢 **Live Presence Indicators**  
  Online users highlighted with animated pulse effects in real-time.

- 🧊 **Glassmorphism UI**  
  Frosted glass effects for modals and panels, creating a premium interface.

- 🌈 **Gradient-Based Design System**  
  Carefully crafted gradients, soft shadows, and rounded components.

- ⚡ **Micro-interactions Everywhere**  
  Hover, click, and focus animations for buttons, cards, and UI elements.

- 🎨 **Dynamic Theme Engine**  
  30+ themes with persistent user preference and instant switching.

---

### 🧠 UX Enhancements

- 🔄 **Optimistic UI Updates**  
  Actions like sending/deleting messages feel instant without waiting for server response.

- ⏳ **Skeleton Loaders**  
  Smooth loading states instead of traditional spinners.

- 🎯 **Minimal & Clean Layout**  
  Focused chat experience with proper spacing and hierarchy.

- 🚀 **Fast & Smooth Rendering**  
  Optimized state management and rendering for performance.

---

### 💡 Design Philosophy

> "Fast, smooth, and intuitive — every interaction should feel instant."

SyncChat focuses on delivering a **premium product experience**, not just functionality.

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS + daisyUI
- Zustand (state management)
- Axios
- Framer Motion (animations)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Socket.IO
- JWT Authentication

---

## 📁 Project Structure

```
chat_app_basic/
│
├── frontend/        # React frontend (Vite)
├── backend/         # Node.js backend (API + Socket.IO)
├── package.json     # Root scripts (monorepo setup)
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Shivam56291/realtime-chat-app-socketio.git
cd realtime-chat-app-socketio
```

---

### 2️⃣ Install dependencies

```bash
npm run build
```

---

### 3️⃣ Run the app (development)

```bash
npm run dev
```

👉 Runs both frontend and backend concurrently

---

### 4️⃣ Run production server

```bash
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file in the **backend** folder:

```env
PORT=5001
JWT_SECRET=your_secret_key
NODE_ENV=development
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_CLOUD_API=your_api_key
CLOUDINARY_CLOUD_SECRET=your_api_secret
```

---

## 🎨 Themes

SyncChat supports multiple themes using **daisyUI**:

- dark, light, luxury, dracula, synthwave, cyberpunk, etc.

👉 Theme preference is saved using `localStorage`  
👉 Browser UI color syncs dynamically using `theme-color`

---

## 🚀 Deployment

You can deploy using:

- Frontend: Vercel / Netlify  
- Backend: Render / Railway  

---

## 📸 Preview

> Add your app screenshot here

```
/public/preview.png
```

---

## 🧠 Learning Highlights

- Real-time communication using WebSockets  
- Optimistic UI for better UX  
- Advanced UI/UX design principles  
- Monorepo architecture  
- Scalable backend design  
- State management with Zustand  

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to fork this repo and submit a pull request.

---

## 📄 License

This project is licensed under the ISC License.

---

## 👨‍💻 Author

**Shivam Kumar**  
- GitHub: https://github.com/Shivam56291

---

## ⭐ Show your support

If you like this project, please ⭐ the repo!