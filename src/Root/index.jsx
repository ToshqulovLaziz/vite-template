import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../Pages/HomePage";

const  Root = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </React.Fragment>
  );
}

export default  Root
