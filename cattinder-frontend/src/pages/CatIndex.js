import React, { Component } from "react";

class CatIndex extends Component {
  render() {
    let map = this.props.cats.map((cat, i) => {
      return (
        <ul>
          <li key={i}>
            {cat.name} | {cat.age} | {cat.interests}
          </li>
        </ul>
      );
    });
    return <>{map}</>;
  }
}

export default CatIndex;
