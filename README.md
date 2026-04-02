# 💰 Finance Dashboard — Frontend Assignment

A modern, responsive, and interactive **Finance Dashboard** built using **React, Vite, TailwindCSS, Framer Motion**, and **Recharts**.  
This project demonstrates UI design skills, state management, component architecture, animations, and frontend problem-solving.

---

## 🚀 Live Demo  
(If deployed on Vercel — add link here)

---

## 📌 Features Implemented

### ✅ Core Dashboard Features
- Summary Cards (Total Balance, Income, Expenses)
- Line Chart (Monthly Trends)
- Pie Chart (Spending Categories)
- Bar Chart (Comparisons)

### ✅ Transactions Module
- Transaction Table  
- Search, Sorting, Filtering  
- Category & Type filtering  
- Grouping by date/category  
- Add Transaction (Admin Only)

### ✅ Role-Based UI (Simulated)
- **Viewer** → read only  
- **Admin** → add/edit transactions  
- **Editor** → edit + export  
- Switch roles via dropdown  

### ✅ Insights Section
- Highest spending category  
- Monthly comparison  
- Auto Generated Insights  

---

## 🌙 Dark Mode + Persistence
- Full dark/light mode  
- Saves preference in **LocalStorage**  
- Smooth animated transitions  

---

## 📁 State Management
- Global app state → Context API  
- Transaction state → Context + LocalStorage  
- Theme state → Context  

---

## 🧪 Mock API Integration
Used **mockServer.js** to simulate:
- `GET /transactions`
- `POST /transactions`
- `PUT /transactions`

---

## 📤 Export Features
- Export Transactions as **CSV**
- Export Transactions as **JSON**

---

## 🎨 Animations
Inspired by **Zorvyn.io**:
- Page transitions with blur + fade  
- Card rise animation  
- Smooth hover lift effects  

Implemented using:
- **Framer Motion**
- **Custom CSS animations**

---

## 📦 Tech Stack

| Category | Tech |
|---------|------|
| Frontend Framework | React (Vite) |
| Styling | TailwindCSS |
| Animations | Framer Motion |
| Charts | Recharts |
| State | Context API |
| Utilities | Lucide Icons |
| Mock Server | Local Mock API |

---

## 🏗️ Project Structure
