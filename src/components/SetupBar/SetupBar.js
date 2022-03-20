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
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const SetupBar = () => {
  const [activeStep, setActiveStep] = useState(1);

  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));

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
      <Box>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid Item lg={8} sx={{ display: "flex", alignItems: "center" }}>
            <IconButton sx={{ color: "primary.main", display: "inline-block" }}>
              <CheckCircleIcon style={{ fontSize: 30 }} />
            </IconButton>{" "}
            <Box
              sx={{
                fontWeight: 600,
                display: "inline-block",
                mr: 3,
                fontSize: md ? 14 : 16,
              }}
            >
              You're almost there, finish account setup
            </Box>
            <LinearProgress
              variant="determinate"
              value={(activeStep + 1) * 25}
              sx={{
                width: "10%",
                height: "25%",
                borderRadius: "20px",
                display: md ? "none" : "inline-block",
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
                display: md ? "none" : "inline-block",
              }}
            />
          </Grid>
          <Grid
            Item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button variant="text" endIcon={<ChevronRightIcon />}>
              Add a payment method
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SetupBar;
