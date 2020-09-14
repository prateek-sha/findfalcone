import React from "react";

export const PlanetsListOption = ({ name, planets, pos, classes }) => {
  return (
    <>
      {planets
        .filter((planet) => planet.select == pos)
        .map((planet) => {
          return (
            <option
              key={`${name}-${planet.name}`}
              selected
              className={classes.option}
              value={planet.name}
            >
              {planet.name}
            </option>
          );
        })}
      {planets
        .filter((planet) => planet.select === -1)
        .map((planet) => {
          return (
            <option
              key={`${name}-${planet.name}`}
              className={classes.option}
              value={planet.name}
            >
              {planet.name}
            </option>
          );
        })}
      {planets
        .filter((planet) => planet.select != -1 && planet.select != pos)
        .map((planet) => {
          return (
            <option
              key={`${name}-${planet.name}`}
              disabled
              className={classes.option}
              value={planet.name}
            >
              {planet.name}
            </option>
          );
        })}
    </>
  );
};
