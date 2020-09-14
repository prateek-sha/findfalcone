import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles({
  root: {
    margin: "2em",
    color: "white",
    textAlign: "center",
  },
  link: {
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
  },
});

export const Footer = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Fade right>
        <Typography>
          Coding problem -
          <a href="www.geektrust.in/finding-falcone" className={classes.link}>
            www.geektrust.in/finding-falcone
          </a>
        </Typography>
      </Fade>
    </Grid>
  );
};
