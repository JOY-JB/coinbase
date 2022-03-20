import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import KeyboardArrowRightSharpIcon from "@mui/icons-material/KeyboardArrowRightSharp";
import CurrencyBitcoinSharpIcon from "@mui/icons-material/CurrencyBitcoinSharp";

const PayWithBtn = ({ handlePayOption }) => {
  return (
    <Box>
      <Button
        onClick={handlePayOption}
        sx={{ width: 1, p: 2, color: "grey.800" }}
        variant="text"
      >
        <Grid
          container
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={3}>
            <Typography variant="body2" component="h1" align="left">
              Pay with
            </Typography>
          </Grid>
          <Grid item xs={8} sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                backgroundColor: "#fbc02d",
                borderRadius: 50,
                mr: 1,
              }}
            >
              <CurrencyBitcoinSharpIcon
                style={{
                  fontSize: 18,
                  color: "white",
                  margin: 2,
                  transform: "rotate(15deg)",
                }}
              />
            </Box>

            <Typography variant="body1" component="h1" align="left">
              Bitcoin
            </Typography>
          </Grid>

          <Grid item xs={1}>
            <KeyboardArrowRightSharpIcon sx={{ color: "black", mt: 1 }} />
          </Grid>
        </Grid>
      </Button>
      <Divider />
    </Box>
  );
};

export default PayWithBtn;
