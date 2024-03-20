import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";

const RouterIndex = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default RouterIndex;
