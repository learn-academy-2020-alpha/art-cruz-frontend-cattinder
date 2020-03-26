import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row } from "reactstrap";

class NotFound extends Component {
  render() {
    return (
      <div>
        <Row>
          <img
            src="https://assets3.thrillist.com/v1/image/2531557/size/tmg-article_tall.jpg"
            alt="Broken"
            style={{
              margin: "0 auto"
            }}
          />
        </Row>
        <Row>
          <h1 style={{ margin: "0 auto" }}>Page Not Found</h1>
        </Row>
        <Row>
          <Link style={{ margin: "0 auto" }} to="/">
            Go Home
          </Link>
        </Row>
      </div>
    );
  }
}

export default NotFound;
