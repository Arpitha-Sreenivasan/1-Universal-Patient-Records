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
import { useNavigate } from "react-router-dom";

const RegisterPatient = () => {
  const initialState = {
    First_Name: "",
    Last_Name: "",
    Email: "",
    Password: "",
    Aadhaar_Number: "",
    Contact: "",
    DOB: Date.now(),
    Gender: "",
    LocationID: Date.now(),
    Street: "",
    City: "",
    State: "",
    Pincode: "",
    Habits: [],
    Chronic_Disease: [],
    Is_active: true,
  };

  const [patientDetails, setPatientDetails] = useState(initialState);

  const navigate = useNavigate();

  const handleChange = (event) => {
    let { name, value } = event.target;
    setPatientDetails({ ...patientDetails, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(patientDetails);

    const locationObject = {
      LocationID: patientDetails.LocationID,
      Street: patientDetails.Street,
      City: patientDetails.City,
      State: patientDetails.State,
      Pincode: patientDetails.Pincode,
    };

    const urlLocation = "http://localhost:8000/addLocation/";
    const responseLocation = await fetch(urlLocation, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(locationObject),
    });

    if (responseLocation.status == 201) {
      console.log("LOCATION ADDED");

      const url = "http://localhost:8000/addPatient/";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patientDetails),
      });

      if (response.status == 201) {
        console.log("PATIENT ADDED");

        navigate("../Login");
      }
    }
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
                          value={patientDetails.First_Name}
                          onChange={handleChange}
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <TextField
                          name="Last_Name"
                          id="Last_Name"
                          label="Last Name"
                          value={patientDetails.Last_Name}
                          onChange={handleChange}
                          fullWidth
                          required
                        />
                      </Grid>
                    </Grid>
                    {/* EMAIL, PASSWORD */}
                    <Grid container spacing={4}>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <TextField
                          name="Email"
                          id="Email"
                          type="email"
                          label="Email Address"
                          value={patientDetails.Email}
                          onChange={handleChange}
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <TextField
                          name="Password"
                          type="password"
                          id="Password"
                          label="Password"
                          value={patientDetails.Password}
                          onChange={handleChange}
                          inputProps={{ minLength: 6, maxLength: 14 }}
                          fullWidth
                          required
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
                              value={patientDetails.DOB}
                              onChange={(newValue) =>
                                setPatientDetails({
                                  ...patientDetails,
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
                          value={patientDetails.Aadhaar_Number}
                          onChange={handleChange}
                          fullWidth
                          required
                          type="number"
                          inputProps={{ minLength: 12, maxLength: 12 }}
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
                          value={patientDetails.Contact}
                          onChange={handleChange}
                          fullWidth
                          required
                          type="number"
                          inputProps={{ minLength: 10, maxLength: 10 }}
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
                            value={patientDetails.Gender}
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
                          value={patientDetails.Street}
                          onChange={handleChange}
                          multiline
                          fullWidth
                          required
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
                          value={patientDetails.City}
                          onChange={handleChange}
                          fullWidth
                          reuiqred
                        />
                      </Grid>
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                        <TextField
                          label="State"
                          id="State"
                          name="State"
                          value={patientDetails.State}
                          onChange={handleChange}
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                        <TextField
                          label="Pincode"
                          id="Pincode"
                          name="Pincode"
                          value={patientDetails.Pincode}
                          onChange={handleChange}
                          fullWidth
                          type="number"
                          required
                        />
                      </Grid>
                    </Grid>
                    {/* HABITS , CHRONIC DISEASE*/}
                    <Grid container spacing={4}>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <FormControl sx={{ width: "100%" }}>
                          <InputLabel id="habits_label">
                            If any Habits
                          </InputLabel>
                          <Select
                            labelId="habits_label"
                            id="Habits"
                            name="Habits"
                            label="If any Habits"
                            fullWidth
                            multiple
                            value={patientDetails.Habits}
                            onChange={handleChange}
                          >
                            <MenuItem value={"smoking"}>Smoking</MenuItem>
                            <MenuItem value={"alcohol"}>Alcohol</MenuItem>
                            <MenuItem value={"tobacco"}>Tobacco</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <FormControl sx={{ width: "100%" }}>
                          <InputLabel id="chronic_disease_label">
                            If any Chronic Disease
                          </InputLabel>
                          <Select
                            labelId="chronic_disease_label"
                            id="Chronic_Disease"
                            name="Chronic_Disease"
                            label="If any Chronic Disease"
                            fullWidth
                            multiple
                            value={patientDetails.Chronic_Disease}
                            onChange={handleChange}
                          >
                            <MenuItem value={"Thyroid"}>Thyroid</MenuItem>
                            <MenuItem value={"Pressure"}>Pressure</MenuItem>
                            <MenuItem value={"Diabetes"}>Diabetes</MenuItem>
                          </Select>
                        </FormControl>
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

export default RegisterPatient;
