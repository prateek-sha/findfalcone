import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

import { PlanetsList } from "./PlanetsList";
import HeadShake from "react-reveal/HeadShake";

const useStyles = makeStyles({
  root: {
    color: "white",
  },
});

export const Planets = () => {
  const classess = useStyles();
  return (
    <Grid
      container
      className={classess.root}
      justify="space-between"
      alignItems="center"
    >
      <Grid item sm={3} xs={12}>
        <HeadShake>
          <PlanetsList name="Destination1" pos="1" />
        </HeadShake>
      </Grid>
      <Grid item sm={3} xs={12}>
        <HeadShake>
          <PlanetsList name="Destination2" pos="2" />
        </HeadShake>
      </Grid>
      <Grid item sm={3} xs={12}>
        <HeadShake>
          <PlanetsList name="Destination3" pos="3" />
        </HeadShake>
      </Grid>
      <Grid item sm={3} xs={12}>
        <HeadShake>
          <PlanetsList name="Destination4" pos="4" />
        </HeadShake>
      </Grid>
    </Grid>
  );
};
