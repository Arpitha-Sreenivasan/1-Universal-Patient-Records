import React, { useEffect } from 'react';
import { Button, Link } from '@mui/material';
import ShowRecord from '@mui/icons-material/PreviewOutlined';
import DataGridHelper from '../DataGridHelper';
import { useParams } from 'react-router-dom';

export default function TestRecords() {
    const [selectedRow, setSelectedRow] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const params = useParams();
    const testRecords = [
        {
            'TestID': 1,
            'Test_Name': 'Blood Test',
            'Test_Date': (new Date()).toDateString(),
            'Test_Pdf': "../../documents/sp.pdf",
        },
        {
            'TestID': 2,
            'Test_Name': 'TB Test',
            'Test_Date': (new Date()).toDateString(),
            'Test_Pdf': "../../documents/sp.pdf",
        },
        {
            'TestID': 3,
            'Test_Name': 'Diabities Test',
            'Test_Date': (new Date()).toDateString(),
            'Test_Pdf': "../../documents/sp.pdf",
        },
        {
            'TestID': 4,
            'Test_Name': 'Pressure Test',
            'Test_Date': (new Date()).toDateString(),
            'Test_Pdf': "../../documents/sp.pdf",
        }
    ];
    const rows = [];
    testRecords.forEach((testRecord) => {
        rows.push({
            ...testRecord,
            'id': testRecord.TestID,
        });
    });
    useEffect(() => {
        const aadharNumber = params.aadharnumber;
        fetch(`http:127.0.0.1:8000/getConsultation/${aadharNumber}`,{
            'method': "GET",
            'Content-Type': "application/json"
        })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        });
    }, [params.aadharnumber, selectedRow]);

    const showModal = (row) => {
        delete row.id;
        row.pdf = <Link href={row.Test_Pdf} target="_blank" underline="none">Open</Link>
        delete row.Test_Pdf;
        setSelectedRow(row);
        setOpen(true);
    }
    const columns = [
        { field: 'TestID', flex: 1, headerName: 'Test Number' },
        { field: 'Test_Name', flex: 1, headerName: 'Test Name' },
        { field: 'Test_Date', flex: 1, headerName: 'Test_Date' },
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
                title = {"Patient's Test Report"}
                selectedRow = {selectedRow}
                setSelectedRow = {setSelectedRow}
                handleClose = {handleClose}
            >
            </DataGridHelper>
        </>
    );
}