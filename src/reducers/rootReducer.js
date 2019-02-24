import { combineReducers } from "redux";

import cardReducer from "./cardReducer";
import hamburgerReducer from "./hamburgerReducer";
import visibilityFilterReducer from "./visibilityFilterReducer";

const rootReducer = combineReducers({
  card: cardReducer,
  hamburger: hamburgerReducer,
  visibilityFilter: visibilityFilterReducer
});

export default rootReducer;
