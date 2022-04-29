import React,{useState} from 'react';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
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
    Button,
    InputLabel,
    Radio,
    RadioGroup,
    FormControlLabel
  } from "@mui/material";

  const TestDetail = ()=>{
    const initialstate = {
        testname:"",
        dateOfBirth:"",
        testDoc: ""
    }

    const [userDetails, setUserDetails] = useState(initialstate);

    function testdata(e){
      e.preventDefault();
      console.log(initialstate);
    }
      return(
          <div>
              <Grid container 
                justifyContent={'center'} 
                height="100%"
                border={'1px solid black'} 
                textAlign={'center'}
                margin={'auto'}
                md={8}
                xs={10}
                >
                <Grid item xl={12} xs={12} textAlign={"center"} justify="center" border={'2px solid blue'} paddingBottom={'3em'}>
                    <Typography align="center" fontWeight={"Bold"}>
                        Test Details
                    </Typography>

                    <form onSubmit={testdata}>

                    
                        <Grid width={"100%"}>
                        <Grid item md={8} sm={12} margin={'auto'} textAlign={"center"} justify="center">
                            <TextField
                                fullWidth
                                label="Test Name"
                                placeholder="Enter name of the test"
                                margin='dense'
                                style={{ marginBottom: "2em", marginTop:'2em'}}
                                id="testname"
                                name="testname"
                                value={userDetails.testname}
                                onChange={event=> setUserDetails(event.target.value)}
                                required
                                
                            />


                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack>
                          <DesktopDatePicker
                            label="Test Date"
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
                            
                            
                        <Grid display={'flex'} justifyContent={'space-evenly'} alignContent={'center'} marginTop={'2em'}>
                            <Typography  marginTop={'1em'}>
                                Upload your Test Report
                            </Typography>
                            <Button>
                                <TextField type="file" hidden value={userDetails.testDoc}  
                                onChange={event=> setUserDetails(event.target.value)}/>
                            </Button>
                        </Grid>
                          
                         
                        
                        

                  
                        </Grid>

                        </Grid>
                            
                             {/* Login Button */}
                      <Grid margin={"auto"} marginTop="2em" marginBottom={'1em'}>
                            <Button type="submit" variant="contained" disableElevation>
                                Submit
                            </Button>
                        </Grid>


                  
                            
                    </form>

                   

                </Grid>
              </Grid>
          </div>
      )
  }
  export default TestDetail;