import React from "react";
import "./friend.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Grid from "@mui/material/Grid2";
import Right from "./Right";
import Left from "./Left";

const Friend = () => {
  return (
    <div>
            <Grid container columnSpacing={2} style={{marginTop:"80px"}}>
        <Grid  size={{ lg: 3, md:3,}}>
          <Left />
        </Grid>
        <Grid  size={{ xs: 7, sm: 6, lg: 9, md: 8 }}>
        <Right/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Friend
