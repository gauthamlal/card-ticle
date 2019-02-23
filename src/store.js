import { createStore } from "redux";

// import cardReducer from "./reducers/cardReducer";
import rootReducer from "./reducers/rootReducer";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
