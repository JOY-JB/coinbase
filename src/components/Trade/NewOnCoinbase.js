import { Avatar, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, height } from "@mui/system";

const NewOnCoinbase = () => {
  return (
    <Box>
      <Typography variant="h6" component="h6" sx={{ p: 2, fontWeight: "bold" }}>
        New on Coinbase
      </Typography>
      <Divider />
      <Button sx={{ width: 1, p: 2 }} variant="text">
        <Grid
          container
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Avatar>H</Avatar>
              <Box sx={{ mx: 2, color: "black" }}>
                <Typography
                  variant="body2"
                  component="h1"
                  align="left"
                  sx={{ fontWeight: "bold" }}
                >
                  Status
                </Typography>
                <Typography variant="caption" component="p" sx={{ mt: "1px" }}>
                  Lorem ipsum dolor sit amet.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <ArrowForwardIosIcon sx={{ color: "black", mt: 1 }} />
          </Grid>
        </Grid>
      </Button>
    </Box>
  );
};

export default NewOnCoinbase;
