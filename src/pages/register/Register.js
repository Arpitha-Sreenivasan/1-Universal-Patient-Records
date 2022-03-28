import { Typography } from "@mui/material";
import React from "react";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <>
      <Typography
        variant="h4"
        sx={{ marginBottom: "10px", textAlign: "center" }}
      >
        Welcome to Universal Patient Records Registration
      </Typography>
      <RegisterForm />
    </>
  );
};

export default Register;
