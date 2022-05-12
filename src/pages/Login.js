import {
  Avatar,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import icon from "../icons/upicon.png";

const Login = () => {

    const initialstate = {
        email:"",
        password:""
    }

    const [userDetails, setUserDetails] = useState(initialstate);
    
    function logindata(e){
      e.preventDefault();
      console.log(userDetails);
    }

  const paperStyle = {
    padding: 20,
    margin: "30px auto",
    border: "1px solid black",
  };
  const backgroundImg = {
    background:
      'lightblue url("https://media.giphy.com/media/d5PPYjcb3caPTHM3hv/giphy-downsized-large.gif") no-repeat center',
  };
  const removeit = {
    padding: 20,
    margin: "30px auto",
    border: "1px solid black",
    background: "#77bee8 no-repeat center",
  };
  return (
    <Grid container justifyContent="center">
      <Grid item md={5} xs={8} justify="center" height={'100%'}>
        <Grid style={paperStyle}  position={'relative'}>
          <Typography align="center" fontSize={"1.5em"} fontWeight={"Bold"}>
            Login Page
          </Typography>
          <Typography align="center" fontSize={"1em"}>
            Enter your login information
          </Typography>

          <form onSubmit={logindata}>
    
          <Grid margin={"auto"} width="70%" height={'100%'} position={'relative'} display={'flex'} flexDirection='column' justifyContent={'space-between'}>
            <FormControl>
              <Grid margin={"auto"} width={"100%"}>
                {/* <Grid width={'100%'} style={{display:'flex'}} justifyContent="space-between"> */}
                <TextField
                  xs={10}
                  label="Email"
                //   variant="standard"
                  placeholder="Enter your email"
                  justify="center"
                  fullWidth
                  margin="dense"
                  style={{ marginBottom: "2em", marginTop:'2em'}}
                  id="email"
                  name="email"
                  value={userDetails.email}
                  onChange={(e)=>setUserDetails(e.target.value)}
                  required
                />
                {/* </Grid> */}
                <TextField
                  label="Password"
                //   variant="standard"
                  type={"password"}
                  placeholder="Enter your password"
                  justify="center"
                  fullWidth
                  margin="dense"
                  style={{ marginBottom:'2em' }}
                  id="password"
                  name="password"
                  value={userDetails.password}
                  onChange={(e)=>setUserDetails(e.target.value)}
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
                  name="row-radio-buttons-group"
                  aria-required
                >
                  <FormControlLabel
                    value="Patient"
                    control={<Radio />}
                    label="Patient"
                  />
                  <FormControlLabel
                    value="Doctor"
                    control={<Radio />}
                    label="Doctor"
                  />
                </RadioGroup>
              </Grid>

              {/* Login Button */}
              <Grid margin={"auto"} marginTop="1em">
                <Button variant="contained" type="submit" >
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
                {/* Forgot password link */}
                <Grid>
                  <a href="#">Forgot password</a>
                </Grid>
                {/* Create account link */}
                <Grid>
                  <a href="#">Create account</a>
                </Grid>
              </Grid>

              {/* message displays if user not found */}
              <Grid></Grid>
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
        <Grid style={removeit}
         minHeight={"400px"}
         height={'100%'}
          variant="outlined">
          <Grid>
            <Typography align="center" fontSize={"1.5em"}>
              <b>Welcome To</b>{" "}
            </Typography>

            <Typography align="center" fontSize={"1.5em"} height={''}>
              <img src={icon} width="70%"></img>{" "}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
