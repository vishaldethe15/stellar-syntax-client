import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./layouts/HomePage";
import CategorizedBlogsPage from "./layouts/CategorizedBlogsPage";
import SingleBlogPage from "./layouts/SingleBlogPage";
import ErrorPage from "./ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:categories" element={<CategorizedBlogsPage />} />
        <Route path="/:categories/:id" element={<SingleBlogPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
