import React, { useContext } from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import { globalContext } from "../../context/ContextProvider";
import Fade from "react-reveal/Fade";

const useStytles = makeStyles({
  root: {
    color: "white",
  },
  option: {
    padding: "2em",
    float: "left",
  },
  heading: {
    alignItems: "center",
    textAlign: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
  },
  margin: {
    marginLeft: ".5em",
  },
});

export const Header = () => {
  const { Reset } = useContext(globalContext);
  const classes = useStytles();
  const history = useHistory();

  const handleReset = () => {
    Reset();
    history.push("/");
  };
  return (
    <Grid className={classes.root} container direction="column">
      <Fade right>
        <Grid
          className={classes.option}
          container
          direction="row"
          justify="flex-end"
        >
          <Grid className={classes.link} item onClick={handleReset}>
            Reset
          </Grid>
          <Grid className={classes.margin} item>
            |
          </Grid>
          <Grid className={classes.margin} item>
            <a className={classes.link} href="https://www.geektrust.in/">
              Geek Trust Home
            </a>
          </Grid>
        </Grid>
      </Fade>
      <Grid className={classes.heading} item>
        <Fade left>
          <Typography variant="h2">Finding Falcone!</Typography>
        </Fade>
      </Grid>
    </Grid>
  );
};
