import {
  SHOW_ALL,
  SHOW_LIKED,
  SHOW_DISLIKED,
  SHOW_BOOKMARKED
} from "../actions/types";

const initialState = SHOW_ALL;

// Sets the current filter selected from menu
const visibilityFilterReducder = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ALL:
      return SHOW_ALL;
    case SHOW_LIKED:
      return SHOW_LIKED;
    case SHOW_DISLIKED:
      return SHOW_DISLIKED;
    case SHOW_BOOKMARKED:
      return SHOW_BOOKMARKED;
    default:
      return state;
  }
};

export default visibilityFilterReducder;
