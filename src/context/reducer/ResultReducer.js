import {
  addPlanet,
  addVehicle,
  addResult,
  resultError,
  resetResult,
  addTime,
} from "../ActionTypes";
import { result } from "../initialState";

export default (state, action) => {
  switch (action.type) {
    case addPlanet:
      return {
        ...state,
        planets: [...state.planets, action.payload],
      };

    case addVehicle:
      return {
        ...state,
        vehicles: [...state.vehicles, action.payload],
      };
    case addResult:
      return {
        ...state,
        loading: false,
        planet: action.payload.planet_name,
        status: action.payload.status,
      };
    case resultError:
      return {
        ...state,
        error: true,
      };
    case resetResult:
      return result;
    case addTime:
      return {
        ...state,
        time_taken: state.time_taken + action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
