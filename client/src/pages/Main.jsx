import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./homepage";
import AddPostPage from "./add";
import InfoPage from "./info";
import ProfilePage from "./profile";

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddPostPage />} />
      <Route path="/info" element={<InfoPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
