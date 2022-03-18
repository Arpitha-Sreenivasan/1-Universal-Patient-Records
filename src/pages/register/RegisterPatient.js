import {
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  Select,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import React from "react";

const RegisterPatient = ({
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
                  {/* PATIENT HABITS AND CHRONIC DISEASE */}
                  <Grid container spacing={4}>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <FormControl sx={{ width: "100%" }}>
                        <InputLabel id="habits_label">If any Habits</InputLabel>
                        <Select
                          labelId="habits_label"
                          id="patientHabits"
                          name="patientHabits"
                          label="If any Habits"
                          fullWidth
                          multiple
                          value={userDetails.patientHabits}
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
                          id="chronicDisease"
                          name="chronicDisease"
                          label="If any Chronic Disease"
                          fullWidth
                          multiple
                          value={userDetails.chronicDisease}
                          onChange={handleChange}
                        >
                          <MenuItem value={"Thyroid"}>Thyroid</MenuItem>
                          <MenuItem value={"Pressure"}>Pressure</MenuItem>
                          <MenuItem value={"Diabetes"}>Diabetes</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>

                  {/* NEXT BUTTON */}
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

export default RegisterPatient;
