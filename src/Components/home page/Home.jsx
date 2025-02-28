import React from "react";
import "./home.css";
import Sidebar from "./Sidebar";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Grid from "@mui/material/Grid2";
import Posts from "./Posts";

const Home = () => {
  return (
    <>
      <Grid container columnSpacing={3} style={{marginTop:"80px"}}>
        <Grid  size={{ lg: 3}}>
          <Sidebar />
        </Grid>
        <Grid className="ms-lg-3"  size={{ xs: 11, sm: 11, lg: 5,}}>
          <Posts />
        </Grid>
        <Grid className="ms-auto me-2" size={{lg: 3}}>
          <Contact/>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
