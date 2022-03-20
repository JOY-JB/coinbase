import { Button, ButtonGroup, Grid, Typography } from "@mui/material";
import { Box, flexbox } from "@mui/system";
import React, { useState } from "react";
import SetupBar from "../SetupBar/SetupBar";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import BuySell from "../SideTabs/BuySell";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    time: "2:30 AM",
    uv: 4000,
    pv: 2400,
  },
  {
    time: "3:30 AM",
    uv: 3000,
    pv: 1398,
  },
  {
    time: "4:30 AM",
    uv: 2000,
    pv: 9800,
  },
  {
    time: "5:30 AM",
    uv: 2780,
    pv: 3908,
  },
  {
    time: "6:30 AM",
    uv: 1890,
    pv: 4800,
  },
  {
    time: "7:30 AM",
    uv: 2390,
    pv: 3800,
  },
  {
    time: "8:30 AM",
    uv: 3490,
    pv: 4300,
  },
];

const Currency = () => {
  const [activeButton, setActiveButton] = useState("1H");
  console.log(activeButton);
  return (
    <Box>
      <SetupBar></SetupBar>

      <Box sx={{ mt: 6 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img
              src="./images/Currency.png"
              alt=""
              height={"50px"}
              style={{ margin: "1rem" }}
            />
            <Box>
              <Typography variant="p" component="h1">
                Ethereum{" "}
                <Typography
                  variant="h4"
                  component="span"
                  sx={{ fontSize: 26, fontWeight: 700, color: "grey.700" }}
                >
                  ETH
                </Typography>{" "}
              </Typography>
              <Typography variant="subtitle2" component="p">
                {" "}
                Not tradable in your region{" "}
              </Typography>
            </Box>
          </Box>
          <Button
            variant="outlined"
            startIcon={<StarBorderOutlinedIcon />}
            sx={{ my: 2, color: "black" }}
          >
            Add to Watchlist
          </Button>{" "}
        </Box>

        <Grid container sx={{ mt: 4 }}>
          <Grid item xs={8}>
            <Box
              sx={{ border: 1, borderColor: "divider", borderRadius: 1, mx: 2 }}
            >
              <Box
                sx={{
                  m: 3,
                  mb: 5,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Grid container>
                  <Grid item>
                    <Typography variant="h4" component="span">
                      BDT
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h3"
                      component="span"
                      sx={{ fontWeight: 500 }}
                    >
                      252,834
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h4" component="span">
                      .84
                    </Typography>
                  </Grid>
                  <Grid item sx={{ ml: 1 }}>
                    <Typography variant="body1" component="span" color="red">
                      -0.44 %
                    </Typography>
                  </Grid>
                </Grid>

                <Box sx={{ display: "flex" }}>
                  <Button
                    value="1H"
                    onClick={(e) => setActiveButton(e.target.value)}
                    variant="text"
                    size="small"
                    sx={{
                      minHeight: 0,
                      minWidth: 0,
                      padding: 1,
                      color: `${
                        activeButton === "1H" ? "primary.main" : "black"
                      }}`,
                    }}
                  >
                    1H
                  </Button>
                  <Button
                    value="1D"
                    onClick={(e) => setActiveButton(e.target.value)}
                    variant="text"
                    size="small"
                    sx={{
                      minHeight: 0,
                      minWidth: 0,
                      padding: 1,
                      color: `${
                        activeButton === "1D" ? "primary.main" : "black"
                      }}`,
                    }}
                  >
                    1D
                  </Button>
                  <Button
                    value="1W"
                    onClick={(e) => setActiveButton(e.target.value)}
                    variant="text"
                    size="small"
                    sx={{
                      minHeight: 0,
                      minWidth: 0,
                      padding: 1,
                      color: `${
                        activeButton === "1W" ? "primary.main" : "black"
                      }}`,
                    }}
                  >
                    1W
                  </Button>
                  <Button
                    value="1M"
                    onClick={(e) => setActiveButton(e.target.value)}
                    variant="text"
                    size="small"
                    sx={{
                      minHeight: 0,
                      minWidth: 0,
                      padding: 1,
                      color: `${
                        activeButton === "1M" ? "primary.main" : "black"
                      }}`,
                    }}
                  >
                    1M
                  </Button>
                  <Button
                    value="1Y"
                    onClick={(e) => setActiveButton(e.target.value)}
                    variant="text"
                    size="small"
                    sx={{
                      minHeight: 0,
                      minWidth: 0,
                      padding: 1,
                      color: `${
                        activeButton === "1Y" ? "primary.main" : "black"
                      }}`,
                    }}
                  >
                    1Y
                  </Button>
                  <Button
                    value="ALL"
                    onClick={(e) => setActiveButton(e.target.value)}
                    variant="text"
                    size="small"
                    sx={{
                      minHeight: 0,
                      minWidth: 0,
                      padding: 1,
                      color: `${
                        activeButton === "ALL" ? "primary.main" : "black"
                      }}`,
                    }}
                  >
                    ALL
                  </Button>
                </Box>
              </Box>
              <ResponsiveContainer width="100%" aspect={3}>
                <LineChart width={500} height={300} data={data}>
                  <XAxis dataKey="time" AM />
                  <Tooltip />
                  <Line
                    type="basic"
                    dataKey="pv"
                    stroke="#8884d8"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>

              <Box sx={{ m: 2, mt: 4 }}>
                <Typography variant="h6" component="h6">
                  Market Status
                </Typography>

                <Grid container sx={{ my: 2 }}>
                  <Grid item xs={3}>
                    <Typography variant="subtitle2" component="h6">
                      Market cap
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      BDT 30.6T
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="subtitle2" component="h6">
                      Volume (24 h)
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      BDT 1.0T
                    </Typography>
                    <Typography
                      variant="caption"
                      color="red"
                      display="block"
                      fontSize={14}
                    >
                      -21.2%
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="subtitle2" component="h6">
                      Circulation supply
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      120.0M ETH
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Typography variant="subtitle2" component="h6">
                      Typical hold time
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      79 days
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <BuySell></BuySell>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Currency;
