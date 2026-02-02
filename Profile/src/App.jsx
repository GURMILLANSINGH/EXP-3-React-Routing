import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// 1. IMPORT YOUR IMAGES
// These paths assume your images are in src/assets/
import spiderLogo from "./assets/spiderman.jpg"; 
import myProfilePic from "./assets/profile.jpg"; 
import spideyGif from "./assets/spidey.gif";
// --- Profile Component ---
function Profile() {
  return (
    <div className="card">
      <img
        src={myProfilePic} 
        alt="Gurmilan Singh"
        className="profile-img"
      />

      <h2>Gurmilan Singh</h2>

      <p>
        AI/ML student passionate about software development and solving
        real-world problems using technology.
      </p>

      <h3>Ambition</h3>
      <p>Become a skilled Software & ML Engineer.</p>

      <h3>Projects</h3>
      <ul>
        <li>Workout Tracker App</li>
        <li>Inventory System (Java + Oracle)</li>
        <li>Machine Learning Experiments</li>
      </ul>
    </div>
  );
}

// --- Dashboard Component ---
function Dashboard() {
  return (
    <div className="card">
      <h1>Dashboard</h1>
      <h2>Skills</h2>
      <ul>
        <li>React</li>
        <li>Java</li>
        <li>Python</li>
        <li>Machine Learning</li>
        <li>DSA</li>
      </ul>

      <h3>Links</h3>
      <div className="links-container">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <br />
        <a href="https://leetcode.com/u/Gurmillan77/" target="_blank" rel="noreferrer">
          LeetCode Ranking
        </a>
      </div>
    </div>
  );
}

// --- Main App Component ---
export default function App() {
  return (
    <BrowserRouter>
      {/* Spider-Man Header */}
      <header className="top-header">
        <Link to="/" className="logo-link" title="Back to Profile">
          <img 
            src={spideyGif} 
            alt="Spider-Man Logo" 
            className="spider-logo"
          />
        </Link>
      </header>

      <div className="container">
        <h1 className="title">Multi-Page SPA Using Routing</h1>

        <nav className="nav">
          <Link to="/">Profile</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}