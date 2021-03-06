import cardData from "../data/dummyData";
import {
  LIKE_TOGGLE,
  DISLIKE_TOGGLE,
  BOOKMARK_TOGGLE,
  LIKE_INCREMENTER,
  DISLIKE_INCREMENTER
} from "../actions/types";

const initialState = {
  cardData
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    // When like button is clicked toggle like value and sets dislike to false
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
      // When dislike button is clicked toggle dislike value and sets like to false
      return {
        cardData: state.cardData.updateIn([action.index], item =>
          item.set("isLiked", false).set("isDisliked", !item.get("isDisliked"))
        )
      };
    case BOOKMARK_TOGGLE:
      // When bookmark is clicked toggle bookmark value
      return {
        cardData: state.cardData.map(card => {
          if (card.get("id") === action.index) {
            return card.update("isBookmarked", isBookmarked => !isBookmarked);
          } else {
            return card;
          }
        })
      };
    case LIKE_INCREMENTER:
      return {
        cardData: state.cardData.updateIn([action.index], item =>
          item.set("likeCount", item.get("likeCount") + 1).set("isLiked", true)
        )
      };
    case DISLIKE_INCREMENTER:
      return {
        cardData: state.cardData.updateIn([action.index], item =>
          item
            .set("dislikeCount", item.get("dislikeCount") + 1)
            .set("isDisliked", true)
        )
      };
    default:
      return state;
  }
};

export default cardReducer;
