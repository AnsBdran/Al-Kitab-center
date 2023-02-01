import "./App.css";
import Header from "./components/header/header";

import { Routes, Route } from "react-router-dom";
import About from "./routes/about/about";
import Contact from "./routes/contact/contact";
import Home from "./routes/home/home";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;