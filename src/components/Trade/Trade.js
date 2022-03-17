import { Box, Grid } from "@mui/material";
import React from "react";
import SetupBar from "./SetupBar";
import Table from "./Table/Table";
import SideTabs from "./SideTabs";
import NewOnCoinbase from "./NewOnCoinbase";
import RecentTransaction from "./RecentTransaction";

const Trade = () => {
  return (
    <Box>
      <SetupBar></SetupBar>
      <Grid container spacing={2} sx={{ my: 1 }}>
        <Grid item xs={8}>
          <Box
            sx={{
              border: 1,
              borderRadius: "5px",
              borderColor: "grey.400",
            }}
          >
            <Table></Table>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              border: 1,
              borderRadius: "5px",
              borderColor: "grey.400",
            }}
          >
            <SideTabs />
          </Box>
          <Box
            sx={{
              my: 2,
              border: 1,
              borderColor: "grey.400",
              borderRadius: "5px",
            }}
          >
            <NewOnCoinbase />
          </Box>
          <Box
            sx={{
              my: 2,
              border: 1,
              borderColor: "grey.400",
              borderRadius: "5px",
            }}
          >
            <RecentTransaction></RecentTransaction>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Trade;
