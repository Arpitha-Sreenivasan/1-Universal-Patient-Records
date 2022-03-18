import {
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import React from "react";

const RegisterDoctor = ({
  userDetails,
  setUserDetails,
  nextStep,
  handleChange,
  handleSubmit,
}) => {
  return (
    <Container style={{ position: "relative" }}>
      <Card elevation={6}>
        <CardContent sx={{ margin: "30px" }}>
          <form onSubmit={handleSubmit}>
            <FormControl sx={{ width: "100%" }}>
              <Box sx={{ flexGrow: "1" }}>
                {/* MAIN GRID CONTAINER */}
                <Grid
                  container
                  columns={12}
                  sx={{ marginLeft: "10px", marginTop: "30px", rowGap: "30px" }}
                >
                  {/* DOCTOR LICENCE NUMBER AND QUALIFICATION */}
                  <Grid container spacing={4}>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        name="doctorLicenceNumber"
                        id="doctorLicenceNumber"
                        label="Doctor Licence Number"
                        value={userDetails.doctorLicenceNumber}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        name="doctorQualification"
                        id="doctorQualification"
                        label="Doctor Qualification"
                        value={userDetails.doctorQualification}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                  </Grid>

                  {/* SUBMIT BUTTON */}
                  <Grid container spacing={4}>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        onClick={() => {
                          console.log("Submit button clicked");
                        }}
                      >
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

export default RegisterDoctor;
