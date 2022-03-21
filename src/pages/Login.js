import { Avatar, FormControl, Grid, Paper, TextField, Typography, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";
import React from "react";
import icon from '../icons/upicon.png'

const Login = () => {

    const paperStyle = { padding: 20, height: '80vh', margin: '30px auto', border: "1px solid black" }
    const backgroundImg = { background: 'lightblue url("https://media.giphy.com/media/d5PPYjcb3caPTHM3hv/giphy-downsized-large.gif") no-repeat center' }
    const removeit = {padding: 20, height: '80vh', margin: '30px auto', border: "1px solid black" ,  background: '#77bee8 no-repeat center'}
    return (
        <Grid container justifyContent="center">
            <Grid item md={5} xs={8} justify="center">
                <Paper style={paperStyle} variant="outlined">
                    <Typography align="center" fontSize={'1.5em'} fontWeight={'Bold'}>Login Page</Typography>
                    <Typography align="center" fontSize={'1em'}>Enter your login information</Typography>

                    <Grid margin={"auto"} width="70%">
                        <FormControl>

                            <Grid direction="column" margin={"auto"} width={"100%"} >
                                {/* <Grid width={'100%'} style={{display:'flex'}} justifyContent="space-between"> */}
                                <TextField xs={10} label='Username' variant="standard" placeholder="Enter your email" justify="center" fullWidth margin="dense" style={{ marginBottom: "2em", marginTop: "2em" }} required />
                                {/* </Grid> */}
                                <TextField label='Password' variant="standard" type={'password'} placeholder="Enter your password" justify="center" fullWidth margin="dense" style={{ marginBottom: "2em" }} required />
                            </Grid>

                            {/* Radio button */}
                            <Grid >
                                <FormLabel id="demo-row-radio-buttons-group-label">Login As: Please select an option</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    aria-required>
                                    <FormControlLabel value="Patient" control={<Radio />} label="Patient" />
                                    <FormControlLabel value="Doctor" control={<Radio />} label="Doctor" />
                                </RadioGroup>
                            </Grid>

                            {/* Login Button */}
                            <Grid margin={"auto"} marginTop="1em">
                                <Button variant="contained" disableElevation>
                                    Login
                                </Button>
                            </Grid>


                            {/* form bottom links */}
                            <Grid width={"100%"} display="flex" justifyContent={"space-between"} marginTop={"2em"} >
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
                            <Grid>

                            </Grid>
                        </FormControl>
                    </Grid>
                </Paper>
            </Grid>



            <Grid item md={3} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                <Paper style={removeit} variant="outlined">
                    <Grid marginTop={"60%"}>
                    <Typography align="center" fontSize={'1.5em'}><b>Welcome To</b> </Typography>
                
                    <Typography align="center" fontSize={'1.5em'}> <img src={icon} width="70%"></img> </Typography>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Login;