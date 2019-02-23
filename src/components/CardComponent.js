import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  toggleLike,
  toggleDislike,
  toggleBookmark
} from "../actions/cardActions";
import "../styles/card.css";

class CardComponent extends Component {
  handleLikeClick = e => {
    console.log("inside handleLikeClick", this.props.index);
    this.props.toggleLike(this.props.index);
  };

  handleDislikeClick = e => {
    this.props.toggleDislike(this.props.index);
  };

  handleBookmarkClick = e => {
    this.props.toggleBookmark(this.props.index);
  };

  render() {
    const imageLink =
      this.props.index % 2 === 0 ? "nathan.jpg" : "daredevil.jpg";
    const data = this.props.card;
    return (
      <div className="card">
        <div className="card__img-holder">
          <img src={`/images/${imageLink}`} alt="nathan" />
        </div>
        {this.props.fromIndex ? (
          <h2>
            <Link to={`/story/${this.props.index}`}>{data.title}</Link>
          </h2>
        ) : (
          <h2>{data.title}</h2>
        )}
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
