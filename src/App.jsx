import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Components/header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hideHeaderPaths = ["/signin", "/signup"];

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/signup"); // Redirect to signup when opening the site
    }
  }, [location, navigate]);

  return (
    <>
      {!hideHeaderPaths.includes(location.pathname) && <Header />}
      <Outlet />
    </>
  );
};

export default App;
