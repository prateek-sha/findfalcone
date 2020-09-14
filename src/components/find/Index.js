import React, { useContext, useEffect } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";
import { globalContext } from "../../context/ContextProvider";
import { Planets } from "./planet/Planets";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles({
  root: {
    margin: "1em",
    color: "white",
    textAlign: "center",
  },
  center: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
  },
  button: {
    color: "black",
    cursor: "pointer",
    display: "block",
    margin: "0 auto",
    padding: ".5em 1em .5em 1em",
    background: "#e61972",
    letterSpacing: "2px",
    transition: ".2s all ease-in-out",
    outline: "none",
    border: "1px solid rgba(0,0,0,1)",
    boxShadow: "3px 3px 1px #95a4ff, 3px 3px 1px 1px rgba(0,0,0,1)",

    "&:hover": {
      background: "rgba(0,0,0,1)",
      color: "white",
      border: "1px solid rgba(0,0,0,1)",
    },
  },
  disable: {
    color: "black",
    cursor: "pointer",
    display: "block",
    margin: "0 auto",
    padding: ".5em 1em .5em 1em",
    letterSpacing: "2px",
    transition: ".2s all ease-in-out",
    outline: "none",
    border: "1px solid rgba(0,0,0,1)",
    boxShadow: "3px 3px 1px #95a4ff, 3px 3px 1px 1px rgba(0,0,0,1)",
    opacity: 0.3,
  },
});

// Component for loading screen
const Loading = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Fade>
        <Grid item>
          <Typography variant="h4" className={classes.root}>
            Loading Please wait
          </Typography>
        </Grid>
        <Grid item>
          <CircularProgress color="secondary" />
        </Grid>
      </Fade>
    </Grid>
  );
};

// Component for error screen
const Error = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Typography variant="h4" className={classes.root}>
        Error Loading the data
      </Typography>
    </Grid>
  );
};

export const Index = () => {
  const history = useHistory();
  const classes = useStyles();
  const { resultstate, setInitial, state, findFalcone } = useContext(
    globalContext
  );
  useEffect(() => {
    setInitial();
    // eslint-disable-next-line
  }, []);

  const handleResult = () => {
    findFalcone();
    history.push("/result");
  };

  return (
    <>
      <Grid className={classes.root}>
        <Fade left>
          <Typography variant="h5">
            Select planets you want to search in:
          </Typography>
        </Fade>
      </Grid>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={0} sm={2}></Grid>
        <Grid className={classes.center} item xs={12} sm={8}>
          {state.error === true ? (
            <Error />
          ) : state.loading === true ? (
            <Loading />
          ) : (
            <Planets />
          )}
          <Fade>
            <Typography variant="h5" className={classes.root}>
              Time Taken: {resultstate.time_taken}
            </Typography>

            {resultstate.planets.length == 4 &&
            resultstate.vehicles.length == 4 ? (
              <button
                className={classes.button}
                disabled={false}
                onClick={handleResult}
              >
                Find Falcone
              </button>
            ) : (
              <button
                className={classes.disable}
                disabled={true}
                onClick={handleResult}
              >
                Find Falcone
              </button>
            )}
          </Fade>
        </Grid>
        <Grid item xs={0} sm={2}></Grid>
      </Grid>
    </>
  );
};
