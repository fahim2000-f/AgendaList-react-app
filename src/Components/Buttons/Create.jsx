import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
export const Create = (props) => {
  const [Task, setTask] = useState("");
  const [Time, setTime] = useState(new Date());
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const tasker = (e) => {
    setTask(e.target.value);
  };

  const handleChange = (newValue) => {
    setTime(newValue);
  };
  const create = () => {
    let tab = JSON.parse(localStorage.getItem("agenda")) || [];
    if (Task !== "" && Time !== "") {
      tab.push({ id: Math.random(), Task, Time });
      localStorage.setItem("agenda", JSON.stringify(tab));
      props.setTab(JSON.parse(localStorage.getItem("agenda")));
      setTime("");
      setTask("");
      handleClose();
    }
  };
  return (
    <>
      <Button
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
        style={{
          lineheight: "1.5",
          bgcolor: "rgba(255, 255, 255, 0.25)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          padding: "10px 28px",
          borderRadius: "30px",
          color: "#e02f6b",
          fontsize: "16px",
          cursor: "pointer",
          "&:hover": {
            color: "#ffffff",
          },
        }}
      >
        Add agenda
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth>
        <div style={{ background: "linear-gradient(#efa2b4, #aef1ee)" }}>
          <DialogTitle>Create</DialogTitle>
          <DialogContent>
            <DialogContentText>Enter the new Task</DialogContentText>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid xs={2} item>
                {" "}
                <TextField
                  sx={{ m: 1 }}
                  value={Task}
                  variant="outlined"
                  placeholder="Task name"
                  onChange={tasker}
                ></TextField>
              </Grid>

              <Grid xs={2} item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    label="Date"
                    inputFormat="MM/dd/yyyy"
                    value={Time}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button endIcon={<AddIcon />} color="success" onClick={create}>
              Add
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </>
  );
};
