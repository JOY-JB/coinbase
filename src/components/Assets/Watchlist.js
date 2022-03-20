import { Button, Checkbox, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import MaterialTable from "material-table";
import tableIcons from "../Trade/Table/MaterialTableIcons";
import MenuIcon from "@mui/icons-material/Menu";

const columns = [
  { title: "Name", field: "name", flex: 1 },
  { title: "Price", field: "price", searchable: false, flex: 1 },
  {
    title: "Change",
    field: "change",
    searchable: false,
    searchable: false,
    flex: 1,
  },
  {
    title: "Market cap",
    field: "marketcap",
    searchable: false,
    flex: 1,
  },
  {
    title: "Watch",
    field: "watch",
    align: "center",
    searchable: false,
    render: () => (
      <>
        <Grid container alignItems="center" spacing={2} sx={{ ml: "auto" }}>
          <Grid item xs={8}>
            <StarRateIcon fontSize="large" sx={{ color: "primary.main" }} />
          </Grid>
          <Grid item xs={4} sx={{}}>
            <MenuIcon />
          </Grid>
        </Grid>
      </>
    ),
    flex: 1,
  },
];
const data = [
  {
    name: "Mohammad",
    price: "BDT 2131.20",
    change: "+32%",
    marketcap: "BDT 23.13T",
  },
  {
    name: "Mohammad",
    price: "BDT 3121.20",
    change: "+32%",
    marketcap: "BDT 23.13T",
  },
];

const Watchlist = () => {
  return (
    <div>
      <MaterialTable
        style={{ padding: "5px 10px" }}
        columns={columns}
        data={data}
        icons={tableIcons}
        options={{
          paginationType: "stepped",
          toolbar: false,
          headerStyle: {
            fontSize: 16,
          },
        }}
      ></MaterialTable>
    </div>
  );
};

export default Watchlist;
