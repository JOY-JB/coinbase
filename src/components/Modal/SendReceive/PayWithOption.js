import {
  Grid,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MaterialTable from "material-table";
import tableIcons from "../../Trade/Table/MaterialTableIcons";
import SearchIcon from "@mui/icons-material/Search";
import CheckIcon from "@mui/icons-material/Check";
import CurrencyBitcoinSharpIcon from "@mui/icons-material/CurrencyBitcoinSharp";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const PayWithOption = ({ payOption, setPayOption }) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: md ? (sm ? 1 : "50%") : "25%",
    bgcolor: "background.paper",
    border: 0,
    borderRadius: 2,
    boxShadow: 24,
    height: "550px",
  };

  const columns = [
    {
      title: "Name",
      field: "name",
      render: (row) => (
        <Box>
          <Grid container>
            <Grid item xs={3}>
              {row.icon}
            </Grid>
            <Grid item xs={9}>
              <Typography variant="p" component="p" sx={{ fontWeight: 600 }}>
                {row.name}
              </Typography>
              <Typography variant="p" component="p" sx={{}}>
                {row.shortname}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ),
      width: "60%",
    },
    {
      title: "Price",
      field: "price",
      searchable: false,
      render: (row) => (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Grid container>
            <Grid item xs={9}>
              <Typography variant="p" component="p" sx={{ fontWeight: 500 }}>
                {row.BTCprice} BTC
              </Typography>
              <Typography variant="p" component="p" sx={{}}>
                BDT {row.BDTprice}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              {selectedRow === row.tableData.id && (
                <CheckIcon sx={{ color: "primary.main" }} />
              )}
            </Grid>
          </Grid>
        </Box>
      ),
    },
  ];

  const datas = [
    {
      name: "Bitcoin",
      shortname: "BTC",
      BTCprice: "0",
      BDTprice: "0.00",
      icon: (
        <IconButton sx={{ p: 0 }}>
          <CurrencyBitcoinSharpIcon
            style={{
              fontSize: 18,
              color: "white",
              backgroundColor: "#fbc02d",
              margin: 2,
              transform: "rotate(15deg)",
            }}
          />
        </IconButton>
      ),
    },
    {
      name: "0x",
      shortname: "ZRX",
      BTCprice: "0",
      BDTprice: "0.00",
      icon: (
        <IconButton sx={{ p: 0 }}>
          <CurrencyBitcoinSharpIcon
            style={{
              fontSize: 18,
              color: "white",
              backgroundColor: "#fbc02d",
              margin: 2,
              transform: "rotate(15deg)",
            }}
          />
        </IconButton>
      ),
    },
    {
      name: "1Inch",
      shortname: "1Inch",
      BTCprice: "0",
      BDTprice: "0.00",
      icon: (
        <IconButton sx={{ p: 0 }}>
          <CurrencyBitcoinSharpIcon
            style={{
              fontSize: 18,
              color: "white",
              backgroundColor: "#fbc02d",
              margin: 2,
              transform: "rotate(15deg)",
            }}
          />
        </IconButton>
      ),
    },
    {
      name: "AIOZ Network",
      shortname: "AIOZ",
      BTCprice: "0",
      BDTprice: "0.00",
      icon: (
        <IconButton sx={{ p: 0 }}>
          <CurrencyBitcoinSharpIcon
            style={{
              fontSize: 18,
              color: "white",
              backgroundColor: "#fbc02d",
              margin: 2,
              transform: "rotate(15deg)",
            }}
          />
        </IconButton>
      ),
    },
    {
      name: "Bitcoin",
      BTCprice: "0",
      BDTprice: "0.00",
      icon: (
        <IconButton sx={{ p: 0 }}>
          <CurrencyBitcoinSharpIcon
            style={{
              fontSize: 18,
              color: "white",
              backgroundColor: "#fbc02d",
              margin: 2,
              transform: "rotate(15deg)",
            }}
          />
        </IconButton>
      ),
    },
    {
      name: "0x",
      BTCprice: "0",
      BDTprice: "0.00",
      icon: (
        <IconButton sx={{ p: 0 }}>
          <CurrencyBitcoinSharpIcon
            style={{
              fontSize: 18,
              color: "white",
              backgroundColor: "#fbc02d",
              margin: 2,
              transform: "rotate(15deg)",
            }}
          />
        </IconButton>
      ),
    },
    {
      name: "1Inch",
      BTCprice: "0",
      BDTprice: "0.00",
      icon: (
        <IconButton sx={{ p: 0 }}>
          <CurrencyBitcoinSharpIcon
            style={{
              fontSize: 18,
              color: "white",
              backgroundColor: "#fbc02d",
              margin: 2,
              transform: "rotate(15deg)",
            }}
          />
        </IconButton>
      ),
    },
    {
      name: "AIOZ Network",
      BTCprice: "0",
      BDTprice: "0.00",
      icon: (
        <IconButton sx={{ p: 0 }}>
          <CurrencyBitcoinSharpIcon
            style={{
              fontSize: 18,
              color: "white",
              backgroundColor: "#fbc02d",
              margin: 2,
              transform: "rotate(15deg)",
            }}
          />
        </IconButton>
      ),
    },
  ];

  const [data, setData] = useState(datas);
  const [selectedRow, setSelectedRow] = useState(0);
  const handleClose = () => {
    setPayOption(false);
  };

  const reqSearch = (searchValue) => {
    const filteredRows = datas.filter((row) => {
      return row.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setData(filteredRows);
  };

  return (
    <div>
      <Modal hideBackdrop open={payOption} onClose={handleClose}>
        <Box sx={{ ...style, p: 3 }}>
          <Box>
            <ArrowBackIcon
              onClick={handleClose}
              sx={{ position: "absolute", mt: "2px" }}
            />

            <Typography
              variant="p"
              component="span"
              sx={{
                fontSize: 20,
                fontWeight: 600,
                display: "flex",
                justifyContent: "center",
              }}
            >
              Select asset
            </Typography>
          </Box>

          <Box>
            <TextField
              onChange={(e) => reqSearch(e.target.value)}
              size="medium"
              sx={{
                width: 1,
                my: 2,
                border: 1,
                borderColor: "divider",
                borderRadius: 1,
                p: 1,
                pl: 2,
                pr: 10,
              }}
              placeholder="Search"
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
            <MaterialTable
              columns={columns}
              data={data}
              icons={tableIcons}
              onRowClick={(evt, selectedRow) =>
                setSelectedRow(selectedRow.tableData.id)
              }
              options={{
                minBodyHeight: "390px",
                maxBodyHeight: "390px",
                toolbar: false,
                paging: false,
                headerStyle: {
                  display: "none",
                },
                rowStyle: (rowData) => ({
                  backgroundColor:
                    selectedRow === rowData.tableData.id ? "#ebf0f7" : "#FFF",
                }),
              }}
            ></MaterialTable>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default PayWithOption;
