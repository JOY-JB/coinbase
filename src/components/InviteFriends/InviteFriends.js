import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { makeStyles } from "@material-ui/core";
import { fontSize } from "@mui/system";

const useStyle = makeStyles({
  sentInvites: {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderWidth: 1,
        borderColor: "grey",
      },
      "&:hover fieldset": {
        borderWidth: 1,
        borderColor: "grey",
      },
    },
  },
});

const InviteFriends = () => {
  const classes = useStyle();

  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Grid container direction="row-reverse">
        <Grid item md={12} lg={5} sx={{ p: 2, my: "auto" }}>
          <img src={"./images/invitefriends.png"} style={{ width: "100%" }} />
        </Grid>
        <Grid item md={12} lg={7} sx={{ p: md ? 2 : 10 }}>
          <Typography
            variant={md ? "h5" : "h4"}
            component={md ? "h5" : "h4"}
            sx={{ fontWeight: 600 }}
          >
            Invite a friend to Coinbase and you'll both get BDT 862.43
          </Typography>
          <Typography variant="body2" component="p" sx={{ py: 5 }}>
            Know someone curious about crypto? You’ll both receive BDT 862.43 in
            Bitcoin when they buy or sell BDT 8,624.26 or more on Coinbase!{" "}
            <Link sx={{ color: "black", textDecoration: "none" }}>
              Learn more.
            </Link>
          </Typography>

          <Grid container justifyContent="center">
            <Grid item md={12} lg={9}>
              <TextField
                sx={{ width: 1 }}
                className={classes.sentInvites}
                placeholder="Enter email addresses"
              />
            </Grid>
            <Grid item md={12} lg={3}>
              <Button
                variant="contained"
                color="success"
                sx={{ width: 1, height: 1 }}
              >
                Send invites
              </Button>
            </Grid>
          </Grid>

          <Box
            sx={{
              mt: 5,
              border: 1,
              borderColor: "divider",
              borderRadius: 1,
              p: 2,
            }}
          >
            <Grid container>
              <Grid item xs={12} sm={7} md={7} lg={7}>
                <Typography
                  sx={{
                    fontSize: 16,
                  }}
                >
                  coinbase.com/join/1run9h
                </Typography>
              </Grid>
              <Grid item xs={6} sm={2} md={2} lg={2} textAlign="center">
                <Button
                  variant="text"
                  sx={{
                    p: 0,
                    fontSize: 16,
                    mx: "auto",
                    color: "black",
                    ":hover": { color: "primary.main", background: "white" },
                  }}
                >
                  copy link
                </Button>
              </Grid>
              <Grid item xs={6} sm={3} md={3} lg={3} textAlign="center">
                <Button
                  variant="text"
                  sx={{
                    p: 0,
                    fontSize: 16,
                    mx: "auto",
                    color: "black",
                    ":hover": { color: "primary.main", background: "white" },
                  }}
                  startIcon={<FileUploadIcon />}
                >
                  Share
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InviteFriends;
