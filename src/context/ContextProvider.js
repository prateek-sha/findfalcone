import React, { createContext, useReducer } from "react";
import axios from "axios";
import AppReducer from "./reducer/AppReducer";
import {
  error,
  initialData,
  dropdownfalse,
  radiofalse,
  addPlanet,
  addVehicle,
  addResult,
  resultError,
  reset,
  resetResult,
  addTime,
} from "./ActionTypes";
import { PLANETS_LINK, VEHICLES_LINK, TOKEN_LINK, FIND_LINK } from "./ApiLinks";
import { initialState, result } from "./initialState";
import ResultReducer from "./reducer/ResultReducer";

//Creating global context for calling values
export const globalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [resultstate, resultdispatch] = useReducer(ResultReducer, result);

  //function to set intial value
  async function setInitial() {
    try {
      const planets = await axios.get(PLANETS_LINK);
      //eslint-disable-next-line
      planets.data.map((planet) => {
        planet.select = -1;
      });
      const vehicles = await axios.get(VEHICLES_LINK);
      //eslint-disable-next-line
      vehicles.data.map((vehicle) => {
        vehicle.select = -1;
      });
      dispatch({
        type: initialData,
        payload: {
          planets: planets.data,
          vehicles: vehicles.data,
        },
      });
    } catch (err) {
      //Error handling
      dispatch({
        type: error,
      });
    }
  }

  const Radiofalse = (name, position) => {
    dispatch({
      type: radiofalse,
      payload: { name, position },
    });
  };
  const Dropdownfalse = (name, position) => {
    dispatch({
      type: dropdownfalse,
      payload: { name, position },
    });
  };

  const findFalcone = async () => {
    const headers = {
      Accept: "application/json",
    };

    const response = axios.post(TOKEN_LINK, {}, { headers: headers });
    const token = (await response).data.token;

    const data = {
      token,
      Planet_names: [...resultstate.planets],
      vehicle_names: [...resultstate.vehicles],
    };

    axios
      .post(FIND_LINK, data, { headers: headers })
      .then((response) => {
        resultdispatch({
          type: addResult,
          payload: response.data,
        });
      })
      .catch((err) =>
        resultdispatch({
          type: resultError,
        })
      );
  };

  const AddPlanet = (payload) => {
    resultdispatch({
      type: addPlanet,
      payload,
    });
  };

  const AddVehicle = (payload) => {
    {
      resultdispatch({
        type: addVehicle,
        payload,
      });
    }
  };

  const Reset = () => {
    dispatch({
      type: reset,
    });
    resultdispatch({
      type: resetResult,
    });
  };

  const AddTime = (payload) => {
    resultdispatch({
      type: addTime,
      payload,
    });
  };

  return (
    <globalContext.Provider
      value={{
        AddTime,
        Reset,
        resultstate,
        AddPlanet,
        AddVehicle,
        findFalcone,
        result,
        setInitial,
        state,
        planets: state.planets,
        vehicles: state.vehicles,
        Radiofalse,
        Dropdownfalse,
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
