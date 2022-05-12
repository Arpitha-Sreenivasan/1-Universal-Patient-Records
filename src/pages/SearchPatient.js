import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate, useHistory } from "react-router-dom";

const SearchPatient = () => {
  const [searchpat, setsearchpat] = useState("");
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `newPath/${searchpat}`;
    navigate(path);
  };
  return (
    <Card>
      <CardContent>
        <Grid
          container
          justifyContent={"center"}
          height="100%"
          border={"1px solid black"}
          textAlign={"center"}
          margin={"auto"}
        >
          <Grid
            item
            xl={12}
            xs={12}
            textAlign={"center"}
            justify="center"
            border={"2px solid blue"}
            paddingBottom={"3em"}
          >
            <Typography align="center" fontWeight={"Bold"}>
              Search Patient By Aadhar Card Number
            </Typography>

            <form onSubmit={routeChange}>
              <TextField
                fullWidth
                label="Search Patient"
                placeholder="Enter number of the aadharcard"
                margin="dense"
                style={{ marginBottom: "2em", marginTop: "2em" }}
                id="searchpat"
                name="searchpat"
                value={searchpat}
                onChange={(e) => setsearchpat(e.target.value)}
                required
              />
              <Grid margin={"auto"} marginTop="2em" marginBottom={"1em"}>
                <Button type="submit" variant="contained" disableElevation>
                  Search
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default SearchPatient;
