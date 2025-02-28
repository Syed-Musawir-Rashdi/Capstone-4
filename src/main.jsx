import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Components/home page/Home";
import Friend from "./Components/friends page/Friend";
import Signin from "./Components/signin page/Signin";
import Signup from "./Components/signup page/Signup";
import Profile from "./Components/profile page/Profile.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}> 
        <Route path="home" element={<Home />} /> 
        <Route path="friends" element={<Friend />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
);
