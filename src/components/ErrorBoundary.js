import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    margin: "1em",
    color: "white",
    textAlign: "center",
  },
});

export class ErrorBoundary extends React.Component {
  state = { hasError: false, error: "" };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const classes = useStyles();
      // You can render any custom fallback UI
      return (
        <Grid>
          <Typography variant="h4" className={classes.root}>
            Error Loading the data
          </Typography>
        </Grid>
      );
    }

    return this.props.children;
  }
}
