import { Box, Grid } from "@mui/material";
import React from "react";
import SetupBar from "./SetupBar";
import Table from "./Table/Table";

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
            2
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Trade;
