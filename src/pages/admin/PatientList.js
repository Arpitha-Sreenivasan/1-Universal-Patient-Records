import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import ShowRecord from '@mui/icons-material/PreviewOutlined';
import Switch from '@mui/material/Switch';
import DataGridHelper from '../DataGridHelper';
import VerifiedIcon from '@mui/icons-material/VerifiedOutlined';
import NotVerifiedIcon from '@mui/icons-material/GppMaybeOutlined';
import MedicalRecord from '@mui/icons-material/OpenInNew';
import { Link } from 'react-router-dom';

export default function DoctorList() {
    const [selectedRow, setSelectedRow] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    // const patientList = [
    //     {
    //         'First_Name': 'Amit',
    //         'Last_Name': 'Rastogi',
    //         'Aadhar_Number': '1562-4596-5620-2530',
    //         'Email': 'abc@gmail.com',
    //         'Contact': '7896541230',
    //         'DOB': '02-01-1983',
    //         'Gender': 'Male',
    //         'Habits': 'Smoking',
    //         'Chronic_Diseases': 'Blood Pressure',
    //         'Address': 'Gandhinagar',
    //         'Is_active': false
    //     },
    //     {
    //         'First_Name': 'Amit',
    //         'Last_Name': 'Rastogi',
    //         'Aadhar_Number': '1562-4595-5620-2530',
    //         'Email': 'abc@gmail.com',
    //         'Contact': '7896541230',
    //         'DOB': '02-01-1983',
    //         'Gender': 'Male',
    //         'Habits': 'Smoking',
    //         'Chronic_Diseases': 'Blood Pressure',
    //         'Address': 'Gandhinagar',
    //         'Is_active': false
    //     },
    //     {
    //         'First_Name': 'Amit',
    //         'Last_Name': 'Rastogi',
    //         'Aadhar_Number': '1560-4596-5620-2530',
    //         'Email': 'abc@gmail.com',
    //         'Contact': '7896541230',
    //         'DOB': '02-01-1983',
    //         'Gender': 'Male',
    //         'Habits': 'Smoking',
    //         'Chronic_Diseases': 'Blood Pressure',
    //         'Address': 'Gandhinagar',
    //         'Is_active': true
    //     }
    // ];
    const [rows, setRows] = useState({});
    

    useEffect(() => {
        fetch('http://127.0.0.1:8000/getAllPatient', {
            method: "GET",
            "Content-Type": "application/json"
        })
        .then((response) => response.json())
        .then((patientList) => {
            let rowArr = [];
            patientList.forEach((patient) => {
                console.log(patient);
                rowArr.push({
                    ...patient,
                    'Chronic_Diseases': patient['Chronic_Diseases'].substr(1, patient['Chronic_Diseases'].length-2),
                    'Habits': patient['Habits'].substr(1, patient['Habits'].length-2),
                    'id': patient.Aadhar_Number,
                });
            });
            setRows(rowArr);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const onActiveStatusChange = (patient) => {
        console.log("Patient Activity Status Changed");
        console.log(patient);
    }

    const showModal = (row) => {
        delete row.id;
        row.Active = <Switch onChange={onActiveStatusChange.bind(this, row)} defaultChecked={row.Is_active} />;
        delete row.Is_active;
        setSelectedRow(row);
        setOpen(true);
        console.log(row);
    }
    const columns = [
        { field: 'First_Name', flex: 1, headerName: 'First Name' },
        { field: 'Last_Name', flex: 1, headerName: 'Last Name' },
        { field: 'Aadhar_Number', flex: 1, headerName: 'Aadhar Number' },
        { field: 'Email', flex: 1, headerName: 'Email' },
        { field: 'Contact', flex: 1, headerName: 'Contact' },
        { field: 'DOB', flex: 1, headerName: 'Date of Birth' },
        { field: 'Gender', flex: 1, headerName: 'Gender' },
        { field: 'Habits', flex: 1, headerName: 'Habits' },
        { field: 'Chronic_Diseases', flex: 1, headerName: 'Chronic Diseases' },
        { field: 'Address', flex: 1, headerName: 'Address' },
        { field: 'Is_active', flex: 1, headerName: 'Active', renderCell: (params) => {
            return (
                params.row.Is_active ? <VerifiedIcon color='success'></VerifiedIcon> : <NotVerifiedIcon color='error'></NotVerifiedIcon>
            )
        }},
        {
            field: 'ShowRecordBtn', flex: 1, headerName: 'Show Record', renderCell: (params) => {
                return (
                    <Button>
                        <ShowRecord color='secondary' onClick={showModal.bind(this, params.row)}>
                        </ShowRecord>
                    </Button>
                );
            }
        },
        {
            field: 'OpenMedicalRecordBtn', flex: 1, headerName: 'Medical Record', renderCell : (params) => {
                return (
                    <Button>
                        <Link to={`../${params.row.Aadhar_Number}/records`} target="_blank">
                            <MedicalRecord color='secondary'></MedicalRecord>
                        </Link>
                    </Button>
                )
            }
        },
        {
            field: 'OpenTestReportsBtn', flex: 1, headerName: 'Test Reports', renderCell : (params) => {
                return (
                    <Button>
                        <Link to={`../:aadharnumber/tests`} target="_blank">
                            <MedicalRecord color='secondary'></MedicalRecord>
                        </Link>
                    </Button>
                )
            }
        }
    ];
    return (
        <>
            <DataGridHelper rows={rows}
                columns = {columns}
                open = {open}
                setOpen = {setOpen}
                title={"Patient's Record"}
                setSelectedRow = {setSelectedRow}
                selectedRow = {selectedRow}
                handleClose={handleClose}
            >
            </DataGridHelper>
        </>
    );
}