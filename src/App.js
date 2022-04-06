// https://reactrouter.com/docs/en/v6/getting-started/installation
// https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing
import * as React from "react";
import { Routes, Route } from "react-router-dom"; // reactrouter v6
import Navbar from './components/Navbar'; // Import Navbar
import "./App.css";
import Home from './pages/home';
import About from './pages/about';

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to CoderForge</h1>
      <Navbar /> {/* Use Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}