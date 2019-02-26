import { LIKE_TOGGLE, DISLIKE_TOGGLE, BOOKMARK_TOGGLE } from "./types";

// Toggle the like of a card
export const toggleLike = index => {
  return {
    type: LIKE_TOGGLE,
    index
  };
};

// Toggle the dislike of a card
export const toggleDislike = index => {
  return {
    type: DISLIKE_TOGGLE,
    index
  };
};

// Toggle the bookmark of a card
export const toggleBookmark = index => {
  return {
    type: BOOKMARK_TOGGLE,
    index
  };
};
