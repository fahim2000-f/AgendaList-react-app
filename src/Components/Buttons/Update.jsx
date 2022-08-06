import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
export const Update = (props) => {
  const [Task, setTask] = useState("");
  const [Time, setTime] = useState("");
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setTask(props.Task);
    setTime(props.Time);
  }, [props.Task, props.Time]);

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
  return (
    <>
      <Tooltip title="Edit">
        <IconButton
          sx={{ m: 1 }}
          color="success"
          onClick={handleClickOpen}
          edge="end"
          aria-label="Edit"
        >
          <DriveFileRenameOutlineOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <div style={{ background: "linear-gradient(#efa2b4, #aef1ee)" }}>
          <DialogTitle>Edit</DialogTitle>
          <DialogContent>
            <DialogContentText>Edit the Task</DialogContentText>
            <Grid
              sx={{ m: 1 }}
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <TextField
                  sx={{ m: 1 }}
                  variant="filled"
                  placeholder="Task name"
                  size="small"
                  value={Task}
                  onChange={tasker}
                ></TextField>
              </Grid>
              <Grid item>
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
            <Button
              endIcon={<DriveFileRenameOutlineOutlinedIcon />}
              color="success"
              onClick={() => {
                let tab = JSON.parse(localStorage.getItem("agenda")) || [];
                let index = tab.findIndex((e) => e.id === props.id);
                console.log(index);
                tab[index] = { id: props.id, Task, Time };
                localStorage.setItem("agenda", JSON.stringify(tab));
                props.setTab(JSON.parse(localStorage.getItem("agenda")));

                handleClose();
              }}
            >
              edit
            </Button>
          </DialogActions>
        </div>
      </Dialog>{" "}
    </>
  );
};
