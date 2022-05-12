import React, { useEffect, useState } from 'react';
import { Grid, Card, CardHeader, CardContent, TextField, Typography, Divider, CardActions, Button, Alert, IconButton, Collapse } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/EditOutlined';
import CloseIcon from '@mui/icons-material/Close';

export default function Profile() {
    const [doctorInfo, setDoctorInfo] = useState({
        'Aadhar_Number': "",
        'Contact': "",
        'DOB': "",
        'Email': "",
        'First_Name': "",
        'Gender': "",
        'Last_Name':"",
        'License_Number': "",
        'LocationID': "",
        'Password': "",
        'Qualification': ""
    });
    const [isEditable, toggleEditable] = useState(true);
    const [alertInfo, setAlertInfo] = useState({
        'type': 'success',
        'text': ''
    });
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const doctorDetails = {
            'AadharNumber': '4580256322201524',
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
        localStorage.setItem("aadhar", "7451389455");
        localStorage.setItem("role", "Doctor");
        const aadharNum = localStorage.getItem("aadhar");
        fetch(`http://127.0.0.1:8000/getDoctor/${aadharNum}`, {
            method: "GET",
            'Content-Type': 'application/json'
            }).then((response) => response.json())
            .then((response) => {
                console.log(response);
                setDoctorInfo(response);
            }).catch((err) => {
                console.log(err);
                console.log(doctorDetails);
                setDoctorInfo({
                    'Aadhar_Number': "",
                    'Contact': "",
                    'DOB': "",
                    'Email': "",
                    'First_Name': "",
                    'Gender': "",
                    'Last_Name':"",
                    'License_Number': "",
                    'LocationID': "",
                    'Password': "",
                    'Qualification': ""
                });
            });
    }, []);

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
        console.log(name + '-' + value);
        console.log(doctorInfo);
        setDoctorInfo({
            ...doctorInfo,
            [name]: value,
        });
    };

    const updateDoctorInfo = (ev) => {
        console.log(doctorInfo);
        const aadharNum = localStorage.getItem("aadhar");
        const role = localStorage.getItem("role");
        fetch(`http://127.0.0.1:8000/${role}/${aadharNum}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(doctorInfo)
        })
        .then((res) => {
            console.log(res);
            toggleEditable(true);
            setAlert('success', 'Profile Details Updated Successfully');
            setTimeout(hideAlert, 5000);
        }).catch((err) => {
            console.log(err);
            toggleEditable(true);
            setAlert('error', 'Error Updating Profile Details');
            setTimeout(hideAlert, 5000);
        })
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
                                <TextField name='Aadhar_Number' id='aadhar_number' fullWidth margin="dense" label="Aadhar Number" variant="outlined" value={doctorInfo.Aadhar_Number} inputProps={{ readOnly: true }} />
                            </Grid>
                            <Grid item xs={12} lg={4} p={1}>
                                <TextField name='License_Number' id="license_number" fullWidth margin="dense" label="License Number" variant="outlined" value={doctorInfo.License_Number} inputProps={{ readOnly: true }} />
                            </Grid>
                            <Grid item xs={12} lg={4} p={1}>
                                <TextField name='Qualification' id='doct_qualification' fullWidth margin="dense" label="Qualification" variant="outlined" value={doctorInfo.Qualification} onChange={handleChange} inputProps={{ readOnly: isEditable }} />
                            </Grid>
                        </Grid>
                        <Divider />

                        <Typography mt={1} color="text.secondary">
                            Personal Information:
                        </Typography>
                        <Grid container justifyContent="evenly" my={1}>
                            <Grid item xs={12} lg={4} p={1}>
                                <TextField name='First_Name' id="first_name" fullWidth margin="dense" label="First Name" variant="outlined" value={doctorInfo.First_Name} onChange={handleChange} inputProps={{ readOnly: isEditable }} />
                            </Grid>
                            <Grid item xs={12} lg={4} p={1}>
                                <TextField name='Last_Name' id="last_name" fullWidth margin="dense" label="Last Name" variant="outlined" value={doctorInfo.Last_Name} onChange={handleChange} inputProps={{ readOnly: isEditable }} />
                            </Grid>
                            <Grid item xs={12} lg={4} p={1}>
                                <TextField name='Gender' id="doct_gender" fullWidth margin="dense" label="Gender" variant="outlined" value={doctorInfo.Gender} inputProps={{ readOnly: isEditable }} />
                            </Grid>
                        </Grid>
                        <Divider />

                        <Typography mt={1} color="text.secondary">
                            Contact Information:
                        </Typography>
                        <Grid container justifyContent="evenly" my={1}>
                            <Grid item xs={12} lg={6} p={1}>
                                <TextField name='Email' id="doct_email" fullWidth margin="dense" label="Email" variant="outlined" value={doctorInfo.Email} inputProps={{ readOnly: true }} onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} lg={6} p={1}>
                                <TextField name='Contact' id="doct_contact" fullWidth margin="dense" label="Contact" variant="outlined" value={doctorInfo.Contact} onChange={handleChange} inputProps={{ readOnly: isEditable }} />
                            </Grid>
                        </Grid>
                        <Divider />

                        <Typography mt={1} color="text.secondary">
                            Credentials:
                        </Typography>
                        <Grid container justifyContent="evenly" my={1}>
                            <Grid item xs={12} lg={6} p={1}>
                                <TextField name='Password' id="doct_password" fullWidth margin="dense" type="password" label="Password" variant="outlined" value={doctorInfo.Password} onChange={handleChange} inputProps={{ readOnly: isEditable }} />
                            </Grid>
                            <Grid item xs={12} lg={6} p={1}>
                                <TextField name='ConfirmPassowrd' id="doct_conf_password" fullWidth margin="dense" type="password" label="Confirm Password" variant="outlined" value={""} onChange={handleChange} inputProps={{ readOnly: isEditable }} />
                            </Grid>
                        </Grid>
                        <Divider />

                        <Typography mt={1} color="text.secondary">
                            Geopraphic Infromation:
                        </Typography>
                        <Grid container justifyContent="evenly" my={1}>
                            <Grid item xs={12} p={1}>
                                <TextField name='Address' id="doct_addr" multiline maxRows={5} fullWidth margin="dense" id="outlined-basic" label="Address" variant="outlined" value={doctorInfo.Address} inputProps={{ readOnly: isEditable }} onChange={handleChange} />
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