import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { mainListItems } from "../statics/navtems";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Trade from "../components/Trade/Trade";
import { red } from "@mui/material/colors";
import Assets from "../components/Assets/Assets";
import { Button, Drawer } from "@mui/material";
import SendReceive from "../components/Modal/SendReceive/SendReceive";
import Notifications from "../components/Notifications/Notifications";
import InviteFriends from "../components/InviteFriends/InviteFriends";
import Currency from "../components/Pages/Currency";

const drawerWidth = 240;

const mdTheme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: "black",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          top: 0,
          backgroundColor: "primary.main",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: 12,
        },
      },
    },
  },

  palette: {
    topbar: {
      main: "#fefefefe",
      contrastText: "#004BEB",
    },
    primary: {
      main: "#004BEB",
    },
    demo: red,
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    button: {
      textTransform: "none",
    },
  },
});

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };
  const [modalopen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const drawer = (
    <div>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <Typography
          component="h1"
          variant="h6"
          color="primary"
          noWrap
          sx={{ m: 1, fontWeight: "bold", flexGrow: 1 }}
        >
          coinbase
        </Typography>

        <IconButton onClick={toggleDrawer} sx={{ display: { sm: "none" } }}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />

      <List>{mainListItems}</List>
    </div>
  );

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          color={"topbar"}
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              onClick={toggleDrawer}
              color="inherit"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ ml: "auto", display: "flex" }}>
              <Button
                onClick={handleModalOpen}
                variant="outlined"
                size="large"
                sx={{
                  color: "black",
                  borderColor: "divider",
                  fontWeight: 600,
                  mr: 2,
                }}
              >
                Send / Receive
              </Button>

              <IconButton color="inherit">
                <AccountCircleIcon fontSize="large" />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={toggleDrawer}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            open
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>

        {/* main content */}

        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Box sx={{ mx: 2, my: 2 }}>
            <Routes>
              <Route path="/" element={<Assets />} />
              <Route path="/trade" element={<Trade />} />
              <Route path="/notification" element={<Notifications />} />
              <Route path="/invite_friends" element={<InviteFriends />} />
              <Route path="/currency" element={<Currency />} />
            </Routes>
          </Box>
        </Box>
      </Box>
      <SendReceive modalopen={modalopen} handleModalClose={handleModalClose} />
    </ThemeProvider>
  );
};

export default Dashboard;
