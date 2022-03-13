import MaterialTable from "material-table";
import React from "react";
import tableIcons from "./MaterialTableIcons";

const columns = [
  { title: "Name", field: "name" },
  { title: "Surname", field: "surname" },
  {
    title: "Birth Year",
    field: "birthYear",
    type: "numeric",
    searchable: false,
  },
];
const data = [
  { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
  { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
  { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
  { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
  { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
  { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
  { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
  { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
  { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
  { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
  { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
  { name: "Nayeem Rahan ", surname: "Shuvo", birthYear: 1996 },
  { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
  { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
  { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
  { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
  { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
  { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
  { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
  { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
  { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
  { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
  { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
  { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
];

const Table = () => {
  return (
    <div>
      <MaterialTable
        title="Basic Table"
        columns={columns}
        data={data}
        icons={tableIcons}
        options={{
          showTitle: false,
          searchFieldAlignment: "left",
          searchFieldStyle: {
            border: "1px solid #bdbdbd",
          },
        }}
      ></MaterialTable>
    </div>
  );
};

export default Table;
