import { Button } from "@mui/material";
import React from "react";
import Papa from "papaparse";
import FileUploadIcon from "@mui/icons-material/FileUpload";
export const Import = (props) => {
  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        console.log(results.data);
        props.setTab(results.data);
        localStorage.setItem("agenda", JSON.stringify(results.data));
      },
    });
  };
  return (
    <Button variant="contained" endIcon={<FileUploadIcon />} component="label">
      Import
      <input hidden accept=".csv" type="file" onChange={changeHandler} />
    </Button>
  );
};
