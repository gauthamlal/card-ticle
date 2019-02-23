import { combineReducers } from "redux";

import cardReducer from "./cardReducer";
import hamburgerReducer from "./hamburgerReducer";

const rootReducer = combineReducers({
  card: cardReducer,
  hamburger: hamburgerReducer
});

export default rootReducer;
