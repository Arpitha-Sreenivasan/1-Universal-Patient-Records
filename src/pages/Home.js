import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Box, CardContent, CardMedia } from '@mui/material';
import { Card } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <Grid container justifyContent={'center'} alignItems={'center'} style={{background: '#d6ebf8'}}>
                <Grid Item xs={12} lg={4} md={5}>
                    <Box display={'flex'} justifyContent='center' alignItems='center'>
                        <img src='Hero.svg' height="480px" width="360px" alt="hero-alg" />
                    </Box>
                </Grid>
                <Grid Item xs={0} md={1}>
                    <Box display={{sm: 'none', xs: 'none', md: 'block' }} width="1px" height="375px" border={'2px solid #263238'} borderRadius="5px" sx={{mx:3, my:1, background: '#263238'}}>
                    </Box>
                </Grid>
                <Grid Item xs={12} lg={5} md={6}>
                    <Box>
                        <Typography variant='h4' component='h4' sx={{ display: { sm: 'none' }}} textAlign={'center'}>
                            Access Medical Records Efficiently!
                        </Typography>
                        <Typography variant='h3' component='h3' sx={{ display: { lg: 'none', xs: 'none',sm: 'block' }}} textAlign={'center'}>
                            Access Medical Records Efficiently!
                        </Typography>
                        <Typography variant='h2' component='h2' sx={{ display: { md: 'none', xs: 'none',sm: 'none', lg: 'block' }}} textAlign={'center'}>
                            Access Medical Records Efficiently!
                        </Typography>
                        <Stack direction={'row'} justifyContent="center" alignItems={'center'}>
                            <Button variant='contained' color='myDark' sx={{m:1, color: 'white', ':hover': {
                                backgroundColor: '#0d1317'
                            }}} size='large'>
                                <Link to="./login" style={{textDecoration: 'none', color: 'inherit'}}>Login</Link>
                            </Button>
                            <Button variant='outlined'  color='myDark' sx={{m:1, borderColor: '#263238', color: '#263238', ':hover': {
                                backgroundColor: '#0d1317',
                                color: 'white'
                            }}} size='large'>
                                <Link to="./register" style={{textDecoration: 'none', color: 'inherit'}}>Register</Link>
                            </Button>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
            <Stack spacing={5} sx={{ mt:10, mb:10, mx:5 }} boxShadow={3} borderRadius={5} px={2} py={5} direction={{ lg: 'row', xs: 'column' }} justifyContent={'space-evenly'} alignItems={'center'}>
                <Card sx={{ width: 350, height: 375 }}>
                    <CardActionArea>
                        <CardMedia component="img" image="card1-img.svg" alt="card-img-alt" height="300" width="300">
                        </CardMedia>
                        <CardContent>
                            <Typography fontWeight={600} variant="h5" component="h5" textAlign="center">
                                Prescribe Patient
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: 350, height: 375 }}>
                    <CardActionArea>
                        <CardMedia component="img" image="card2-img.svg" alt="card-img-alt" height="300" width="300">
                        </CardMedia>
                        <CardContent>
                            <Typography fontWeight={600} variant="h5" component="h5" textAlign="center">
                                Upload Medical Record    
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{width: 350, height: 375}}>
                    <CardActionArea>
                        <CardMedia component="img" image="card3-img.svg" alt="card-img-alt" height="300" width="300">
                        </CardMedia>
                        <CardContent>
                            <Typography fontWeight={600} variant="h5" component="h5" textAlign="center">
                                Access Efficiently Later
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Stack>
        </>
    );
}