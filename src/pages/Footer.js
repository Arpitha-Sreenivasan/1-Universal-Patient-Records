import { Grid } from "@mui/material";
import React from "react";
import { Link } from "@mui/material";
import { Typography } from "@mui/material";

export default function Footer() {
    return(
        <Grid sx={{backgroundColor: 'black', color: 'white'}} container spacing={2} justifyContent="center" alignItems="center">
            <Grid item sx={{mt:'2px'}} xs={12}>
                <Typography textAlign="center">
                    This website is made in order to resolve the problem of recording the medical data of patients.
                </Typography>
            </Grid>
            <Grid item xs={12} lg={6} flexDirection="column" justifyContent="center" textAlign="center">
                <Link target="blank" href="./about" underline="hover" sx={{color: 'white', textDecoration:'none'}}>About Us</Link>
                <br/>
                <Link target="blank" href="./thanks" underline="hover" sx={{color: 'white', textDecoration:'none'}}>Thanks To</Link>
                <br/>
                <Link target="blank" href="https://github.com/Arpitha-Sreenivasan/IT632_1_UniversalPatientRecords" underline="hover" sx={{color: 'white', textDecoration:'none'}}>GitHub</Link>
            </Grid>
            <Grid item xs={12} lg={6} flexDirection="column" justifyContent="center" textAlign="center">
                <Link target="blank" href="./login" underline="hover" sx={{color: 'white', textDecoration:'none'}}>Login</Link>
                <br/>
                <Link target="blank" href="./register" underline="hover" sx={{color: 'white', textDecoration:'none'}}>Register</Link>
                <br/>
                <Link target="blank" href="./policy" underline="hover" sx={{color: 'white', textDecoration:'none'}}>Privacy Policy</Link>
            </Grid>
            <Grid item sx={{mb:'2px'}} xs={12}>
                <Typography fontFamily="Spectral" variant="h6" component="h6" textAlign="center">
                    UPR | Univarsal Patient Record - 2022
                </Typography>
            </Grid>
        </Grid>
    );
}