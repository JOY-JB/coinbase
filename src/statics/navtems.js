import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PieChartIcon from "@mui/icons-material/PieChart";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Link } from "react-router-dom";

const pathname = window.location.pathname;

export const mainListItems = (
  <>
    <ListItemButton
      selected={"/" === pathname}
      component={Link}
      to={"/"}
      sx={{ mx: 1, borderRadius: 2 }}
    >
      <ListItemIcon sx={{ color: "black" }}>
        <PieChartIcon />
      </ListItemIcon>
      <ListItemText primary="Asset" sx={{ color: "black" }} />
    </ListItemButton>

    <ListItemButton
      selected={"/trade" === pathname}
      component={Link}
      to={"/trade"}
      sx={{ mx: 1, my: 3, borderRadius: 2 }}
    >
      <ListItemIcon sx={{ color: "black" }}>
        <CurrencyExchangeIcon />
      </ListItemIcon>
      <ListItemText primary="Trade" sx={{ color: "black" }} />
    </ListItemButton>

    <ListItemButton
      selected={"/notification" === pathname}
      component={Link}
      to={"/notification"}
      sx={{ mx: 1, my: 3, borderRadius: 2 }}
    >
      <ListItemIcon sx={{ color: "black" }}>
        <NotificationsIcon />
      </ListItemIcon>
      <ListItemText primary="Notifications" sx={{ color: "black" }} />
    </ListItemButton>

    <ListItemButton
      selected={"/invite_friends" === pathname}
      component={Link}
      to={"/invite_friends"}
      sx={{ mx: 1, my: 3, borderRadius: 2 }}
    >
      <ListItemIcon sx={{ color: "black" }}>
        <PersonAddAltIcon />
      </ListItemIcon>
      <ListItemText primary="Invite Friends" sx={{ color: "black" }} />
    </ListItemButton>
  </>
);
