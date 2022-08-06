import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Update } from "./Buttons/Update";
import { Delete } from "./Buttons/Delete";
import { Create } from "./Buttons/Create";
import { Export } from "./Buttons/Export";
import { Import } from "./Buttons/Import";

const Agenda = () => {
  const [Tab, setTab] = useState(
    JSON.parse(localStorage.getItem("agenda")) || []
  );

  return (
    <>
      <div>
        <Box
          sx={{
            display: "flex",
            width: 1,
            height: "700px",
            mt: 1,
            borderRadius: 15,
          }}
          className="section"
        >
          <CssBaseline />
          <Box
            component="main"
            sx={{
              marginTop: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              flexGrow: 1,
              p: 3,
            }}
          >
            <h1 style={{ textShadow: "0 0 3px #aef1ee" }}>
              Welcom To Agenda List App
            </h1>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              marginTop="35px"
            >
              <Create setTab={setTab} />
              {Tab.map((i) => (
                <>
                  <Grid
                    sx={{ m: 1 }}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    style={{
                      margin: "2px 0",
                      border: "2px solid #ccc",
                      borderRadius: "15px",
                      padding: "10px",
                    }}
                  >
                    <Grid item>
                      {" "}
                      <li key={i.id}>
                        {i.Task} : {new Date(i.Time).toLocaleDateString()}
                      </li>
                    </Grid>
                    <Grid item>
                      <Delete setTab={setTab} id={i.id} />
                    </Grid>

                    <Grid item>
                      {" "}
                      <Update
                        setTab={setTab}
                        Time={i.Time}
                        Task={i.Task}
                        id={i.id}
                      />
                    </Grid>
                  </Grid>
                </>
              ))}
              <Grid
                marginTop="35px"
                marginBottom="35px"
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Button
                  sx={{ m: 1 }}
                  onClick={() => {
                    localStorage.clear();
                    setTab([]);
                  }}
                  variant="contained"
                  color="error"
                  className="btn"
                >
                  Clear
                </Button>
                <Export />
                <Import setTab={setTab} />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
};
export default Agenda;
