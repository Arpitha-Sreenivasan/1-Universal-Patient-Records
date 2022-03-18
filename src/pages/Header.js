import React from 'react'
import { Box } from '@mui/material'
import Navbar from '../pages/Navbar'

export default function Header() {
    return (
        <Box sx={{display: 'flex'}}>
            <Navbar />
        </Box>
    );
}