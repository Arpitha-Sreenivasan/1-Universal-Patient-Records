import {
  FormControl,
  Grid,
  TextField,
  Typography,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../icons/upicon.png";

const Login = (props) => {
  const initialstate = {
    Aadhaar_Number: "",
    Password: "",
    usertype: "",
  };

  const [userDetails, setUserDetails] = useState(initialstate);

  const navigate = useNavigate();

  function logindata(e) {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  }

  async function showdata(e) {
    e.preventDefault();
    console.log(userDetails);

    if (userDetails.usertype === "Patient") {
      const urlPatient = `http://localhost:8000/getPatient/${userDetails.Aadhaar_Number}`;
      const response = await fetch(urlPatient, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Return ", data);
          console.log(userDetails);
          if (
            data.Aadhar_Number == userDetails.Aadhaar_Number &&
            data.Password == userDetails.Password
          ) {
            console.log("VALID USERRR");
            localStorage.setItem("Aadhaar_Number", userDetails.Aadhaar_Number);
            localStorage.setItem("Role", "Patient");
            props.setLogIn(true);
            navigate("./add-consultation");
          } else {
            console.log("INVALID USER");
          }
        })
        .catch((error) => console.log(error));
    } else if (userDetails.usertype === "Doctor") {
      const urlDoctor = `http://localhost:8000/getDoctor/${userDetails.Aadhaar_Number}`;
      const response = await fetch(urlDoctor, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (
            data.Aadhar_Number == userDetails.Aadhaar_Number &&
            data.Password == userDetails.Password && data.Is_verified == true
          ) {
            console.log("VALID USERRR");
            localStorage.setItem("Aadhaar_Number", userDetails.Aadhaar_Number);
            localStorage.setItem("Role", "Doctor");
            props.setLogIn(true);
            // TODO: ADD SEARCH BAR PATH
            navigate("../search-patient");
          } else {
            console.log("INVALID USER");
          }
        });
    }
  }

  const paperStyle = {
    padding: 20,
    margin: "30px auto",
    border: "1px solid black",
  };

  const removeit = {
    padding: 20,
    margin: "30px auto",
    border: "1px solid black",
    background: "#77bee8 no-repeat center",
  };

  return (
    <Grid container justifyContent="center">
      <Grid item md={5} xs={8} justify="center" height={"100%"}>
        <Grid style={paperStyle} position={"relative"}>
          <Typography align="center" fontSize={"1.5em"} fontWeight={"Bold"}>
            Login Page
          </Typography>
          <Typography align="center" fontSize={"1em"}>
            Enter your login information
          </Typography>

          <form onSubmit={showdata}>
            <Grid
              margin={"auto"}
              width="70%"
              height={"100%"}
              position={"relative"}
              display={"flex"}
              flexDirection="column"
              justifyContent={"space-between"}
            >
              <FormControl>
                <Grid margin={"auto"} width={"100%"}>
                  {/* <Grid width={'100%'} style={{display:'flex'}} justifyContent="space-between"> */}
                  <TextField
                    xs={10}
                    type="number"
                    label="Aadhaar Number"
                    justify="center"
                    fullWidth
                    margin="dense"
                    style={{ marginBottom: "2em", marginTop: "2em" }}
                    id="Aadhaar_Number"
                    name="Aadhaar_Number"
                    value={userDetails.Aadhaar_Number}
                    onChange={logindata}
                    inputProps={{ min: 100000000000, max: 999999999999 }}
                    required
                  />
                  {/* </Grid> */}
                  <TextField
                    label="Password"
                    type="password"
                    justify="center"
                    fullWidth
                    margin="dense"
                    style={{ marginBottom: "2em" }}
                    id="Password"
                    name="Password"
                    value={userDetails.Password}
                    onChange={logindata}
                    inputProps={{ minLength: 6, maxLength: 14 }}
                    required
                  />
                </Grid>

                {/* Radio button */}
                <Grid>
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Login As:
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="usertype"
                    value={userDetails.usertype}
                    onChange={logindata}
                    aria-required
                  >
                    <FormControlLabel
                      typeof="radio"
                      value="Patient"
                      control={<Radio />}
                      label="Patient"
                    />
                    <FormControlLabel
                      typeof="radio"
                      value="Doctor"
                      control={<Radio />}
                      label="Doctor"
                    />
                  </RadioGroup>
                </Grid>

                {/* Login Button */}
                <Grid margin={"auto"} marginTop="1em">
                  <Button variant="contained" type="submit">
                    {/* variant="contained" disableElevation */}
                    Login
                  </Button>
                </Grid>
                
                {/* form bottom links */}
                <Grid
                  width={"100%"}
                  display="flex"
                  justifyContent={"space-between"}
                  marginTop={"2em"}
                >
                  {/* Create account link */}
                  <Grid>
                    <a href="./register/RegisterPatient">Create account</a>
                  </Grid>
                </Grid>
              </FormControl>
            </Grid>
          </form>
        </Grid>
      </Grid>

      <Grid
        item
        md={3}
        sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        height={"100%"}
      >
        <Grid
          style={removeit}
          minHeight={"490px"}
          height={"100%"}
          variant="outlined"
        >
          <Grid>
            <Typography align="center" fontSize={"1.5em"}>
              <b>Welcome To</b>{" "}
            </Typography>

            <Typography align="center" fontSize={"1.5em"} height={""}>
              <img src={icon} alt="UPR Icon" width="70%"></img>{" "}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
