// https://reactrouter.com/docs/en/v6/getting-started/installation
// https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing
import * as React from "react";
import { Routes, Route } from "react-router-dom"; // reactrouter v6
import Navbar from './components/Navbar'; // Import Navbar
import Footer from "./components/Footer"; // Import Footer
import "./App.css";
import Home from './pages/home';
import Coders from "./pages/coders";
import OS from "./pages/os";
import Editors from "./pages/editors";
import VCS from "./pages/vcs";

export default function App() {
  return (
    <div className="App">
      <Navbar /> {/* Use Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="coders" element={<Coders />} />
        <Route path="os" element={<OS />} />
        <Route path="editors" element={<Editors />} />
        <Route path="vcs" element={<VCS />} />
      </Routes>
      <Footer /> {/* Use Footer */}
    </div>
  );
}