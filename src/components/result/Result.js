import React, { useContext } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";
import { globalContext } from "../../context/ContextProvider";
import Fade from "react-reveal/Fade";
import { useHistory } from "react-router-dom";
import { ErrorBoundary } from "../ErrorBoundary";

const useStyles = makeStyles({
  root: {
    marginTop: "2em",
    textAlign: "center",
    color: "white",
  },
  center: {
    marginTop: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
  },
  button: {
    marginTop: "1em",
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
  margin: {
    margin: "1em",
  },
});

const Success = ({ planet, time }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Fade left>
        <Typography className={classes.margin} variant="h5">
          Success! Congratulations on finding Falcone King Shan is might
          pleased.
        </Typography>
      </Fade>
      <Fade right>
        <Typography className={classes.root}>Time Taken: {time}</Typography>
        <Typography>Planet Found : {planet} </Typography>
      </Fade>
    </Grid>
  );
};

const Loading = () => {
  return <CircularProgress color="secondary" />;
};

const TryAgain = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Typography>Not Found!! Please try Again</Typography>
    </Grid>
  );
};

const Error = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Typography>There was some error , finding result </Typography>
    </Grid>
  );
};

export const Result = () => {
  const history = useHistory();
  const classes = useStyles();
  const { resultstate, Reset } = useContext(globalContext);
  const { loading, error, status, planet, time_taken } = resultstate;
  const handleTryagain = () => {
    Reset();
    history.push("/");
  };
  return (
    <Grid className={classes.center}>
      {loading === true ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : status === "false" ? (
        <TryAgain />
      ) : (
        <ErrorBoundary>
          <Success planet={planet} time={time_taken} />
        </ErrorBoundary>
      )}
      <button className={classes.button} onClick={handleTryagain}>
        Try Again
      </button>
    </Grid>
  );
};
