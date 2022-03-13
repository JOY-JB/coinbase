import { Box } from "@mui/system";
import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Button,
  Grid,
  IconButton,
  LinearProgress,
  MobileStepper,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const SetupBar = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <Box
      sx={{
        border: 1,
        borderRadius: "10px",
        borderColor: "grey.400",
        mt: 3,
        px: 2,
        py: 1,
      }}
    >
      <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
        <Grid Item lg={8}>
          <IconButton sx={{ color: "primary.main" }}>
            <CheckCircleIcon style={{ fontSize: 30 }} />
          </IconButton>{" "}
          <Box sx={{ fontWeight: 600, display: "inline", mr: 3 }}>
            You're almost there, finish account setup
          </Box>
          <LinearProgress
            variant="determinate"
            value={(activeStep + 1) * 25}
            sx={{
              width: "10%",
              height: "25%",
              borderRadius: "20px",
              display: "inline-block",
              mr: 1,
            }}
          />
          <MobileStepper
            variant="text"
            steps={4}
            position="static"
            activeStep={activeStep}
            sx={{
              maxWidth: 200,
              flexGrow: 1,
              display: "inline-block",
            }}
          />
        </Grid>
        <Grid Item>
          <Button variant="text" endIcon={<ChevronRightIcon />}>
            Add a payment method
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SetupBar;
