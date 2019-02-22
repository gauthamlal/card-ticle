import { LIKE_TOGGLE, DISLIKE_TOGGLE, BOOKMARK_TOGGLE } from "./types";

// Toggle the like of a card
export const toggleLike = index => {
  console.log(index);

  console.log("inside toggleLike", { type: LIKE_TOGGLE, index });

  return {
    type: LIKE_TOGGLE,
    index
  };
};

// Toggle the like of a card
export const toggleDislike = index => {
  console.log("inside toggleLike", { type: DISLIKE_TOGGLE, index });

  return {
    type: DISLIKE_TOGGLE,
    index
  };
};

// Toggle the like of a card
export const toggleBookmark = index => {
  console.log("inside toggleLike", { type: BOOKMARK_TOGGLE, index });

  return {
    type: BOOKMARK_TOGGLE,
    index
  };
};
