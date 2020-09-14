import { makeStyles } from "@material-ui/core";
import React, { useContext } from "react";
import { globalContext } from "../../../context/ContextProvider";
import { VehicleLabel } from "./VehicleLabel";

const useStyles = makeStyles({
  root: {
    marginTop: "1em",
  },
});

export const VehiclesList = ({ position, name, localplanet }) => {
  const classes = useStyles();
  const { AddTime, resultstate, AddVehicle, vehicles, Radiofalse } = useContext(
    globalContext
  );
  const handleRadio = (e) => {
    if (resultstate.vehicles.length <= 4) {
      for (let i = 0; i < vehicles.length; i++) {
        if (vehicles[i].name === e.target.value) {
          var speed = vehicles[i].speed;
        }
      }
      if (localplanet != null) {
        AddTime(localplanet / speed);
      }
      AddVehicle(e.target.value);
      Radiofalse(e.target.value, position);
    }
  };
  return (
    <>
      {vehicles
        .filter((vehicle) => vehicle.select === -1)
        .map((vehicle) => {
          return (
            <VehicleLabel
              key={`${name}-${vehicle.name}`}
              name={name}
              vehicle={vehicle}
              handleRadio={handleRadio}
              handle="true"
              check="false"
              disable="false"
            />
          );
        })}
      {vehicles
        .filter((vehicle) => vehicle.select === position)
        .map((vehicle) => {
          return (
            <VehicleLabel
              key={`${name}-${vehicle.name}`}
              name={name}
              vehicle={vehicle}
              handleRadio={handleRadio}
              handle="false"
              check="true"
              disable="false"
            />
          );
        })}
      {vehicles
        .filter((vehicle) => vehicle.select != -1 && vehicle.select != position)
        .map((vehicle) => {
          return (
            <VehicleLabel
              key={`${name}-${vehicle.name}`}
              name={name}
              vehicle={vehicle}
              handleRadio={handleRadio}
              handle="false"
              check="false"
              disable="true"
            />
          );
        })}
    </>
  );
};
