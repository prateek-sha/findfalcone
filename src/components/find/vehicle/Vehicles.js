import React from "react";
import { ErrorBoundary } from "../../ErrorBoundary";

import { VehiclesList } from "./VehiclesList";

export const Vehicles = ({ name, position, localplanet }) => {
  return (
    <ErrorBoundary>
      <VehiclesList position={position} name={name} localplanet={localplanet} />
    </ErrorBoundary>
  );
};
