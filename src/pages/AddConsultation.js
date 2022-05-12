import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const AddConsultation = () => {
  const initialState = {
    Aadhaar_Number: "",
    License_Number: "",
    Date: Date.now(),
    Height: "",
    Weight: "",
    Temprature: "",
    Pressure: "",
    Diagnosis: "",
    Remarks: "",
    Medicine: "",
  };

  const [consultation, setConsultation] = useState(initialState);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setConsultation({
      ...consultation,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Handle Submit clicked");
    console.log(consultation);

    const url = "http://localhost:8000/addConsultation/";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(consultation),
    });
    if (response.status == 201) {
      console.log("CONSULTATION ADDED");
      // TODO: REDIRECT TO VIEW CONSULTATIONS PAGE
    }
  };

  return (
    <Container style={{ position: "relative" }}>
      <Card elevation={6}>
        <CardContent sx={{ margin: "30px" }}>
          <form onSubmit={handleSubmit}>
            <FormControl sx={{ width: "100%" }}>
              <Box sx={{ flexGrow: "1" }}>
                <Typography
                  variant="h4"
                  sx={{ marginBottom: "10px", textAlign: "center" }}
                >
                  Add Consultation
                </Typography>
                {/* MAIN CONTAINER */}
                <Grid
                  container
                  columns={12}
                  sx={{
                    marginLeft: "10px",
                    marginTop: "30px",
                    rowGap: "30px",
                  }}
                >
                  {/* DOCTOR LICENSE NUMBER, DATE, ADDHAR NUMBER, */}
                  <Grid container spacing={4}>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                      <TextField
                        name="License_Number"
                        id="License_Number"
                        label="Doctor License Number"
                        value={consultation.License_Number}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                      <TextField
                        type="number"
                        name="Aadhaar_Number"
                        id="Aadhaar_Number"
                        label="Addhar Number"
                        value={consultation.Aadhaar_Number}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack>
                          <DesktopDatePicker
                            label="Date"
                            inputFormat="dd/MM/yyyy"
                            value={consultation.date}
                            onChange={(newValue) =>
                              setConsultation({
                                ...consultation,
                                date: newValue,
                              })
                            }
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </Stack>
                      </LocalizationProvider>
                    </Grid>
                  </Grid>
                  {/* HEIGHT, WEIGHT */}
                  <Grid container spacing={4}>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        name="Height"
                        id="Height"
                        label="Height"
                        value={consultation.Height}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        name="Weight"
                        id="Weight"
                        label="Weight"
                        value={consultation.Weight}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  {/* PRESSURE, TEMPRATURE */}
                  <Grid container spacing={4}>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        name="Pressure"
                        id="Pressure"
                        label="Pressure"
                        value={consultation.Pressure}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        name="Temprature"
                        id="Temprature"
                        label="Temprature"
                        value={consultation.Temprature}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  {/* MEDICINE */}
                  <Grid container spacing={4}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <TextField
                        name="Medicine"
                        id="Medicine"
                        label="Medicine"
                        value={consultation.Medicine}
                        onChange={handleChange}
                        fullWidth
                        multiline
                      />
                    </Grid>
                  </Grid>
                  {/* DIAGNOSIS REMARKS */}
                  <Grid container spacing={4}>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        name="Diagnosis"
                        id="Diagnosis"
                        label="Diagnosis"
                        value={consultation.Diagnosis}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        name="Remarks"
                        id="Remarks"
                        label="Remarks"
                        value={consultation.Remarks}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  {/* ADD CONSULTATION */}
                  <Grid container spacing={4}>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <Button type="submit" variant="contained">
                        Add Consultation
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
  );
};

export default AddConsultation;
