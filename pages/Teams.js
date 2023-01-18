import React, { useEffect } from "react";
import Sidenav from "../components/sidebar/Sidenav";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import Grid from "@mui/material/Grid";
import FormPopup from "../components/Popup";

function Teams() {
  const [tabelData, setTableData] = React.useState(null);
  const url = "http://localhost:3000/api/hello";
  useEffect(() => {
    getCareerList();
  }, [1]);
  const [formData, setFormData] = React.useState({
    ID: "",
    Job_Title: "",
    Department: "",
    Location: "",
  });
  const onChange = (e) => {
    const { value, id } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  const getCareerList = async () => {
    await fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setTableData(resp));
  };
  const handelFormSubmit = async () => {
    await fetch(url, { method: "POST", body: JSON.stringify(formData) })
      .then((resp) => resp.json())
      // .then((resp) => getCareerList())
      .catch((err) => console.log(err));
  };
  // console.log(formData);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columnDefs = [
    { headerName: "ID", field: "ID" },
    {
      headerName: "Job Title",
      field: "Job_Title",
      editable: true,
      sortable: true,
      filter: true,
    },
    {
      headerName: "Department",
      field: "Department",
      editable: true,
      sortable: true,
      filter: true,
    },
    {
      headerName: "Location",
      field: "Location",
      editable: true,
      sortable: true,
      filter: true,
    },
  ];

  const defaultColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
    flex: 1,
    resizable: true,
    minWidth: 120,
  };
  return (
    <div className="">
      <Sidenav />
      <div className="bg-red-50  text-black  pr-[50px] ml-[200px]">
        <div className="pl-2 py-2 bg-red-50      text-3xl  text-black pt-2 ">
          Welcome to Teams Page 🧑🏻‍🤝‍🧑🏼
        </div>
        <div className="h-screen">
          <Grid align="right">
            <button
              className="bg-white text-black p-2 m-2 rounded hover:bg-red-500 hover:text-white hover:shadow-white"
              onClick={handleOpen}
            >
              Add Career!!
            </button>
          </Grid>
          <div
            id="myGrid"
            class="ag-theme-alpine pl-2 h-[250px] w-[100%] text-black"
          >
            <AgGridReact
              defaultColDef={defaultColDef}
              columnDefs={columnDefs}
              rowData={tabelData}
              pagination={true}
              enableCellChangeFlash={true}
              onCellValueChanged={(params) => {
                // handle update to cell value here
              }}
            />
            <FormPopup
              open={open}
              handleClose={handleClose}
              data={formData}
              onChange={onChange}
              handelFormSubmit={handelFormSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;
