import React from "react";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Navigate = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <hr />
      <Routes>

        <Route path="/" element={"Home Page"}/>
        <Route path="/about"  element={"About Page"}/>
        <Route path="/contact" element= {"Contact Page"}/>
        <Route path="/blog"  element={"Blog Page"}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigate;
