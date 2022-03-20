import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Notifications = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ mt: 5 }}>
      <Box
        sx={{
          mx: "auto",
          width: md ? 1 : "60%",
          px: 3,
          border: 1,
          borderColor: "divider",
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ p: 0 }}>
              <ListItemText
                primary={
                  <>
                    <Typography
                      component="p"
                      variant="subtitle2"
                      color={"black"}
                    >
                      Price Alert
                    </Typography>
                  </>
                }
                secondary={
                  <>
                    <Typography
                      component="p"
                      variant="body2"
                      color={"black"}
                      sx={{ my: 0.5 }}
                    >
                      📈 Ethereum (ETH) is up +5.76% to BDT239,562.13 in the
                      last 15 hours.
                    </Typography>
                    <Typography component="p" variant="caption">
                      Mar 16
                    </Typography>
                  </>
                }
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton sx={{ p: 0 }}>
              <ListItemText
                primary={
                  <>
                    <Typography
                      component="p"
                      variant="subtitle2"
                      color={"black"}
                    >
                      Price Alert
                    </Typography>
                  </>
                }
                secondary={
                  <>
                    <Typography
                      component="p"
                      variant="body2"
                      color={"black"}
                      sx={{ my: 0.5 }}
                    >
                      📉 Bitcoin (BTC) is down -4.85% to BDT3,390,824.04 in the
                      last 5 hours.
                    </Typography>
                    <Typography component="p" variant="caption">
                      Mar 16
                    </Typography>
                  </>
                }
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Notifications;
