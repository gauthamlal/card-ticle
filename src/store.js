import { createStore, compose } from "redux";

import cardReducer from "./reducers/cardReducer";

const store = createStore(
  cardReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
