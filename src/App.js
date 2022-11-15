import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Product from "./routes/Product";
import Contact from "./routes/Contact";
import Form1 from "./routes/FormPage";

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/form1" element={<Form1 />} />
    </Routes>
    </>
  );
}

export default App;
