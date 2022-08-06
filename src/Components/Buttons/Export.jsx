import React from "react";
import exportFromJSON from "export-from-json";
import { Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
export const Export = () => {
  const tocvs = () => {
    const data = JSON.parse(localStorage.getItem("agenda"));
    if (data.length !== 0) {
      const fileName = "download";
      const exportType = exportFromJSON.types.csv;
      exportFromJSON({ data, fileName, exportType });
    }
  };
  return (
    <Button onClick={tocvs} startIcon={<FileDownloadIcon />}>
      Export
    </Button>
  );
};
