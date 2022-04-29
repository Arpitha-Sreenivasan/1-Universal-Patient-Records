import {Grid, Card, CardHeader, CardContent, 
TextField, Typography, Divider, 
CardActions, Button, Alert, IconButton, Collapse } from '@mui/material';
import React from 'react'

const Patientdetails =()=> {
    const patientvalue = {
        patientName:'Some name',
        'DOB':'02-02-2022',
        email:"someemail@gmail.com",
        Address:'some address',
        habits:'Smoking, Tabacco, Alcohol',
        chronicDisease:'Thyroid, Pressure, Diabetes'
    }
  return (
    <Grid container justifyContent="center">
        <Grid item my={1} lg={10} xs={12}>
            <Card elevation={6}>
                <CardHeader title="Patient Profile" />
                <CardContent>
                    <Divider />
                        <Typography mt={1} color="text.secondary">
                            Personal Information: 
                        </Typography>
                        <Grid container justifyContent="evenly" my={1}>
                            <Grid item xs={12} lg={4} p={1}>
                                <TextField name='patientname' id='patient_name' fullWidth margin="dense" id="outlined-basic" label="Patient Name" variant="outlined" defaultValue={patientvalue.patientName} inputProps={{ readOnly: true }} />
                            </Grid>
                            <Grid item xs={12} lg={4} p={1}>
                                <TextField name='dob' id='dob' fullWidth margin="dense" id="outlined-basic" label="Date of Birth" variant="outlined" defaultValue={patientvalue.DOB} inputProps={{ readOnly: true }} />
                            </Grid>
                            <Grid item xs={12} lg={4} p={1}>
                                <TextField name='email' id='email' fullWidth margin="dense" id="outlined-basic" label="Patient Email" variant="outlined" defaultValue={patientvalue.email} 
                                // onChange={} 
                                // inputProps={{ readOnly: isEditable }} 
                                />
                            </Grid> 
                        </Grid>
                        

                        <Grid container justifyContent="evenly" my={1}>
                            <Grid item xs={12} lg={12} p={1}>
                                <TextField name='address' id="patient" fullWidth margin="dense" id="outlined-basic" label="Address" variant="outlined" defaultValue={patientvalue.Address} inputProps={{ readOnly: true }} 
                                // onChange={handleChange}
                                 />
                            </Grid>
                        </Grid>
                        <Divider />

                        <Typography mt={1} color="text.secondary">
                            Habits:
                        </Typography>
                        <Grid container justifyContent="evenly" my={1}>
                            <Grid item xs={12} lg={12} p={1}>
                                <TextField name='habits' id="habits" fullWidth margin="dense" id="outlined-basic" label="Habits" variant="outlined" defaultValue={patientvalue.habits} inputProps={{ readOnly: true }} 
                                // onChange={handleChange}
                                 />
                            </Grid>
                        </Grid>
                        <Divider />

                        <Typography mt={1} color="text.secondary">
                            Chronic Disease:
                        </Typography>
                        <Grid container justifyContent="evenly" my={1}>
                            <Grid item xs={12} lg={12} p={1}>
                                <TextField name='ChronicDisease' id="ChronicDisease" fullWidth margin="dense" id="outlined-basic" label="Chronic Disease" variant="outlined" defaultValue={patientvalue.chronicDisease} inputProps={{ readOnly: true }} 
                                // onChange={handleChange}
                                 />
                            </Grid>
                        </Grid>
                       
                </CardContent>
            </Card>
        </Grid>
    </Grid>
  )
}

export default Patientdetails;