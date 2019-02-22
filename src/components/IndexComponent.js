import React, { Component } from "react";

import CardComponent from "./CardComponent";
import cardData from "../data/dummyData";

export default class IndexComponent extends Component {
  render() {
    const cardStack = cardData.map((data, i) => (
      <CardComponent key={data.id} card={data} />
    ));

    return <div>{cardStack}</div>;
  }
}
