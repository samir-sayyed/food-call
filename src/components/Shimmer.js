import React from "react";
import { ShimmerPostList } from "react-shimmer-effects";
import { Component } from "react";

class Shimmer extends Component {
  render() {
    return (
      <div data-testid="shimmer" className="shimmer-container">
        <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />;
      </div>
    );
  }
}
export default Shimmer;
