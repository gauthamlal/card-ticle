import React, { Component } from "react";
import { connect } from "react-redux";

import {
  toggleLike,
  toggleDislike,
  toggleBookmark
} from "../actions/cardActions";
import "../styles/card.css";

class CardComponent extends Component {
  handleLikeClick = e => {
    this.props.toggleLike(this.props.index);
  };

  handleDislikeClick = e => {
    this.props.toggleDislike(this.props.index);
  };

  handleBookmarkClick = e => {
    this.props.toggleBookmark(this.props.index);
  };

  render() {
    const data = this.props.card;
    return (
      <div className="card">
        <h2>{data.title}</h2>
        <article>
          <p>{data.description}</p>
        </article>
        <button onClick={this.handleLikeClick}>
          {data.isLiked ? "Liked" : "Like"}
        </button>
        <button onClick={this.handleDislikeClick}>
          {data.isDisliked ? "Disliked" : "Dislike"}
        </button>
        <button onClick={this.handleBookmarkClick}>
          {data.isBookmarked ? "Bookmarked" : "Bookmark"}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  card: state.cardData[ownProps.index]
});

const mapDispatchToProps = dispatch => ({
  toggleLike: index => dispatch(toggleLike(index)),
  toggleDislike: index => dispatch(toggleDislike(index)),
  toggleBookmark: index => dispatch(toggleBookmark(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardComponent);
