import React from "react";
import { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  TextField,
  Typography,
  Container,
  FormControl,
  Box,
  Stack,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const ViewPatientProfile = () => {
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
    Habits: [],
    Chronic_Disease: [],
  };

  const [patientDetails, setPatientDetails] = useState(initialState);

  const [editable, setEditable] = useState(true);

  const [buttonDisable, setButtonDisbale] = useState(false);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setPatientDetails({
      ...patientDetails,
      [name]: value,
    });
  };

  const handleEdit = () => {
    console.log("Edit button clicked");
    setEditable(false);
    setButtonDisbale(true);
  };

  useEffect(() => {
    const getPatient = async () => {
      const url = `http://localhost:8000/addTest/${patientDetails.Aadhaar_Number}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status == 200) {
        return response;
      }
    };
    const patientResponse = getPatient();
    patientResponse
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
      <Container style={{ position: "relative" }}>
        <Card elevation={6}>
          <CardContent sx={{ margin: "30px" }}>
            <form>
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
                          InputProps={{
                            readOnly: editable,
                          }}
                        />
                      </Grid>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <TextField
                          name="Last_Name"
                          id="Last_Name"
                          label="Last Name"
                          onChange={handleChange}
                          value={patientDetails.Last_Name}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    {/* EMAIL, PASSWORD */}
                    <Grid container spacing={4}>
                      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <TextField
                          name="Email"
                          id="Email"
                          label="Email Address"
                          onChange={handleChange}
                          value={patientDetails.Email}
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
                          onChange={handleChange}
                          value={patientDetails.Aadhaar_Number}
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
                          onChange={handleChange}
                          value={patientDetails.Contact}
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
                            onChange={handleChange}
                            value={patientDetails.Gender}
                            placeholder="Gender"
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
                          onChange={handleChange}
                          value={patientDetails.Street}
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
                          onChange={handleChange}
                          value={patientDetails.City}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                        <TextField
                          label="State"
                          id="State"
                          name="State"
                          onChange={handleChange}
                          value={patientDetails.State}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                        <TextField
                          label="Pincode"
                          id="Pincode"
                          name="Pincode"
                          onChange={handleChange}
                          value={patientDetails.Pincode}
                          fullWidth
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
                            onChange={handleChange}
                            multiple
                            value={patientDetails.Habits}
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
                            onChange={handleChange}
                            value={patientDetails.Chronic_Disease}
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
                        <Button
                          variant="contained"
                          onClick={handleEdit}
                          disabled={buttonDisable}
                        >
                          Edit
                        </Button>
                      </Grid>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <Button variant="contained">Submit</Button>
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

export default ViewPatientProfile;
