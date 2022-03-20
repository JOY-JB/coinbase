import React, { useEffect, useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { mainListItems } from "../statics/navtems";
import { Routes, Route, Link } from "react-router-dom";
import Trade from "../components/Trade/Trade";
import { red } from "@mui/material/colors";
import Assets from "../components/Assets/Assets";
import { Button } from "@mui/material";
import SendReceive from "../components/Modal/SendReceive/SendReceive";
import Notifications from "../components/Notifications/Notifications";
import InviteFriends from "../components/InviteFriends/InviteFriends";
import Currency from "../components/Pages/Currency";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

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
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [modalopen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} color={"topbar"}>
          <Toolbar
            sx={{
              pr: "24px",
            }}
          >
            <IconButton
              edge="start"
              aria-label="open drawer"
              onClick={toggleDrawer}
              color="inherit"
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ ml: "auto" }}>
              <Button
                onClick={handleModalOpen}
                variant="outlined"
                size="large"
                sx={{
                  color: "black",
                  borderColor: "divider",
                  fontWeight: 600,
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

        <Drawer variant="permanent" open={open}>
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

            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />

          <List component="nav">{mainListItems}</List>
        </Drawer>

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
