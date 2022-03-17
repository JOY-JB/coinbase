import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Watchlist from "./Watchlist";

const Assets = () => {
  return (
    <Grid container spacing={4} sx={{ my: 2 }}>
      <Grid item xs={8}>
        <Box
          sx={{
            p: 3,
            border: 1,
            borderColor: "divider",
            borderRadius: 1,
          }}
        >
          <Typography variant="h5" fontWeight={600} component="div">
            Total balance
          </Typography>
          <Typography variant="h5" fontWeight={600} component="div">
            BDT 0.00
          </Typography>

          <Box sx={{ textAlign: "center", mt: 5 }}>
            <AddCircleOutlineIcon style={{ fontSize: 45 }} />
            <Typography
              variant="p"
              gutterBottom
              component="div"
              sx={{ fontSize: 19, fontWeight: 600 }}
            >
              Get started with crypto
            </Typography>
            <Typography variant="p" gutterBottom component="div">
              Your crypto assets will appear here.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              sx={{
                fontWeight: 600,
                color: "black",
                borderColor: "divider",
                mt: 1,
                mb: 2,
              }}
            >
              Explore assets
            </Button>
          </Box>
        </Box>
        <Box sx={{ border: 1, borderColor: "divider", borderRadius: 1, mt: 2 }}>
          <Typography
            variant="h5"
            fontWeight={600}
            component="div"
            sx={{ m: 2 }}
          >
            Watchlist
          </Typography>
          <Divider />
          <Watchlist></Watchlist>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box sx={{ p: 3, border: 1, borderColor: "divider", borderRadius: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography
                variant="p"
                gutterBottom
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                Earn Bitcoin
              </Typography>
              <Typography
                variant="p"
                gutterBottom
                component="div"
                sx={{ my: 2 }}
              >
                Invite a friend and you could both get crypto
              </Typography>

              <Button
                variant="contained"
                sx={{ fontSize: 16, fontWeight: 600 }}
              >
                Learn more
              </Button>
              <Button
                variant="text"
                sx={{ ml: 2, fontSize: 16, fontWeight: 600 }}
              >
                Dismiss
              </Button>
            </Grid>
            <Grid item xs={4}>
              <CardGiftcardIcon style={{ fontSize: 100 }} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Assets;
