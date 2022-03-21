import React from "react";
import { Box } from "@mui/material";
import Navbar from "../pages/Navbar";

export default function Header() {
  return (
    <Box sx={{ display: "flex", marginBottom: "20px" }}>
      <Navbar />
    </Box>
  );
}
