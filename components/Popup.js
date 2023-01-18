import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FormPopup({
  open,
  handleClose,
  data,
  onChange,
  handelFormSubmit,
}) {
  const {
    Career_Heading,
    Career_Description,
    Experience,
    Job_Location,
    Qualification,
  } = data;
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form action="">
            <h1 className="py-5">Enter the New Career Details</h1>
            <TextField
              onChange={(e) => onChange(e)}
              id="Career_Heading"
              value={Career_Heading}
              placeholder="Enter the Career Heading "
              label="Career Heading"
              style={{ marginBottom: "24px" }}
              fullWidth
            />
            <TextField
              id="Experience"
              placeholder="Enter the Experience"
              value={Experience}
              label="Experience"
              fullWidth
              style={{ marginBottom: "24px" }}
              onChange={(e) => onChange(e)}
            />
            <TextField
              id="Qualification"
              placeholder="Enter the Qualifiction"
              value={Qualification}
              label="Qualification"
              fullWidth
              style={{ marginBottom: "24px" }}
              onChange={(e) => onChange(e)}
            />
            <TextField
              id="Job_Location"
              placeholder="Enter the Job location"
              value={Job_Location}
              label="Job location"
              fullWidth
              style={{ marginBottom: "24px" }}
              onChange={(e) => onChange(e)}
            />
            <TextField
              id="Career_Description"
              placeholder="Enter the  Job Description"
              label="Career Description"
              value={Career_Description}
              fullWidth
              style={{ marginBottom: "24px" }}
              onChange={(e) => onChange(e)}
            />
          </form>
          <div className="flex flex-row ">
            <Button
              onClick={handleClose}
              color="secondary"
              variant="outlined"
              style={{ marginRight: "3px" }}
              onChange={(e) => onChange(e)}
            >
              Close
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                handelFormSubmit();
                handleClose;
              }}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
