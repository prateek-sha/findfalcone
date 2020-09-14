import React, { useContext, useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import { globalContext } from "../../../context/ContextProvider";
import { Vehicles } from "../vehicle/Vehicles";
import { PlanetsListOption } from "./PlanetsListOption";
import { ErrorBoundary } from "../../ErrorBoundary";

const useStyles = makeStyles({
  root: {
    backgroundColor: "transparent",
    color: "white",
    padding: ".5em",
    border: ".1px white solid",
    minWidth: "110px",
    fontSize: "1em",
    margin: "1em",
    borderRadius: "4px",
  },
  option: {
    backgroundColor: "rgba(0,0,63,1)",
    borderRadius: "12px",
  },
});

export const PlanetsList = ({ name, pos }) => {
  const { resultstate, planets, Dropdownfalse, AddPlanet } = useContext(
    globalContext
  );
  const [Localplanet, setLocalplanet] = useState(null);
  const classes = useStyles();

  const handleSelect = (e) => {
    if (resultstate.planets.length <= 4) {
      AddPlanet(e.target.value);
      for (let i = 0; i < planets.length; i++) {
        if (planets[i].name === e.target.value) {
          setLocalplanet(planets[i].distance);
        }
      }
      Dropdownfalse(e.target.value, pos);
    }
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <select onChange={handleSelect} className={classes.root}>
          <option className={classes.option}>Select</option>
          <ErrorBoundary>
            <PlanetsListOption
              name={name}
              planets={planets}
              pos={pos}
              classes={classes}
            />
          </ErrorBoundary>
        </select>
      </Grid>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          {Localplanet === null ? (
            false
          ) : (
            <ErrorBoundary>
              <Vehicles localplanet={Localplanet} name={name} position={pos} />
            </ErrorBoundary>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
