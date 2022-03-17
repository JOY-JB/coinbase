import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const RecentTransaction = () => {
  return (
    <Box>
      <Typography variant="h6" component="h6" sx={{ p: 2, fontWeight: "bold" }}>
        Recent transactions
      </Typography>
      <Divider />
      <Box>
        <Typography variant="content" component="p" sx={{ p: 2 }}>
          You don’t own any crypto. Send yourself some crypto to get started.
        </Typography>
      </Box>
    </Box>
  );
};

export default RecentTransaction;
