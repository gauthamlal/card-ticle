import { SHOW_ALL, SHOW_LIKED, SHOW_DISLIKED, SHOW_BOOKMARKED } from "./types";

export const showAll = () => ({
  type: SHOW_ALL
});

export const showLiked = () => ({
  type: SHOW_LIKED
});

export const showDisliked = () => ({
  type: SHOW_DISLIKED
});

export const showBookmarked = () => ({
  type: SHOW_BOOKMARKED
});
