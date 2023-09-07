const initialState = {
  people: "",
  view: "",
  camp: "",
  weather: "",
};

function OptionReducer(currentState = initialState, action) {
  switch (action.type) {
    case "SET_PEOPLE":
      return {
        ...currentState,
        people: action.payload,
      };
    case "SET_VIEW":
      return {
        ...currentState,
        view: action.payload,
      };
    case "SET_CAMP":
      return {
        ...currentState,
        camp: action.payload,
      };
    case "SET_WEATHER":
      return {
        ...currentState,
        weather: action.payload,
      };
    default:
      return currentState;
  }
}

export default OptionReducer;
