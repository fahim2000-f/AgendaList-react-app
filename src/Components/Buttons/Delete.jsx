import { IconButton, Tooltip } from "@mui/material";
import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export const Delete = (props) => {
  return (
    <Tooltip title="Delete">
      <IconButton
        sx={{ m: 1 }}
        color="error"
        onClick={() => {
          let tab = JSON.parse(localStorage.getItem("agenda")) || [];
          let index = tab.findIndex((e) => e.id === props.id);
          tab.splice(index, 1);
          props.setTab(tab);
          localStorage.setItem("agenda", JSON.stringify(tab));
        }}
        edge="end"
        aria-label="delete"
      >
        <DeleteOutlinedIcon />
      </IconButton>
    </Tooltip>
  );
};
