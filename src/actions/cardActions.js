import {
  LIKE_TOGGLE,
  DISLIKE_TOGGLE,
  BOOKMARK_TOGGLE,
  LIKE_INCREMENTER,
  DISLIKE_INCREMENTER
} from "./types";

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

// Increment the like of a card
export const incrementLike = index => {
  return {
    type: LIKE_INCREMENTER,
    index
  };
};

// Increment the dislike of a card
export const incrementDislike = index => {
  return {
    type: DISLIKE_INCREMENTER,
    index
  };
};
