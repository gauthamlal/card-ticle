import {
  SHOW_ALL,
  SHOW_LIKED,
  SHOW_DISLIKED,
  SHOW_BOOKMARKED
} from "../actions/types";

import store from "../store";

// Checks whether the card passes filter
const checkCardPassesFilter = index => {
  const state = store.getState();
  switch (state.visibilityFilter) {
    case SHOW_ALL:
      return true;
    case SHOW_LIKED:
      return state.card.cardData.get(index).get("isLiked");
    case SHOW_DISLIKED:
      return state.card.cardData.get(index).get("isDisliked");
    case SHOW_BOOKMARKED:
      return state.card.cardData.get(index).get("isBookmarked");
    default:
      return false;
  }
};

export default checkCardPassesFilter;
