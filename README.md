# PopX-app

A responsive React application featuring a login and signup interface inspired by PopX. This project demonstrates form handling, routing, and basic state management in React using functional components and Tailwind CSS for styling.

## 🚀 Live Demo

👉 [Click here to view the live site](https://popx-app-react.netlify.app/)

## 🚀 Features

- 👤 Signup form with:
  - Full Name
  - Phone Number (digits only, 10 digits max)
  - Email
  - Password
  - Company Name
  - Radio selection for "Are you an agency?"
- 🔒 Login page
- 🧭 Routing using `react-router-dom`
- 📦 Data passed from signup to accounts page using router state
- 🎨 Fully styled using Tailwind CSS

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/) for fast development
- [React Router v6+](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/) for styling

## 📁 Project Structure

```text
popx-app/
├── public/                      
├── src/                         
│   ├── Components/             
│   │   ├── Home.jsx             
│   │   ├── Login.jsx            
│   │   ├── Signup.jsx           
│   │   └── Accounts.jsx         
│   ├── App.jsx                  
│   ├── App.css                  
│   └── main.jsx                 
├── .gitignore                   
├── LICENSE                      
├── README.md                    
├── eslint.config.js            
├── index.html                  
├── package.json                 
├── package-lock.json            
├── vite.config.js               

```
## 🧑‍💻 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/popx-app.git
cd popx-app
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Start Server
```bash
npm run dev
```

