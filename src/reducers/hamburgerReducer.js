import { HAMBURGER_TOGGLE } from "../actions/types";

const initialState = {
  isOpen: false
};

// Changes the isOpen state value to Toggle the menu
const hamburgerReducers = (state = initialState, action) => {
  switch (action.type) {
    case HAMBURGER_TOGGLE:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    default:
      return state;
  }
};

export default hamburgerReducers;
