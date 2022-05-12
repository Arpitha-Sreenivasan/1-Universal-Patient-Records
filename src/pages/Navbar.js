import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { Avatar } from "@mui/material";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

const navLinks = [
  {
    page: "Login",
    route: "/login",
    isProtected: false,
  },
  {
    page: "Register Patient",
    route: "/register-patient",
    isProtected: false,
  },
  {
    page: "Register Doctor",
    route: "/register-doctor",
    isProtected: false,
  },
  {
    page: "Add Medical Records",
    route: "/add-consultation",
    isProtected: true,
  },
  {
    page: "Upload Test Reports",
    route: "/add-test",
    isProtected: true,
  },
  {
    page: "Doctors List",
    route: "/doctors",
    isProtected: true,
  },
  {
    page: "Medical Records",
    route: "/records",
    isProtected: true,
  },
  {
    page: "Test Reports",
    route: "/tests",
    isProtected: true,
  },
  {
    page: "Patient List",
    route: "/patients",
    isProtected: true,
  },
];

const settings = [
  {
    name: "Profile",
    link: `${process.env.PUBLIC_URL}/doctor/profile`,
  },
  {
    name: "Logout",
    link: `${process.env.PUBLIC_URL}/logout`,
  },
];

export default function Navbar(props) {
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
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" elevation={0} style={{ background: "#fcfcfc" }}>
      <Toolbar>
        <Link to="/">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img
              src={process.env.PUBLIC_URL + "/Logo.svg"}
              alt="logo-alt"
              style={{ color: "white" }}
              width="128px"
              height="48px"
            />
          </Typography>
        </Link>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ background: "transparent" }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {navLinks
            .filter((nav) => {
              return nav.isProtected == props.logIn
            })
            .map((nav) => {
              return (
                <MenuItem key={nav.route} onClick={handleCloseNavMenu}>
                  <Link to={nav.route}>
                    <Typography color="black" textAlign="center">
                      {nav.page}
                    </Typography>
                  </Link>
                </MenuItem>
              );
            })}
            {/* {pages.map((page,pos) => (
                            <MenuItem key={pos+100} onClick={handleCloseNavMenu}>
                                <Link to={`./${page.toLowerCase()}`}>
                                <Typography color="black" textAlign="center">{page}</Typography>
                                </Link>
                            </MenuItem>
                        ))} */}
          </Menu>
        </Box>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
        >
          <Link to="/">
            <img src="logo.svg" alt="logo-alt" width="128px" height="48px" />
          </Link>
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex", justifyContent: "end" },
          }}
        >
          {navLinks
          .filter((nav) => {
            return nav.isProtected == props.logIn
          })
          .map((nav) => (
            <Link to={nav.route}>
              <Button
                key={nav.route + "$"}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 1,
                  color: "black",
                  display: "block",
                  ":hover": {
                    bgcolor: "#d6ebf8",
                    color: "black",
                  },
                }}
              >
                {nav.page}
              </Button>
            </Link>
          ))}
          {/* {pages.map((page, pos) => (
                        <Link to={`./${page.toLowerCase()}`}>
                        <Button
                            key={pos}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, mx: 1, color: 'black', display: 'block', ':hover': {
                                bgcolor: '#d6ebf8',
                                color: 'black',
                              }, }}
                        >
                            {page}
                        </Button>
                        </Link>
                    ))} */}
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                alt="Adam John"
                src="https://avatars.dicebear.com/api/initials/Adam%20John.svg"
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <Link style={{ textDecoration: "none" }} to={setting.link}>
                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                  <Typography
                    color="black"
                    sx={{ textDecoration: "none" }}
                    textAlign="center"
                  >
                    {setting.name}
                  </Typography>
                </MenuItem>
              </Link>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
