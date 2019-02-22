import React, { Component } from "react";

import "../styles/card.css";

export default class CardComponent extends Component {
  render() {
    const data = this.props.card;
    return (
      <div className="card">
        <h2>{data.title}</h2>
        <article>
          <p>{data.description}</p>
        </article>
      </div>
    );
  }
}
