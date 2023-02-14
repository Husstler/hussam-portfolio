import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const goToWeb = () => {
    navigate("/web");
  }
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Grid container>
            <Grid item md={3}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item md={3}>
              <Button color="inherit">Blog</Button>
            </Grid>
            <Grid item md={3}>
              <Button color="inherit" onClick={goToWeb}>Web Usability</Button>
            </Grid>
            <Grid item md={3}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Home
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;