import cardData from "../data/dummyData";
import { LIKE_TOGGLE, DISLIKE_TOGGLE, BOOKMARK_TOGGLE } from "../actions/types";

const initialState = {
  cardData
};

const cardReducer = (state = initialState, action) => {
  console.log("inside reducer", action);
  switch (action.type) {
    case LIKE_TOGGLE:
      // return {};
      return {
        cardData: [
          ...state.cardData.slice(0, action.index),
          {
            ...state.cardData[action.index],
            isLiked: !state.cardData[action.index].isLiked,
            isDisliked: false
          },
          ...state.cardData.slice(action.index + 1)
        ]
      };
    case DISLIKE_TOGGLE:
      return {
        cardData: [
          ...state.cardData.slice(0, action.index),
          {
            ...state.cardData[action.index],
            isDisliked: !state.cardData[action.index].isDisliked,
            isLiked: false
          },
          ...state.cardData.slice(action.index + 1)
        ]
      };
    case BOOKMARK_TOGGLE:
      return {
        cardData: [
          ...state.cardData.slice(0, action.index),
          {
            ...state.cardData[action.index],
            isBookmarked: !state.cardData[action.index].isBookmarked
          },
          ...state.cardData.slice(action.index + 1)
        ]
      };
    default:
      return state;
  }
};

export default cardReducer;
