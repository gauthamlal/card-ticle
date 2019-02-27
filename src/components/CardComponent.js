import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  toggleLike,
  toggleDislike,
  toggleBookmark
} from "../actions/cardActions";
import shortenText from "../utils/shortenText";

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
    const imageLink =
      this.props.index % 2 === 0 ? "nathan.jpg" : "daredevil.jpg";
    const data = this.props.card;

    const bookmarkClassName = data.get("isBookmarked")
      ? "fas fa-bookmark selected"
      : "far fa-bookmark";

    return (
      <div className="card">
        <div className="card__bookmark-holder">
          <i className={bookmarkClassName} onClick={this.handleBookmarkClick} />
        </div>
        <div className="card__img-holder">
          <img src={`/images/${imageLink}`} alt="nathan" />
        </div>
        {this.props.fromIndex ? (
          <h2 className="card__title">
            <Link
              className="card__title-link"
              to={`/story/${this.props.index}`}
            >
              {data.get("title")}
            </Link>
          </h2>
        ) : (
          <h2 className="card__title">{data.get("title")}</h2>
        )}
        <article className="card__description">
          <p>
            {this.props.fromIndex
              ? shortenText(data.get("description"))
              : data.get("description")}
          </p>
        </article>
        <div className="card__buttons">
          <button className="card__like-button" onClick={this.handleLikeClick}>
            <i className="far fa-thumbs-up like" />
            {data.get("isLiked") ? "Liked" : "Like"}
          </button>
          <button
            className="card__dislike-button"
            onClick={this.handleDislikeClick}
          >
            <i className="far fa-thumbs-down" />
            {data.get("isDisliked") ? "Disliked" : "Dislike"}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  card: state.card.cardData.get(ownProps.index)
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
