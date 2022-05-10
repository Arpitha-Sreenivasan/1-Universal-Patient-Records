import React from 'react';
import { Button } from '@mui/material';
import ShowRecord from '@mui/icons-material/PreviewOutlined';
import Switch from '@mui/material/Switch';
import DataGridHelper from '../DataGridHelper';
import VerifiedIcon from '@mui/icons-material/VerifiedOutlined';
import NotVerifiedIcon from '@mui/icons-material/GppMaybeOutlined';

export default function DoctorList() {
    const [selectedRow, setSelectedRow] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const doctorList = [
        {
            'First_Name': 'Amit',
            'Last_Name': 'Rastogi',
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Doctor_Qualification': 'MBBS',
            'Email': 'abc@gmail.com',
            'Phone': '9898989898',
            'Date_of_Birth': '02-01-1983',
            'Gender': 'Male',
            'Address': 'Gandhinagar',
            'Is_Active': false,
            'Is_Verified': false,
        },
        {
            'First_Name': 'Aayush',
            'Last_Name': 'Gupta',
            'Aadhar_Number': '1570-5596-5620-2530',
            'Doctor_License_No': '0000254 KFD',
            'Doctor_Qualification': 'MBBS',
            'Email': 'xyz@gmail.com',
            'Phone': '9898989999',
            'Date_of_Birth': '02-05-1992',
            'Gender': 'Male',
            'Address': 'Ahmedabad',
            'Is_Active': true,
            'Is_Verified': true,
        },
        {
            'First_Name': 'Payal',
            'Last_Name': 'Vasava',
            'Aadhar_Number': '5562-4596-5620-5530',
            'Doctor_License_No': '0000345 ATK',
            'Doctor_Qualification': 'MBBS',
            'Email': 'ifg1@gmail.com',
            'Phone': '9999989898',
            'Date_of_Birth': '09-05-1995',
            'Gender': 'Female',
            'Address': 'Rajkot',
            'Is_Active': true,
            'Is_Verified': true,
        },
    ];
    const rows = [];
    doctorList.forEach((doctor) => {
        rows.push({
            ...doctor,
            'id': doctor.Doctor_License_No,
        });
    });

    const onDoctorActiveStatusChange = (doctor) => {
        console.log("Doctor Activity Status Changed");
        console.log(doctor);
    }

    const verifyDoctor = (doctor) => {
        console.log("Doctor Verified");
        console.log(doctor);
    }

    const showModal = (row) => {
        delete row.id;
        row.Active = <Switch onChange={onDoctorActiveStatusChange.bind(this, row)} defaultChecked={row.Is_Active} />;
        row.Verify = row.Is_Verified ? "Verified" : <Button variant="contained" color="success" onClick={verifyDoctor.bind(this, row)}>Verify</Button>;
        setSelectedRow(row);
        setOpen(true);
        console.log(row);
    }
    const columns = [
        { field: 'First_Name', flex: 1, headerName: 'First Name' },
        { field: 'Last_Name', flex: 1, headerName: 'Last Name' },
        { field: 'Aadhar_Number', flex: 1, headerName: 'Aadhar Number' },
        { field: 'Doctor_License_No', flex: 1, headerName: 'Doctor License Number' },
        { field: 'Doctor_Qualification', flex: 1, headerName: 'Doctor Qualification' },
        { field: 'Email', flex: 1, headerName: 'Email' },
        { field: 'Phone', flex: 1, headerName: 'Phone' },
        { field: 'Date_of_Birth', flex: 1, headerName: 'Date of Birth' },
        { field: 'Gender', flex: 1, headerName: 'Gender' },
        { field: 'Address', flex: 1, headerName: 'Address' },
        { field: 'Is_Verified', flex: 1, headerName: 'Verified', renderCell: (params) => {
            return (
                params.row.Is_Verified ? <VerifiedIcon color='success'></VerifiedIcon> : <NotVerifiedIcon color='error'></NotVerifiedIcon>
            )
        }},
        { field: 'Is_Active', flex: 1, headerName: 'Active', renderCell: (params) => {
            return (
                params.row.Is_Active ? <VerifiedIcon color='success'></VerifiedIcon> : <NotVerifiedIcon color='error'></NotVerifiedIcon>
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
        }
    ];
    return (
        <>
            <DataGridHelper rows={rows}
                columns = {columns}
                open = {open}
                setOpen = {setOpen}
                title={"Doctor's Record"}
                setSelectedRow = {setSelectedRow}
                selectedRow = {selectedRow}
                handleClose={handleClose}
            >
            </DataGridHelper>
        </>
    );
}