import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import {
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  InputLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const RegisterUser = ({
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
                  {/* FIRST NAME AND LAST NAME */}
                  <Grid container spacing={4}>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        name="firstName"
                        id="firstName"
                        label="First Name"
                        value={userDetails.firstName}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        name="lastName"
                        id="lastName"
                        label="Last Name"
                        value={userDetails.lastName}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  {/* EMAIL ADDRESS PASSWORD */}
                  <Grid container spacing={4}>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        name="email"
                        id="email"
                        label="Email ID"
                        value={userDetails.email}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        name="password"
                        id="password"
                        label="Password"
                        value={userDetails.password}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  {/* ADDHAR NUMBER CONTACT */}
                  <Grid container spacing={4}>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        name="addharNumber"
                        id="addharNumber"
                        label="Addhar Number"
                        value={userDetails.addharNumber}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        name="contact"
                        id="contact"
                        label="Contact Number"
                        value={userDetails.contact}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                  </Grid>

                  {/* DATE OF BIRTH GENDER */}

                  <Grid container spacing={4}>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack>
                          <DesktopDatePicker
                            label="Date of Birth"
                            inputFormat="dd/MM/yyyy"
                            value={userDetails.dateOfBirth}
                            onChange={(newValue) =>
                              setUserDetails({
                                ...userDetails,
                                dateOfBirth: newValue,
                              })
                            }
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </Stack>
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <FormControl sx={{ width: "100%" }}>
                        <InputLabel id="gender_label">Gender</InputLabel>
                        <Select
                          labelId="gender_label"
                          id="gender"
                          name="gender"
                          label="Gender"
                          fullWidth
                          value={userDetails.gender}
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
                  {/* ADDRESS */}
                  <Grid container>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                      <TextField
                        label="Please Enter Address"
                        id="location"
                        name="location"
                        value={userDetails.location}
                        onChange={handleChange}
                        multiline
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={4}>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        label="City"
                        id="city"
                        name="city"
                        value={userDetails.city}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <TextField
                        label="State"
                        id="state"
                        name="state"
                        value={userDetails.location}
                        onChange={handleChange}
                        multiline
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  {/* REGISTER AS */}
                  <Grid container spacing={4}>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <Typography variant="h6">
                        How do you want to register?
                      </Typography>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <FormControl>
                        <RadioGroup
                          row
                          name="registerAs"
                          value={userDetails.registerAs}
                          onChange={handleChange}
                        >
                          <FormControlLabel
                            value="doctor"
                            control={<Radio />}
                            label="Doctor"
                          />
                          <FormControlLabel
                            value="patient"
                            control={<Radio />}
                            label="Patient"
                          />
                          <FormControlLabel
                            value="both"
                            control={<Radio />}
                            label="Both"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  </Grid>
                  {/* NEXT BUTTON */}
                  <Grid container spacing={4}>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                      <Button variant="contained" onClick={nextStep}>
                        Next
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

export default RegisterUser;
