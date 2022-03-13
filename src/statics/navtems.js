import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PieChartIcon from "@mui/icons-material/PieChart";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PaidIcon from "@mui/icons-material/Paid";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Link } from "react-router-dom";

export const mainListItems = (
  <>
    <ListItemButton component={Link} to={"/"} sx={{ mx: 1, borderRadius: 2 }}>
      <ListItemIcon sx={{ color: "black" }}>
        <PieChartIcon />
      </ListItemIcon>
      <ListItemText primary="Asset" sx={{ color: "black" }} />
    </ListItemButton>

    <ListItemButton
      component={Link}
      to={"/trade"}
      sx={{ mx: 1, borderRadius: 2 }}
    >
      <ListItemIcon sx={{ color: "black" }}>
        <CurrencyExchangeIcon />
      </ListItemIcon>
      <ListItemText primary="Trade" sx={{ color: "black" }} />
    </ListItemButton>

    <ListItemButton
      component={Link}
      to={"/pay"}
      sx={{ mx: 1, borderRadius: 2 }}
    >
      <ListItemIcon sx={{ color: "black" }}>
        <PaidIcon />
      </ListItemIcon>
      <ListItemText primary="Pay" sx={{ color: "black" }} />
    </ListItemButton>

    <ListItemButton
      component={Link}
      to={"/for_you"}
      sx={{ mx: 1, borderRadius: 2 }}
    >
      <ListItemIcon sx={{ color: "black" }}>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="For you" sx={{ color: "black" }} />
    </ListItemButton>

    <ListItemButton
      component={Link}
      to={"/notification"}
      sx={{ mx: 1, borderRadius: 2 }}
    >
      <ListItemIcon sx={{ color: "black" }}>
        <NotificationsIcon />
      </ListItemIcon>
      <ListItemText primary="Notifications" sx={{ color: "black" }} />
    </ListItemButton>

    <ListItemButton
      component={Link}
      to={"/get_wallet"}
      sx={{ mx: 1, borderRadius: 2 }}
    >
      <ListItemIcon sx={{ color: "black" }}>
        <AccountBalanceWalletIcon />
      </ListItemIcon>
      <ListItemText primary="Get Wallet" sx={{ color: "black" }} />
    </ListItemButton>
  </>
);
