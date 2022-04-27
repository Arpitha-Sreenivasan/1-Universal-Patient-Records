import React, { useState, useRef } from 'react';
import { Grid, Card, CardHeader, CardContent, TextField, Typography, Divider, CardActions, Button, Alert, IconButton, Collapse } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/EditOutlined';
import CloseIcon from '@mui/icons-material/Close';

export default function Profile() {
    const doctorDeatils = {
        'aadharNumber': '4580256322201524',
        'licenseNumber': 'G-36076',
        'qualification': 'M.B.B.S, M.D',
        'firstName': 'Adam',
        'lastName': 'John',
        'email': 'adamjohn@gmail.com',
        'contact': '9898336060',
        'gender': 'Male',
        'phone': '0261-2322112',
        'password': 'YouWontFindRealOne',
        'confirmPassowrd': '',
        'address': 'A-1001, Shiv Shakti Apartment,\nVesu,\nSurat-395007',
    };

    const [doctorInfo, setDoctorInfo] = useState(doctorDeatils);
    const [isEditable, toggleEditable] = useState(true);
    const [alertInfo, setAlertInfo] = useState({
        'type': 'success',
        'text': ''
    });
    const [showAlert, setShowAlert] = useState(false);

    const hideAlert = () => {
        setShowAlert(false);
    }

    const setAlert = (type, text) => {
        setAlertInfo({
            type,
            text
        });
        setShowAlert(true);
    }

    const handleEditClick = () => {
        toggleEditable(false);
    }

    const handleChange = (ev) => {
        let { name, value } = ev.target;
        setDoctorInfo({
            ...doctorInfo,
            [name]: value,
        });
    };

    const updateDoctorInfo = (ev) => {
        console.log(doctorInfo);
        toggleEditable(true);
        setAlert('success', 'Profile Details Updated Successfully');
        setTimeout(hideAlert, 5000);
    };

    return (
        <Grid container justifyContent="center">
            <Grid item my={1} lg={10} xs={12}>
                <Card elevation={6}>
                    <CardHeader title="Doctor Profile" />
                    <CardContent>
                        <Collapse in={showAlert}>
                        <Alert action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={hideAlert}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>}
                            variant="filled" severity={alertInfo.type}> {alertInfo.text}
                        </Alert>
                        </Collapse>

                        <Divider />
                        <Typography mt={1} color="text.secondary">
                            Doctoral Information:
                        </Typography>
                        <Grid container justifyContent="evenly" my={1}>
                            <Grid item xs={12} lg={4} p={1}>
                                <TextField name='aadharNumber' id='aadhar_number' fullWidth margin="dense" id="outlined-basic" label="Aadhar Number" variant="outlined" defaultValue={doctorInfo.aadharNumber} inputProps={{ readOnly: true }} />
                            </Grid>
                            <Grid item xs={12} lg={4} p={1}>
                                <TextField name='licenseNumber' id="license_number" fullWidth margin="dense" id="outlined-basic" label="License Number" variant="outlined" defaultValue={doctorInfo.licenseNumber} inputProps={{ readOnly: true }} />
                            </Grid>
                            <Grid item xs={12} lg={4} p={1}>
                                <TextField name='qualification' id='doct_qualification' fullWidth margin="dense" id="outlined-basic" label="Qualification" variant="outlined" defaultValue={doctorInfo.qualification} onChange={handleChange} inputProps={{ readOnly: isEditable }} />
                            </Grid>
                        </Grid>
                        <Divider />

                        <Typography mt={1} color="text.secondary">
                            Personal Information:
                        </Typography>
                        <Grid container justifyContent="evenly" my={1}>
                            <Grid item xs={12} lg={4} p={1}>
                                <TextField name='firstName' id="first_name" fullWidth margin="dense" id="outlined-basic" label="First Name" variant="outlined" defaultValue={doctorInfo.firstName} onChange={handleChange} inputProps={{ readOnly: isEditable }} />
                            </Grid>
                            <Grid item xs={12} lg={4} p={1}>
                                <TextField name='lastName' id="last_name" fullWidth margin="dense" id="outlined-basic" label="Last Name" variant="outlined" defaultValue={doctorInfo.lastName} onChange={handleChange} inputProps={{ readOnly: isEditable }} />
                            </Grid>
                            <Grid item xs={12} lg={4} p={1}>
                                <TextField name='gender' id="doct_gender" fullWidth margin="dense" id="outlined-basic" label="Gender" variant="outlined" defaultValue={doctorInfo.gender} inputProps={{ readOnly: isEditable }} />
                            </Grid>
                        </Grid>
                        <Divider />

                        <Typography mt={1} color="text.secondary">
                            Contact Information:
                        </Typography>
                        <Grid container justifyContent="evenly" my={1}>
                            <Grid item xs={12} lg={4} p={1}>
                                <TextField name='email' id="doct_email" fullWidth margin="dense" id="outlined-basic" label="Email" variant="outlined" defaultValue={doctorInfo.email} inputProps={{ readOnly: true }} onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} lg={4} p={1}>
                                <TextField name='contact' id="doct_contact" fullWidth margin="dense" id="outlined-basic" label="Contact" variant="outlined" defaultValue={doctorInfo.contact} onChange={handleChange} inputProps={{ readOnly: isEditable }} />
                            </Grid>
                            <Grid item xs={12} lg={4} p={1}>
                                <TextField name='phone' id="doct_phone" fullWidth margin="dense" id="outlined-basic" label="Phone" variant="outlined" defaultValue={doctorInfo.phone} onChange={handleChange} inputProps={{ readOnly: isEditable }} />
                            </Grid>
                        </Grid>
                        <Divider />

                        <Typography mt={1} color="text.secondary">
                            Credentials:
                        </Typography>
                        <Grid container justifyContent="evenly" my={1}>
                            <Grid item xs={12} lg={6} p={1}>
                                <TextField name='password' id="doct_password" fullWidth margin="dense" type="password" id="outlined-basic" label="Password" variant="outlined" defaultValue={doctorInfo.password} onChange={handleChange} inputProps={{ readOnly: isEditable }} />
                            </Grid>
                            <Grid item xs={12} lg={6} p={1}>
                                <TextField name='confirmPassowrd' id="doct_conf_password" fullWidth margin="dense" type="password" id="outlined-basic" label="Confirm Password" variant="outlined" defaultValue={""} onChange={handleChange} inputProps={{ readOnly: isEditable }} />
                            </Grid>
                        </Grid>
                        <Divider />

                        <Typography mt={1} color="text.secondary">
                            Geopraphic Infromation:
                        </Typography>
                        <Grid container justifyContent="evenly" my={1}>
                            <Grid item xs={12} p={1}>
                                <TextField name='address' id="doct_addr" multiline maxRows={5} fullWidth margin="dense" id="outlined-basic" label="Address" variant="outlined" defaultValue={doctorInfo.address} inputProps={{ readOnly: isEditable }} onChange={handleChange} />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Grid container justifyContent="center" my={1}>
                            <Grid item xs={1}>
                                <Button variant="contained" onClick={updateDoctorInfo} startIcon={<SaveIcon />}>Save</Button>
                            </Grid>
                            <Grid item xs={1}>
                                <Button variant="outlined" onClick={handleEditClick} color="myDarkest" startIcon={<EditIcon />}>Edit</Button>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}