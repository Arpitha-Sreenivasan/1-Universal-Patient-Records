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
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const AddTest = () => {
  const initialState = {
    Aadhaar_Number: "",
    Test_Name: "",
    Test_Date: Date.now(),
    Test_PDF: null,
  };

  const [test, setTest] = useState(initialState);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setTest({
      ...test,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Handle Submit clicked");
    console.log(test);

    const formData = new FormData();
    formData.append("Aadhaar_Number", test.Aadhaar_Number);
    formData.append("Test_Name", test.Test_Name);
    formData.append("Test_Date", test.Test_Date);
    formData.append("Test_PDF", test.Test_PDF);
    console.log(formData);
    console.log(formData.get("Aadhaar_Number"));
    
    const url = "http://localhost:8000/addTest/";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(test),

    });

    if (response.status == 201) {
      console.log("TEST REPORT ADDED");
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
                  Add Test
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
                  {/*ADDHAR NUMBER, DATE */}
                  <Grid container spacing={4}>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        type="number"
                        name="Aadhaar_Number"
                        id="Aadhaar_Number"
                        label="Addhar Number"
                        value={test.Aadhaar_Number}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack>
                          <DesktopDatePicker
                            label="Date"
                            inputFormat="dd/MM/yyyy"
                            value={test.Test_Date}
                            onChange={(newValue) =>
                              setTest({
                                ...test,
                                Test_Date: newValue,
                              })
                            }
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </Stack>
                      </LocalizationProvider>
                    </Grid>
                  </Grid>
                  {/* TEST NAME */}
                  <Grid container spacing={4}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <TextField
                        name="Test_Name"
                        id="Test_Name"
                        label="Test Name"
                        value={test.Test_Name}
                        onChange={handleChange}
                        fullWidth
                        required
                      />
                    </Grid>
                  </Grid>
                  {/* TEST PDF */}
                  <Grid container spacing={4}>
                    <Grid item xl={4} lg={4} md={4} sm={4} xs={12}>
                      <Typography sx={{ fontWeight: "bold" }}>
                        Upload Test Report:
                      </Typography>
                    </Grid>
                    <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                      <input
                        id="addTest"
                        name="addTest"
                        type="file"
                        onChange={(event) => {
                          setTest({ ...test, Test_PDF: event.target.files[0] });
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={4}>
                    <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
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
  );
};

export default AddTest;
