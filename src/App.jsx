import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from './Components/Login';
import Signup from "./Components/Signup";
import Accounts from './Components/Accounts';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/accounts" element={<Accounts />} />

      </Routes>
    </Router>

  );
}

export default App;


