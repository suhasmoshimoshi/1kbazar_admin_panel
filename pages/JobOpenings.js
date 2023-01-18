import React, { useEffect } from "react";
import Sidenav from "../components/sidebar/Sidenav";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import Grid from "@mui/material/Grid";
import FormPopup from "../components/Popup";
import axios from "axios";

function JobOpenings() {
  const editUser = () => {
    console.log("edit");
  };
  const deleteUser = () => {
    console.log("update");
  };

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
    // await fetch(url)
    //   .then((resp) => resp.json())
    //   .then((resp) => {
    //     setTableData(resp);
    //     console.log(resp, "resp");
    //     console.log("111111111111111111");
    //   });
    const listAPI = await axios.get("http://localhost:3000/api/login");
    if (listAPI.status == 200) {
      setTableData(listAPI.data);
    }
    console.log(listAPI, "listAPI");
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
    {
      headerName: "Actions",
      cellRenderer: "editButton",
      cellRendererParams: {
        onClick: editUser,
        label: "Edit",
      },
      sortable: false,
      filter: false,
    },
    {
      headerName: "Actions",
      cellRenderer: "deleteButton",
      cellRendererFramework: () => {
        <center>
          {/* <button className="btn btn-danger" type="button">
            dfghjk
          </button> */}
          <h1>dtfctdfc</h1>
        </center>;
      },
      sortable: false,
      filter: false,
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
    <div>
      <Sidenav />
      <div className="bg-red-50 h-screen text-black pl-[200px] pr-[50px]">
        <div className="pl-2 py-2 bg-red-50      text-3xl  text-black pt-2  ">
          Welcome to Job Openings Page ✉️
        </div>

        <Grid align="right">
          <button
            className="bg-white text-black p-2 m-2 rounded hover:bg-red-500 hover:text-white hover:shadow-white"
            onClick={handleOpen}
          >
            Add Jobs!!
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
  );
}

export default JobOpenings;
