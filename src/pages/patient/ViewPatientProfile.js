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
    LocationID: "",
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

      var aadhaar = localStorage.getItem("Aadhaar_Number");

      const url = `http://localhost:8000/getPatient/${aadhaar}`;
      var response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => response.json())
        .then((data) => {
          console.log("Return ", data);
          var dta = data.Habits.replace("[", "");
          dta = dta.replace("]", "");

          var newData = dta.split(",");

          var dta2 = data.Chronic_Diseases.replace("[", "");
          dta2 = dta2.replace("]", "");

          var newData2 = dta2.split(",");


          setPatientDetails({ ...patientDetails, Habits: newData, Chronic_Diseases: newData2, Aadhaar_Number: data.Aadhar_Number, LocationID: data.LocationID })
          setPatientDetails(data);
        })
        .catch((error) => console.log(error));


      const urlLocation = `http://localhost:8000/getLocation/${patientDetails.LocationID}`;
      var response2 = await fetch(urlLocation, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response2) => response2.json())
        .then((data) => {
          console.log("Return ", data);
          setPatientDetails({ ...patientDetails, City: data.City, State: data.State, Street: data.Street })
        })
        .catch((error) => console.log(error));

    };
    getPatient()

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
                          InputProps={{
                            readOnly: editable,
                          }}
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
                          InputProps={{
                            readOnly: editable,
                          }}
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
                          type="number"
                          name="Contact"
                          id="Contact"
                          label="Contact Number"
                          onChange={handleChange}
                          value={patientDetails.Contact}
                          InputProps={{
                            readOnly: editable,
                          }}
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
                          InputProps={{
                            readOnly: editable,
                          }}
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
                          InputProps={{
                            readOnly: editable,
                          }}
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
                          InputProps={{
                            readOnly: editable,
                          }}
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
                          InputProps={{
                            readOnly: editable,
                          }}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                    {/* HABITS , CHRONIC DISEASE*/}
                    <Grid container spacing={4}>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <TextField
                          label="If any Habits"
                          id="Habits"
                          name="Habits"
                          onChange={handleChange}
                          value={patientDetails.Habits}
                          InputProps={{
                            readOnly: editable,
                          }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                        <TextField
                          label="Chronic diseases"
                          id="Chronic_Diseases"
                          name="Chronic_Diseases"
                          onChange={handleChange}
                          value={patientDetails.Chronic_Diseases}
                          InputProps={{
                            readOnly: editable,
                          }}
                          fullWidth
                        />
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
