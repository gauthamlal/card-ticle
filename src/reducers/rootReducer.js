import { combineReducers } from "redux";

import cardReducer from "./cardReducer";
import hamburgerReducer from "./hamburgerReducer";
import visibilityFilterReducer from "./visibilityFilterReducer";
import layoutReducer from "./layoutReducer";

const rootReducer = combineReducers({
  card: cardReducer,
  hamburger: hamburgerReducer,
  visibilityFilter: visibilityFilterReducer,
  isList: layoutReducer
});

export default rootReducer;
