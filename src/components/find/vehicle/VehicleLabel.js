import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: ".8em",
    fontSize: "1.6em",
  },
});

export const VehicleLabel = ({
  handleRadio,
  name,
  vehicle,
  check,
  handle,
  disable,
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={12}>
      <input
        className={classes.root}
        onChange={handle === "false" ? () => {} : handleRadio}
        type="radio"
        value={vehicle.name}
        name={name}
        checked={check === "false" ? false : true}
        disabled={disable === "false" ? false : true}
      />
      <label>
        {vehicle.name} {`(${vehicle.total_no})`}
      </label>
    </Grid>
  );
};
