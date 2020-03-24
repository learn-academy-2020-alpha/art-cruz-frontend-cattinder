import React, { Component } from "react";
import { Row, Col } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <div
              style={{
                height: "20vh",
                backgroundColor: "rgba(0,0,0,0.3)"
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "50px",
                  fontFamily: "Amatic SC",
                  position: "relative",
                  marginTop: "1px"
                }}
              >
                Cat Tinder
              </h1>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default Header;
