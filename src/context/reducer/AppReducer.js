import {
  initialData,
  error,
  dropdownfalse,
  radiofalse,
  reset,
} from "../ActionTypes";

export default (state, action) => {
  switch (action.type) {
    case initialData:
      return {
        ...state,
        loading: false,
        planets: [...action.payload.planets],
        vehicles: [...action.payload.vehicles],
      };
    case error:
      return {
        ...state,
        error: true,
      };
    case radiofalse:
      return {
        ...state,
        vehicles: [
          ...state.vehicles.map((vehicle) => {
            var temp = Object.assign({}, vehicle);
            if (temp.name === action.payload.name) {
              temp.total_no -= 1;
              temp.select = action.payload.position;
            }
            return temp;
          }),
        ],
      };
    case dropdownfalse:
      return {
        ...state,
        planets: [
          ...state.planets.map((planet) => {
            var temp = Object.assign({}, planet);
            if (temp.name === action.payload.name) {
              temp.select = action.payload.position;
            }
            return temp;
          }),
        ],
      };
    case reset:
      return {
        loading: false,
        error: false,
        planets: [
          ...state.planets.map((planet) => {
            var temp = Object.assign({}, planet);
            temp.select = -1;
            return temp;
          }),
        ],
        vehicles: [
          ...state.vehicles.map((vehicle) => {
            var temp = Object.assign({}, vehicle);
            temp.select = -1;
            return temp;
          }),
        ],
      };
    default:
      return state;
  }
};
