import {
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  Modal,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import { borderRadius, Box } from "@mui/system";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import React, { useEffect, useState } from "react";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import PayWithOption from "./PayWithOption";
import PayWithBtn from "./PayWithBtn";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import EditIcon from "@mui/icons-material/Edit";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "25%",
  bgcolor: "background.paper",
  border: 0,
  boxShadow: 24,
  height: "550px",

  input: {
    "&::placeholder": {
      fontSize: 15,
      fontWeight: 600,
      color: "#000000 !important",
    },
  },
};

const SendReceive = ({ modalopen, handleModalClose }) => {
  const [payOption, setPayOption] = useState(false);
  const [value, setValue] = useState("1");
  const [sellAmount, setSellAmount] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handlePayOption = () => {
    setPayOption(true);
  };
  const [amount, setAmount] = useState(false);

  useEffect(() => {
    if (sellAmount > 0) {
      setAmount(true);
    } else {
      setAmount(false);
    }
  }, [sellAmount]);

  return (
    <div>
      <Modal open={modalopen} onClose={handleModalClose}>
        <Box
          sx={{
            ...style,
            typography: "body1",
            borderRadius: 2,
            px: 1,
          }}
        >
          <TabContext value={value}>
            <Box>
              <Tabs
                value={value}
                variant="fullWidth"
                onChange={handleChange}
                sx={{ borderBottom: 1, borderColor: "divider" }}
                TabIndicatorProps={{
                  style: {
                    display: "none",
                  },
                }}
              >
                <Tab
                  label="Send"
                  sx={{ fontWeight: 600, fontSize: 17 }}
                  value="1"
                />
                <Divider orientation="vertical" flexItem />
                <Tab
                  label="Receive"
                  sx={{ fontWeight: 600, fontSize: 17 }}
                  value="2"
                />
              </Tabs>
            </Box>
            <TabPanel value="1">
              <Box>
                <Box sx={{ display: "flex" }}>
                  <Typography
                    variant="h4"
                    component="span"
                    sx={{
                      fontSize: 32,
                      fontWeight: 700,
                      mt: 1,
                      color: amount ? "primary.main" : "grey.700",
                    }}
                  >
                    BDT
                  </Typography>
                  <InputBase
                    value={sellAmount || 0}
                    onChange={(e) => setSellAmount(e.target.value)}
                    variant="standard"
                    type="number"
                    onInput={(e) => {
                      e.target.value = Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, 12);
                    }}
                    inputProps={{
                      style: {
                        fontSize: "62px",
                        fontWeight: 500,
                      },
                    }}
                    sx={{ color: amount ? "primary.main" : "grey.700" }}
                  />
                  <Box sx={{ my: "auto" }}>
                    <Box
                      sx={{
                        display: "flex",
                        border: 1,
                        borderColor: "grey.400",
                        borderRadius: 50,
                      }}
                    >
                      <SwapHorizIcon
                        style={{
                          fontWeight: "bold",
                          fontSize: 28,
                          margin: 3,
                          transform: "rotate(90deg)",
                        }}
                      />
                    </Box>

                    <Typography variant="p" component="span">
                      BDT
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  variant="body2"
                  component="p"
                  sx={{ textAlign: "center" }}
                >
                  You don't have any Bitcoin to send. Try buying some to get
                  started.
                </Typography>

                <Box
                  sx={{
                    mt: 4,
                    border: 1,
                    borderColor: "grey.400",
                    borderRadius: 1,
                  }}
                >
                  <PayWithBtn handlePayOption={handlePayOption} />

                  <Box>
                    <Grid container sx={{ width: 1, p: 2, color: "grey.800" }}>
                      <Grid item xs={3}>
                        <Typography variant="p" component="p">
                          To
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <TextField
                          sx={{
                            width: 1,
                          }}
                          placeholder="Mobile, email, or address"
                          InputProps={{
                            disableUnderline: true,
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountBalanceWalletIcon />
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                        />
                      </Grid>
                    </Grid>
                    <Divider />
                  </Box>

                  <Box>
                    <Grid container sx={{ width: 1, p: 2, color: "grey.800" }}>
                      <Grid item xs={3}>
                        <Typography variant="p" component="p">
                          Note
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <TextField
                          sx={{
                            width: 1,
                          }}
                          placeholder="Optional Message"
                          InputProps={{
                            disableUnderline: true,
                            startAdornment: (
                              <InputAdornment position="start">
                                <EditIcon />
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                        />
                      </Grid>
                    </Grid>
                    <Divider />
                  </Box>
                </Box>

                <Button
                  variant="contained"
                  sx={{ mt: 1, width: 1, borderRadius: 2, p: 2 }}
                >
                  Send
                </Button>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 1,
                }}
              >
                <Typography variant="caption" component="span">
                  {" "}
                  BTC Balance{" "}
                </Typography>
                <Typography variant="caption" component="span">
                  {" "}
                  0 BTC ≈ BDT 0.00{" "}
                </Typography>
              </Box>
            </TabPanel>

            <TabPanel value="2">
              <Box>
                <Box sx={{ display: "flex" }}>
                  <Typography
                    variant="h4"
                    component="span"
                    sx={{
                      fontSize: 32,
                      fontWeight: 700,
                      mt: 1,
                      color: amount ? "primary.main" : "grey.700",
                    }}
                  >
                    BDT
                  </Typography>
                  <InputBase
                    value={sellAmount || 0}
                    onChange={(e) => setSellAmount(e.target.value)}
                    variant="standard"
                    type="number"
                    onInput={(e) => {
                      e.target.value = Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, 12);
                    }}
                    inputProps={{
                      style: {
                        fontSize: "62px",
                        fontWeight: 500,
                      },
                    }}
                    sx={{ color: amount ? "primary.main" : "grey.700" }}
                  />
                  <Box sx={{ my: "auto" }}>
                    <Box
                      sx={{
                        display: "flex",
                        border: 1,
                        borderColor: "grey.400",
                        borderRadius: 50,
                      }}
                    >
                      <SwapHorizIcon
                        style={{
                          fontWeight: "bold",
                          fontSize: 28,
                          margin: 3,
                          transform: "rotate(90deg)",
                        }}
                      />
                    </Box>

                    <Typography variant="p" component="span">
                      BDT
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  variant="body2"
                  component="p"
                  sx={{ textAlign: "center" }}
                >
                  You don't have any Bitcoin to send. Try buying some to get
                  started.
                </Typography>

                <Box
                  sx={{
                    mt: 4,
                    border: 1,
                    borderColor: "grey.400",
                    borderRadius: 1,
                  }}
                >
                  <PayWithBtn handlePayOption={handlePayOption} />

                  <Box>
                    <Grid container sx={{ width: 1, p: 2, color: "grey.800" }}>
                      <Grid item xs={3}>
                        <Typography variant="p" component="p">
                          To
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <TextField
                          sx={{
                            width: 1,
                          }}
                          placeholder="Mobile, email, or address"
                          InputProps={{
                            disableUnderline: true,
                            startAdornment: (
                              <InputAdornment position="start">
                                <AccountBalanceWalletIcon />
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                        />
                      </Grid>
                    </Grid>
                    <Divider />
                  </Box>

                  <Box>
                    <Grid container sx={{ width: 1, p: 2, color: "grey.800" }}>
                      <Grid item xs={3}>
                        <Typography variant="p" component="p">
                          Note
                        </Typography>
                      </Grid>
                      <Grid item xs={9}>
                        <TextField
                          sx={{
                            width: 1,
                          }}
                          placeholder="Optional Message"
                          InputProps={{
                            disableUnderline: true,
                            startAdornment: (
                              <InputAdornment position="start">
                                <EditIcon />
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                        />
                      </Grid>
                    </Grid>
                    <Divider />
                  </Box>
                </Box>

                <Button
                  variant="contained"
                  sx={{ mt: 1, width: 1, borderRadius: 2, p: 2 }}
                >
                  Receive
                </Button>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: 1,
                }}
              >
                <Typography variant="caption" component="span">
                  {" "}
                  BTC Balance{" "}
                </Typography>
                <Typography variant="caption" component="span">
                  {" "}
                  0 BTC ≈ BDT 0.00{" "}
                </Typography>
              </Box>
            </TabPanel>
          </TabContext>
        </Box>
      </Modal>
      <PayWithOption payOption={payOption} setPayOption={setPayOption} />
    </div>
  );
};

export default SendReceive;
