import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Facebook from "../images/facbook.svg";
import "./signup.css";
import { Controller, useForm } from "react-hook-form";
import { Button, Container, TextField, Typography } from "@mui/material";

function Signup() {
  let navigate = useNavigate();
  let {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Signup Data:", data);
    
    localStorage.setItem("user", JSON.stringify(data));

    setTimeout(() => {
      navigate("/Signin");
    }, 1000);
  };

  return (
    <Container>
      <div className="text-warning w-25 mx-auto mt-2 mb-2 py-2">
        <img src={Facebook} className="img-fluid" alt="Facebook Logo" />
      </div>
      <div className="text-center card bg-body-tertiary mb-5 p-5 mx-auto" style={{ width: "45%" }}>
        <Typography className="mb-2" variant="h5">
          Create a new account
        </Typography>
        <p className="text-secondary-emphasis">It's quick and easy.</p>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="First Name"
                fullWidth
                margin="normal"
                helperText={errors.firstName ? errors.firstName.message : ""}
                error={!!errors.firstName}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                fullWidth
                label="Last Name"
                margin="normal"
                helperText={errors.lastName ? errors.lastName.message : ""}
                error={!!errors.lastName}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            rules={{ required: "This field is required" }}
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
            rules={{ required: "This field is required" }}
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
          <p className="text-start text-secondary" style={{ fontSize: "12px" }}>
            People who use our service may have uploaded your contact information to Facebook.
            <span className="text-info-emphasis"> Learn more.</span>
          </p>
          <p className="text-start text-secondary" style={{ fontSize: "12px" }}>
            By clicking Sign Up, you agree to our Terms, 
            <span className="text-info-emphasis"> Privacy Policy</span> and
            <span className="text-info-emphasis"> Cookies Policy</span>. You may receive SMS notifications from us and can opt out at any time.
          </p>
          <Button className="mt-2" type="submit" variant="contained" color="success">
            <strong>Signup</strong>
          </Button>
        </form>

        <Typography className="mt-3">
          Already have an account?{" "}
          <Link to="/signin" className="text-primary" style={{ textDecoration: "none" }}>
            Sign in
          </Link>
        </Typography>
      </div>
    </Container>
  );
}

export default Signup;
