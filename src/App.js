// https://reactrouter.com/docs/en/v6/getting-started/installation
// https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom"; // reactrouter v6
import Navbar from './components/Navbar'; // Import Navbar
import "./App.css";

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


// App.js
function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link> |  
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
      <Link to="/">Home</Link> |
      <Link to="/about">About</Link> |  
      </nav>
    </>
  );
}