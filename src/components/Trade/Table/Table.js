import {
  Button,
  Checkbox,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import MaterialTable from "material-table";
import React, { useState } from "react";
import tableIcons from "./MaterialTableIcons";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const columns = [
  { title: "Name", field: "name" },
  { title: "Price", field: "price", searchable: false },
  {
    title: "Change",
    field: "change",
    searchable: false,
    searchable: false,
  },
  {
    title: "Market cap",
    field: "marketcap",
    searchable: false,
  },
  {
    title: "Watch",
    field: "watch",
    align: "right",
    searchable: false,
    render: () => (
      <>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={6}>
            <Box sx={{ textAlign: "center" }}>
              <Button variant="contained">Buy </Button>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Checkbox
              sx={{ textAlign: "center", ml: 1 }}
              icon={<StarBorderIcon fontSize="large" />}
              checkedIcon={<StarRateIcon fontSize="large" />}
            />
          </Grid>
        </Grid>
      </>
    ),
  },
];
const datas = [
  {
    name: "Mohammad",
    price: "BDT 2131.20",
    change: "+32%",
    marketcap: "BDT 23.13T",
  },
  {
    name: "Nayeem Raihan ",
    price: "BDT 2121.20",
    change: "-20%",
    marketcap: "BDT 23.13T",
  },
  {
    name: "Mohammad",
    price: "BDT 2321.20",
    change: "+32%",
    marketcap: "BDT 23.13T",
  },
  {
    name: "Nayeem Raihan ",
    price: "BDT 2121.20",
    change: "-20%",
    marketcap: "BDT 23.13T",
  },
  {
    name: "Mohammad",
    price: "BDT 2321.20",
    change: "+32%",
    marketcap: "BDT 23.13T",
  },
  {
    name: "Nayeem Raihan ",
    price: "BDT 2121.20",
    change: "-20%",
    marketcap: "BDT 23.13T",
  },
  {
    name: "Mohammad",
    price: "BDT 2123.20",
    change: "+32%",
    marketcap: "BDT 23.13T",
  },
  {
    name: "Nayeem Raihan ",
    price: "BDT 2121.20",
    change: "-20%",
    marketcap: "BDT 23.13T",
  },
  {
    name: "Mohammad",
    price: "BDT 2131.20",
    change: "+32%",
    marketcap: "BDT 23.13T",
  },
  {
    name: "Nayeem Raihan ",
    price: "BDT 2121.20",
    change: "-20%",
    marketcap: "BDT 23.13T",
  },
  {
    name: "Mohammad",
    price: "BDT 2321.20",
    change: "+32%",
    marketcap: "BDT 23.13T",
  },
  {
    name: "Nayeem Rahan ",
    price: "BDT 2121.20",
    change: "-20%",
    marketcap: "BDT 23.13T",
  },
  {
    name: "Mohammad",
    price: "BDT 3121.20",
    change: "+32%",
    marketcap: "BDT 23.13T",
  },
  {
    name: "Nayeem Raihan ",
    price: "BDT 2121.20",
    change: "-20%",
    marketcap: "BDT 23.13T",
  },
  {
    name: "Mohammad",
    price: "BDT 3121.20",
    change: "+32%",
    marketcap: "BDT 23.13T",
  },
  {
    name: "Nayeem Raihan ",
    price: "BDT 2121.20",
    change: "-20%",
    marketcap: "BDT 23.13T",
  },
  {
    name: "Mohammad",
    price: "BDT 3121.20",
    change: "+32%",
    marketcap: "BDT 23.13T",
  },
  {
    name: "Nayeem Raihan ",
    price: "BDT 2121.20",
    change: "-20%",
    marketcap: "BDT 23.13T",
  },
  {
    name: "Mohammad",
    price: "BDT 2321.20",
    change: "+32%",
    marketcap: "BDT 23.13T",
  },
  {
    name: "Nayeem Raihan ",
    price: "BDT 2121.20",
    change: "-20%",
    marketcap: "BDT 23.13T",
  },
  {
    name: "Mohammad",
    price: "BDT 2321.20",
    change: "+32%",
    marketcap: "BDT 23.13T",
  },
  {
    name: "Nayeem Raihan ",
    price: "BDT 2121.20",
    change: "-20%",
    marketcap: "BDT 23.13T",
  },
  {
    name: "Mohammad",
    price: "BDT 3121.20",
    change: "+32%",
    marketcap: "BDT 23.13T",
  },
  {
    name: "Nayeem Raihan ",
    price: "BDT 2121.20",
    change: "-20%",
    marketcap: "BDT 23.13T",
  },
];

const Table = () => {
  const [data, setData] = useState(datas);
  const [assetFilter, setAssetFilter] = useState("Tradable assets");
  const [timeFilter, setTimeFilter] = useState("1d");

  const reqSearch = (searchValue) => {
    const filteredRows = datas.filter((row) => {
      return row.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setData(filteredRows);
  };

  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <TextField
            onChange={(e) => reqSearch(e.target.value)}
            size="small"
            sx={{
              m: 2,
              border: 1,
              borderColor: "divider",
              borderRadius: 1,
              p: md ? 1 : 1,
              pl: md ? 1 : 2,
              pr: md ? 5 : 10,
            }}
            placeholder="Search all asset"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </Grid>
        <Grid item>
          <Box sx={{ mt: 1 }}>
            <Select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value)}
              displayEmpty
              sx={{ width: 70, m: 1 }}
            >
              <MenuItem value="1h">1h</MenuItem>
              <MenuItem value="1d">1d</MenuItem>
              <MenuItem value="1w">1w</MenuItem>
              <MenuItem value="1m">1m</MenuItem>
              <MenuItem value="1y">1y</MenuItem>
            </Select>
            <Select
              value={assetFilter}
              onChange={(e) => setAssetFilter(e.target.value)}
              displayEmpty
              sx={{
                width: 180,
                m: 1,
              }}
            >
              <MenuItem value="Tradable assets">Tradable assets</MenuItem>
              <MenuItem value="Watchlist">Watchlist</MenuItem>
              <MenuItem value="All Assets">All Assets</MenuItem>
              <MenuItem value="Top Gainers">Top Gainers</MenuItem>
              <MenuItem value="Top Losers">Top Losers</MenuItem>
            </Select>
          </Box>
        </Grid>
      </Grid>

      <MaterialTable
        style={{ padding: "5px 10px" }}
        columns={columns}
        data={data}
        icons={tableIcons}
        localization={{
          toolbar: {
            searchPlaceholder: "Search all assets",
          },
        }}
        options={{
          paginationType: "stepped",
          rowStyle: {
            fontSize: md ? 14 : 16,
          },
          toolbar: false,
          headerStyle: {
            fontSize: md ? 14 : 16,
          },
        }}
      ></MaterialTable>
    </div>
  );
};

export default Table;
