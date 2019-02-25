import { HAMBURGER_TOGGLE } from "../actions/types";

const initialState = {
  isOpen: false
};

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
