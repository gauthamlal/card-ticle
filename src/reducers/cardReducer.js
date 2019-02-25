import cardData from "../data/dummyData";
import { LIKE_TOGGLE, DISLIKE_TOGGLE, BOOKMARK_TOGGLE } from "../actions/types";

const initialState = {
  cardData
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_TOGGLE:
      return {
        cardData: state.cardData.updateIn([action.index], item =>
          item.set("isLiked", !item.get("isLiked")).set("isDisliked", false)
        )
      };

    // OLDER METHOD: WITHOUT IMMUTABLE.JS
    // return {
    //   cardData: [
    //     ...state.cardData.slice(0, action.index),
    //     {
    //       ...state.cardData.get(action.index),
    //       isLiked: !state.cardData.get(action.index).get("isLiked"),
    //       isDisliked: false
    //     },
    //     ...state.cardData.slice(action.index + 1)
    //   ]
    // };
    case DISLIKE_TOGGLE:
      return {
        cardData: state.cardData.updateIn([action.index], item =>
          item.set("isLiked", false).set("isDisliked", !item.get("isDisliked"))
        )
      };
    case BOOKMARK_TOGGLE:
      return {
        cardData: state.cardData.map(card => {
          if (card.get("id") === action.index) {
            return card.update("isBookmarked", isBookmarked => !isBookmarked);
          } else {
            return card;
          }
        })
      };
    default:
      return state;
  }
};

export default cardReducer;
