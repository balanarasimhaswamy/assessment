import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <Button color="inherit" component={Link} to="/users">
            Users
          </Button>
          <Button color="inherit" component={Link} to="/roles">
            Roles
          </Button>
          <Button color="inherit" component={Link} to="/permissions">
            Permissions
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: "20px" }}>{children}</Box>
    </>
  );
};

export default DashboardLayout;
