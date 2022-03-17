import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { Divider, Tabs } from "@mui/material";

const SideTabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // sx={{ borderBottom: 1, borderColor: "divider" }}

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box>
          <Tabs
            value={value}
            variant="fullWidth"
            onChange={handleChange}
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <Tab
              label="Buy"
              sx={{ fontWeight: "bold", color: "black" }}
              value="1"
            />
            <Divider orientation="vertical" flexItem />
            <Tab label="Sell" sx={{ fontWeight: "bold" }} value="2" />
          </Tabs>
        </Box>
        <TabPanel value="1">Buy</TabPanel>
        <TabPanel value="2">Sell</TabPanel>
      </TabContext>
    </Box>
  );
};

export default SideTabs;
