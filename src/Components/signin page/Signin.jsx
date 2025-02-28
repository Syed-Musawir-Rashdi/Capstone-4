import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Container, TextField, Typography } from "@mui/material";
import Facebook from "../images/facbook.svg";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  let navigate = useNavigate(); // Initialize navigation hook

  let {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      data.email === storedUser.email &&
      data.password === storedUser.password
    ) {
      alert(`Welcome, ${storedUser.firstName}! Sign-in successful.`);
      navigate("/home");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <Container>
      <div className="w-25 mx-auto mt-5">
        <img src={Facebook} className="img-fluid" alt="Facebook Logo" />
      </div>
      <div className="text-center card bg-body-tertiary p-5 mx-auto" style={{ width: "45%" }}>
        <h5 className="text-secondary-emphasis mb-2">Log in to Facebook</h5>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="Email Address"
                fullWidth
                margin="normal"
                helperText={errors.email ? errors.email.message : ""}
                error={!!errors.email}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="Password"
                fullWidth
                margin="normal"
                type="password"
                helperText={errors.password ? errors.password.message : ""}
                error={!!errors.password}
              />
            )}
          />
          <Button className="mt-2" type="submit" variant="contained" color="success">
            <strong>Signin</strong>
          </Button>
        </form>

        <Typography className="mt-3">
          <Link to="/signup" className="text-primary" style={{ textDecoration: "none" }}>
            Sign up to Facebook
          </Link>
        </Typography>
      </div>
    </Container>
  );
}

export default Signin;
