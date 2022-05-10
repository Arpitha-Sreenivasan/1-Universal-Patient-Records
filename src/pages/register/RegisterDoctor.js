import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";

const RegisterDoctor = () => {
  const initialState = {
    First_Name: "",
    Last_Name: "",
    Email: "",
    Password: "",
    Aadhaar_Number: "",
    Contact: "",
    DOB: Date.now(),
    Gender: "",
    Street: "",
    City: "",
    State: "",
    Pincode: "",
    License_Number: "",
    Qualification: "",
    Is_verified: true,
    Is_active: true,
  };

  const [doctorDetails, setDoctorDetails] = useState(initialState);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setDoctorDetails({ ...doctorDetails, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(doctorDetails);

    const url = "";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(doctorDetails),
    });
  };

  return (
    <>
      <Container style={{ position: "relative" }}>
        <Card elevation={6}>
          <CardContent sx={{ margin: "30px" }}>
            <form onSubmit={handleSubmit}>
              <FormControl sx={{ width: "100%" }}>
                <Box sx={{ flexGrow: "1" }}>
                  <Grid
                    container
                    columns={12}
                    sx={{
                      marginLeft: "10px",
                      marginTop: "30px",
                      rowGap: "30px",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{ marginBottom: "10px", textAlign: "center" }}
                    >
                      Welcome to Universal Patient Records Registration
                    </Typography>

                    {/* FIRST NAME, LAST NAME */}
                    <Grid container spacing={4}>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <TextField
                          name="First_Name"
                          id="First_Name"
                          label="First Name"
                          value={doctorDetails.First_Name}
                          onChange={handleChange}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <TextField
                          name="Last_Name"
                          id="Last_Name"
                          label="Last Name"
                          value={doctorDetails.Last_Name}
                          onChange={handleChange}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    {/* EMAIL, PASSWORD */}
                    <Grid container spacing={4}>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <TextField
                          name="Email"
                          id="Email"
                          label="Email Address"
                          value={doctorDetails.Email}
                          onChange={handleChange}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <TextField
                          name="Password"
                          type="password"
                          id="Password"
                          label="Password"
                          value={doctorDetails.Password}
                          onChange={handleChange}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    {/* DATE OF BIRTH, AADHAAR NUMBER*/}
                    <Grid container spacing={4}>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <Stack>
                            <DesktopDatePicker
                              label="Date of Birth"
                              inputFormat="dd/MM/yyyy"
                              value={doctorDetails.DOB}
                              onChange={(newValue) =>
                                setDoctorDetails({
                                  ...doctorDetails,
                                  DOB: newValue,
                                })
                              }
                              renderInput={(params) => (
                                <TextField {...params} />
                              )}
                            />
                          </Stack>
                        </LocalizationProvider>
                      </Grid>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <TextField
                          name="Aadhaar_Number"
                          id="Aadhaar_Number"
                          label="Aadhar Number"
                          value={doctorDetails.Aadhaar_Number}
                          onChange={handleChange}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    {/*CONTACT GENDER */}
                    <Grid container spacing={4}>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <TextField
                          name="Contact"
                          id="Contact"
                          label="Contact Number"
                          value={doctorDetails.Contact}
                          onChange={handleChange}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <FormControl sx={{ width: "100%" }}>
                          <InputLabel id="gender_label">Gender</InputLabel>
                          <Select
                            labelId="gender_label"
                            id="Gender"
                            name="Gender"
                            label="Gender"
                            fullWidth
                            value={doctorDetails.Gender}
                            placeholder="Gender"
                            onChange={handleChange}
                          >
                            <MenuItem value={"male"}>Male</MenuItem>
                            <MenuItem value={"female"}>Female</MenuItem>
                            <MenuItem value={"other"}>Other</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    {/*LOCATION(STREET) */}
                    <Grid container>
                      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <TextField
                          label="Please Enter Address"
                          id="Street"
                          name="Street"
                          value={doctorDetails.Street}
                          onChange={handleChange}
                          multiline
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    {/* CITY, STATE PINCODE*/}
                    <Grid container spacing={4}>
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                        <TextField
                          label="City"
                          id="City"
                          name="City"
                          value={doctorDetails.City}
                          onChange={handleChange}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                        <TextField
                          label="State"
                          id="State"
                          name="State"
                          value={doctorDetails.State}
                          onChange={handleChange}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                        <TextField
                          label="Pincode"
                          id="Pincode"
                          name="Pincode"
                          value={doctorDetails.Pincode}
                          onChange={handleChange}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    {/* LICENSE QUALIFICATION*/}
                    <Grid container spacing={4}>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <TextField
                          label="Doctor License Number"
                          id="License_Number"
                          name="License_Number"
                          value={doctorDetails.License_Number}
                          onChange={handleChange}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <TextField
                          label="Qualification"
                          id="Qualification"
                          name="Qualification"
                          value={doctorDetails.Qualification}
                          onChange={handleChange}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    {/* SUBMIT  */}
                    <Grid container spacing={4}>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <Button type="submit" variant="contained">
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </FormControl>
            </form>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default RegisterDoctor;
