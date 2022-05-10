import React from 'react';
import { Button } from '@mui/material';
import ShowRecord from '@mui/icons-material/PreviewOutlined';
import DataGridHelper from '../DataGridHelper';

export default function MedicalRecords() {
    const [selectedRow, setSelectedRow] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const medicalRecords = [
        {
            'Consultation_ID': 1,
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Date': (new Date()).toDateString(),
            'Height': '175 cm',
            'Width': '32 inch',
            'Temprature': '98.6 F',
            'Pressure': '110 mmHg',
            'Diagnosis': 'Cold Fever',
            'Remarks': 'Avoid Ice Creams',
            'Medicine': 'Paracetamol 0-0-1 (Before Sleep), AntiViral 1-0-1(after breakfast and lunch)',
        },
        {
            'Consultation_ID': 2,
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Date': (new Date()).toDateString(),
            'Height': '175 cm',
            'Width': '32 inch',
            'Temprature': '98.6 F',
            'Pressure': '110 mmHg',
            'Diagnosis': 'Cold Fever',
            'Remarks': 'Avoid Ice Creams',
            'Medicine': 'Paracetamol 0-0-1 (Before Sleep), AntiViral 1-0-1(after breakfast and lunch)',
        },
        {
            'Consultation_ID': 3,
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Date': (new Date()).toDateString(),
            'Height': '175 cm',
            'Width': '32 inch',
            'Temprature': '98.6 F',
            'Pressure': '110 mmHg',
            'Diagnosis': 'Cold Fever',
            'Remarks': 'Avoid Ice Creams',
            'Medicine': 'Paracetamol 0-0-1 (Before Sleep), AntiViral 1-0-1(after breakfast and lunch)',
        },
        {
            'Consultation_ID': 4,
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Date': (new Date()).toDateString(),
            'Height': '175 cm',
            'Width': '32 inch',
            'Temprature': '98.6 F',
            'Pressure': '110 mmHg',
            'Diagnosis': 'Cold Fever',
            'Remarks': 'Avoid Ice Creams',
            'Medicine': 'Paracetamol 0-0-1 (Before Sleep), AntiViral 1-0-1(after breakfast and lunch)',
        },{
            'Consultation_ID': 1,
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Date': (new Date()).toDateString(),
            'Height': '175 cm',
            'Width': '32 inch',
            'Temprature': '98.6 F',
            'Pressure': '110 mmHg',
            'Diagnosis': 'Cold Fever',
            'Remarks': 'Avoid Ice Creams',
            'Medicine': 'Paracetamol 0-0-1 (Before Sleep), AntiViral 1-0-1(after breakfast and lunch)',
        },
        {
            'Consultation_ID': 2,
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Date': (new Date()).toDateString(),
            'Height': '175 cm',
            'Width': '32 inch',
            'Temprature': '98.6 F',
            'Pressure': '110 mmHg',
            'Diagnosis': 'Cold Fever',
            'Remarks': 'Avoid Ice Creams',
            'Medicine': 'Paracetamol 0-0-1 (Before Sleep), AntiViral 1-0-1(after breakfast and lunch)',
        },
        {
            'Consultation_ID': 3,
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Date': (new Date()).toDateString(),
            'Height': '175 cm',
            'Width': '32 inch',
            'Temprature': '98.6 F',
            'Pressure': '110 mmHg',
            'Diagnosis': 'Cold Fever',
            'Remarks': 'Avoid Ice Creams',
            'Medicine': 'Paracetamol 0-0-1 (Before Sleep), AntiViral 1-0-1(after breakfast and lunch)',
        },
        {
            'Consultation_ID': 4,
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Date': (new Date()).toDateString(),
            'Height': '175 cm',
            'Width': '32 inch',
            'Temprature': '98.6 F',
            'Pressure': '110 mmHg',
            'Diagnosis': 'Cold Fever',
            'Remarks': 'Avoid Ice Creams',
            'Medicine': 'Paracetamol 0-0-1 (Before Sleep), AntiViral 1-0-1(after breakfast and lunch)',
        },
        {
            'Consultation_ID': 1,
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Date': (new Date()).toDateString(),
            'Height': '175 cm',
            'Width': '32 inch',
            'Temprature': '98.6 F',
            'Pressure': '110 mmHg',
            'Diagnosis': 'Cold Fever',
            'Remarks': 'Avoid Ice Creams',
            'Medicine': 'Paracetamol 0-0-1 (Before Sleep), AntiViral 1-0-1(after breakfast and lunch)',
        },
        {
            'Consultation_ID': 2,
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Date': (new Date()).toDateString(),
            'Height': '175 cm',
            'Width': '32 inch',
            'Temprature': '98.6 F',
            'Pressure': '110 mmHg',
            'Diagnosis': 'Cold Fever',
            'Remarks': 'Avoid Ice Creams',
            'Medicine': 'Paracetamol 0-0-1 (Before Sleep), AntiViral 1-0-1(after breakfast and lunch)',
        },
        {
            'Consultation_ID': 3,
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Date': (new Date()).toDateString(),
            'Height': '175 cm',
            'Width': '32 inch',
            'Temprature': '98.6 F',
            'Pressure': '110 mmHg',
            'Diagnosis': 'Cold Fever',
            'Remarks': 'Avoid Ice Creams',
            'Medicine': 'Paracetamol 0-0-1 (Before Sleep), AntiViral 1-0-1(after breakfast and lunch)',
        },
        {
            'Consultation_ID': 4,
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Date': (new Date()).toDateString(),
            'Height': '175 cm',
            'Width': '32 inch',
            'Temprature': '98.6 F',
            'Pressure': '110 mmHg',
            'Diagnosis': 'Cold Fever',
            'Remarks': 'Avoid Ice Creams',
            'Medicine': 'Paracetamol 0-0-1 (Before Sleep), AntiViral 1-0-1(after breakfast and lunch)',
        },
        {
            'Consultation_ID': 1,
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Date': (new Date()).toDateString(),
            'Height': '175 cm',
            'Width': '32 inch',
            'Temprature': '98.6 F',
            'Pressure': '110 mmHg',
            'Diagnosis': 'Cold Fever',
            'Remarks': 'Avoid Ice Creams',
            'Medicine': 'Paracetamol 0-0-1 (Before Sleep), AntiViral 1-0-1(after breakfast and lunch)',
        },
        {
            'Consultation_ID': 2,
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Date': (new Date()).toDateString(),
            'Height': '175 cm',
            'Width': '32 inch',
            'Temprature': '98.6 F',
            'Pressure': '110 mmHg',
            'Diagnosis': 'Cold Fever',
            'Remarks': 'Avoid Ice Creams',
            'Medicine': 'Paracetamol 0-0-1 (Before Sleep), AntiViral 1-0-1(after breakfast and lunch)',
        },
        {
            'Consultation_ID': 3,
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Date': (new Date()).toDateString(),
            'Height': '175 cm',
            'Width': '32 inch',
            'Temprature': '98.6 F',
            'Pressure': '110 mmHg',
            'Diagnosis': 'Cold Fever',
            'Remarks': 'Avoid Ice Creams',
            'Medicine': 'Paracetamol 0-0-1 (Before Sleep), AntiViral 1-0-1(after breakfast and lunch)',
        },
        {
            'Consultation_ID': 4,
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Date': (new Date()).toDateString(),
            'Height': '175 cm',
            'Width': '32 inch',
            'Temprature': '98.6 F',
            'Pressure': '110 mmHg',
            'Diagnosis': 'Cold Fever',
            'Remarks': 'Avoid Ice Creams',
            'Medicine': 'Paracetamol 0-0-1 (Before Sleep), AntiViral 1-0-1(after breakfast and lunch)',
        },
        {
            'Consultation_ID': 1,
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Date': (new Date()).toDateString(),
            'Height': '175 cm',
            'Width': '32 inch',
            'Temprature': '98.6 F',
            'Pressure': '110 mmHg',
            'Diagnosis': 'Cold Fever',
            'Remarks': 'Avoid Ice Creams',
            'Medicine': 'Paracetamol 0-0-1 (Before Sleep), AntiViral 1-0-1(after breakfast and lunch)',
        },
        {
            'Consultation_ID': 2,
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Date': (new Date()).toDateString(),
            'Height': '175 cm',
            'Width': '32 inch',
            'Temprature': '98.6 F',
            'Pressure': '110 mmHg',
            'Diagnosis': 'Cold Fever',
            'Remarks': 'Avoid Ice Creams',
            'Medicine': 'Paracetamol 0-0-1 (Before Sleep), AntiViral 1-0-1(after breakfast and lunch)',
        },
        {
            'Consultation_ID': 3,
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Date': (new Date()).toDateString(),
            'Height': '175 cm',
            'Width': '32 inch',
            'Temprature': '98.6 F',
            'Pressure': '110 mmHg',
            'Diagnosis': 'Cold Fever',
            'Remarks': 'Avoid Ice Creams',
            'Medicine': 'Paracetamol 0-0-1 (Before Sleep), AntiViral 1-0-1(after breakfast and lunch)',
        },
        {
            'Consultation_ID': 4,
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Date': (new Date()).toDateString(),
            'Height': '175 cm',
            'Width': '32 inch',
            'Temprature': '98.6 F',
            'Pressure': '110 mmHg',
            'Diagnosis': 'Cold Fever',
            'Remarks': 'Avoid Ice Creams',
            'Medicine': 'Paracetamol 0-0-1 (Before Sleep), AntiViral 1-0-1(after breakfast and lunch)',
        },
        {
            'Consultation_ID': 1,
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Date': (new Date()).toDateString(),
            'Height': '175 cm',
            'Width': '32 inch',
            'Temprature': '98.6 F',
            'Pressure': '110 mmHg',
            'Diagnosis': 'Cold Fever',
            'Remarks': 'Avoid Ice Creams',
            'Medicine': 'Paracetamol 0-0-1 (Before Sleep), AntiViral 1-0-1(after breakfast and lunch)',
        },
        {
            'Consultation_ID': 2,
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Date': (new Date()).toDateString(),
            'Height': '175 cm',
            'Width': '32 inch',
            'Temprature': '98.6 F',
            'Pressure': '110 mmHg',
            'Diagnosis': 'Cold Fever',
            'Remarks': 'Avoid Ice Creams',
            'Medicine': 'Paracetamol 0-0-1 (Before Sleep), AntiViral 1-0-1(after breakfast and lunch)',
        },
        {
            'Consultation_ID': 3,
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Date': (new Date()).toDateString(),
            'Height': '175 cm',
            'Width': '32 inch',
            'Temprature': '98.6 F',
            'Pressure': '110 mmHg',
            'Diagnosis': 'Cold Fever',
            'Remarks': 'Avoid Ice Creams',
            'Medicine': 'Paracetamol 0-0-1 (Before Sleep), AntiViral 1-0-1(after breakfast and lunch)',
        },
        {
            'Consultation_ID': 4,
            'Aadhar_Number': '1562-4596-5620-2530',
            'Doctor_License_No': '0000245 KTK',
            'Date': (new Date()).toDateString(),
            'Height': '175 cm',
            'Width': '32 inch',
            'Temprature': '98.6 F',
            'Pressure': '110 mmHg',
            'Diagnosis': 'Cold Fever',
            'Remarks': 'Avoid Ice Creams',
            'Medicine': 'Paracetamol 0-0-1 (Before Sleep), AntiViral 1-0-1(after breakfast and lunch)',
        }
    ];
    const rows = [];
    medicalRecords.forEach((medicalRecord) => {
        rows.push({
            ...medicalRecord,
            'id': medicalRecord.Consultation_ID,
        });
    });

    const showModal = (row) => {
        delete row.id;
        setSelectedRow(row);
        setOpen(true);
        console.log(row);
    }
    const columns = [
        { field: 'Consultation_ID', flex: 1, headerName: 'Consultation ID' },
        { field: 'Aadhar_Number', flex: 1, headerName: 'Aadhar Number' },
        { field: 'Doctor_License_No', flex: 1, headerName: 'Doctor License Number' },
        { field: 'Date', flex: 1, headerName: 'Date' },
        { field: 'Height', flex: 1, headerName: 'Height' },
        { field: 'Width', flex: 1, headerName: 'Width' },
        { field: 'Temprature', flex: 1, headerName: 'Temprature' },
        { field: 'Pressure', flex: 1, headerName: 'Pressure' },
        { field: 'Diagnosis', flex: 1, headerName: 'Diagnosis' },
        { field: 'Remarks', flex: 1, headerName: 'Remarks' },
        { field: 'Medicine', flex: 1, headerName: 'Medicine' },
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
                title={"Patient's Medical Record"}
                setSelectedRow = {setSelectedRow}
                selectedRow = {selectedRow}
                handleClose={handleClose}
            >
            </DataGridHelper>
        </>
    );
}