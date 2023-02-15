import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Aboutus from "./components/aboutus/Aboutus";
import Careers from "./components/careers/Careers";
import Productslist from "./components/products/Productslist";
import Clients from "./components/clients/Clients";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Home" element={<Home />}></Route>
        <Route exact path="/Aboutus" element={<Aboutus />}></Route>
        <Route exact path="/Careers" element={<Careers />}></Route>
        <Route exact path="/ProductsList" element={<Productslist />}></Route>
        <Route exact path="/Clients" element={<Clients />}></Route>
        
      </Routes>
    </>
  );
}

export default App;
