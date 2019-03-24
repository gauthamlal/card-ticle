import { CHANGE_LAYOUT } from "../actions/types";

const initialState = true;

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LAYOUT:
      return !state;
    default:
      return state;
  }
};

export default layoutReducer;
