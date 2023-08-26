import React from 'react';
import { Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
import HomePage from "../components/HomePage/HomePage";
import Posts from "../components/Posts/Posts";
import Gallery from "../components/Gallery/Gallery";
import Todo from "../components/TODO/Todo";
import Profile from "../components/ProfilePage/Profile";
import Context from "../Context";

const Main = () => {
  return (
    <Context>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="user/:userId/" element={<HomePage />}>
          <Route path="profile" element={<Profile />} />
          <Route path="posts" element={<Posts />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="todo" element={<Todo />} />
        </Route>
      </Routes>
    </Context>
  );
}

export default Main
