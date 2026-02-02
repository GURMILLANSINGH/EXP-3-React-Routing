import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h2>SPA Router</h2>
      <div>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="page">
      <div className="card">
        <h1>Home Page</h1>
        <p>Welcome to Single Page Application</p>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <div className="card">
        <h1>About Page</h1>
        <p>This project demonstrates basic client-side routing.</p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <div className="card">
        <h1>Contact Page</h1>
        <p>Email: spademo@gmail.com</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
