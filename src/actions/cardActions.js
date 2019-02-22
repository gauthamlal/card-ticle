import { LIKE_TOGGLE, DISLIKE_TOGGLE, BOOKMARK_TOGGLE } from "./types";

// Toggle the like of a card
const toggleLike = id => dispatch => {
  return {
    type: LIKE_TOGGLE,
    id
  };
};
