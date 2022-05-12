import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, Alert, CardContent, CardHeader, TextField, Button, TableContainer, Table, TableBody, TableRow, TableCell, Typography } from '@mui/material';
import MedicalRecord from '@mui/icons-material/OpenInNew';

export default function SearchPatient() {
    const [searchValue, setSearchValue] = React.useState("");
    const [selectedRow, setSelectedRow] = React.useState(null);
    const performSearch = () => {
        // search will be performed
        var row = {
            'First_Name': 'Amit',
            'Last_Name': 'Rastogi',
            'Aadhar_Number': '1562-4595-5620-2530',
            'Email': 'abc@gmail.com',
            'Contact': '7896541230',
            'DOB': '02-01-1983',
            'Gender': 'Male',
            'Habits': 'Smoking',
            'Chronic_Diseases': 'Blood Pressure',
            'Address': 'Gandhinagar',
            'Is_Active': false,
        }
        row['Test Reports'] = <Button><Link to={`../${row.Aadhar_Number}/tests`} target="_blank"><MedicalRecord color='secondary'></MedicalRecord></Link></Button>
        row['Medical Records'] = <Button><Link to={`../${row.Aadhar_Number}/records`} target="_blank"><MedicalRecord color='secondary'></MedicalRecord></Link></Button>;
        setSelectedRow(row);
    }
    return (
        <Grid container justifyContent="center">
            <Grid item my={1} lg={10} xs={12} style={{ flex: 1 }}>
                <Card elevation={6}>
                    <CardHeader title={"Search Patient"} />
                    <CardContent sx={{ margin: "0px 30px 30px 30px" }}>
                        <TextField
                            xs={10}
                            label="Aadhar Number"
                            placeholder="Search Aadhar Number Here"
                            justify="center"
                            fullWidth
                            margin="dense"
                            style={{ marginBottom: "2em", marginTop: '2em' }}
                            id="email"
                            name="email"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            required
                        />
                        <Button variant="contained" onClick={performSearch}>Search</Button>
                        <br />
                        <br />
                        {selectedRow ?
                        <TableContainer component={Card}>
                            <Table aria-label="simple table">
                                <TableBody>
                                    {Object.entries(selectedRow).map((entry) => (
                                        <TableRow
                                            key={entry[0]}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {entry[0]}
                                            </TableCell>
                                            <TableCell align="right">{entry[1]}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        :
                        <Alert variant="filled" severity={"warning"}>
                            No Such Record Found
                        </Alert>
                        }
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}