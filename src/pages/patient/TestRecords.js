import React from 'react';
import { Button, Link } from '@mui/material';
import ShowRecord from '@mui/icons-material/PreviewOutlined';
import DataGridHelper from '../DataGridHelper';
import PDF from "../../documents/sp.pdf";

export default function TestRecords() {
    const [selectedRow, setSelectedRow] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const testRecords = [
        {
            'Test_ID': 1,
            'Test_Name': 'Blood Test',
            'Date': (new Date()).toDateString(),
        },
        {
            'Test_ID': 2,
            'Test_Name': 'TB Test',
            'Date': (new Date()).toDateString(),
        },
        {
            'Test_ID': 3,
            'Test_Name': 'Diabities Test',
            'Date': (new Date()).toDateString(),
        },
        {
            'Test_ID': 4,
            'Test_Name': 'Pressure Test',
            'Date': (new Date()).toDateString(),
        }
    ];
    const rows = [];
    testRecords.forEach((testRecord) => {
        rows.push({
            ...testRecord,
            'id': testRecord.Test_ID,
        });
    });

    const showModal = (row) => {
        delete row.id;
        row.pdf = <Link href={PDF} target="_blank" underline="none">Open</Link>
        setSelectedRow(row);
        setOpen(true);
        console.log(row);
    }
    const columns = [
        { field: 'Test_ID', flex: 1, headerName: 'Test Number' },
        { field: 'Test_Name', flex: 1, headerName: 'Test Name' },
        { field: 'Date', flex: 1, headerName: 'Date' },
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