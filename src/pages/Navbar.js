import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from "@mui/material";
import { Avatar } from "@mui/material";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

const pages = ['Login', 'Register'];
const settings = ['Profile', 'Logout'];

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (ev) => {
        setAnchorElNav(ev.currentTarget);
    };

    const handleOpenUserMenu = (ev) => {
        setAnchorElUser(ev.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    }

    return (
        <AppBar position="sticky" elevation={0} style={{background: '#fcfcfc'}}>
            <Toolbar>
                <Link to="/">
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img src="logo.svg" alt="logo-alt" style={{ 'color': 'white' }} width="128px" height="48px" />
                    </Typography>
                </Link>
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        sx = {{ background: 'black'}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Link to={`./${page.toLowerCase()}`}>
                                <Typography color="black" textAlign="center">{page}</Typography>
                                </Link>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                >
                    <Link to="/">
                    <img src="logo.svg" alt="logo-alt" width="128px" height="48px" />
                    </Link>
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent:'end' } }}>
                    {pages.map((page) => (
                        <Link to={`./${page.toLowerCase()}`}>
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, mx: 1, color: 'black', display: 'block', ':hover': {
                                bgcolor: '#d6ebf8',
                                color: 'black',
                              }, }}
                        >
                            {page}
                        </Button>
                        </Link>
                    ))}
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Adam John" src="https://avatars.dicebear.com/api/initials/Adam%20John.svg" />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}