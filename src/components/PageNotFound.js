import React from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    color: "white",
    margin: "2em",
  },
});

export const PageNotFound = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Typography variant="h4" className={classes.root}>
        No Page Found !
      </Typography>
      <Footer />
    </div>
  );
};
