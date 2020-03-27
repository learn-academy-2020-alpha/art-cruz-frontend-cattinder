import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import icon from '../assets/cattinder.png'

class Header extends Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <div
              style={{
                height: "20vh",
                backgroundColor: "rgba(0,0,0,0.3)",
                display:"flex",
                justifyContent:"center"
              }}
            >
              <img
                style={{
                  textAlign: "center",
                  color: "white",
                  width:"8vw",
                  height:"20vh",
                  marginTop: "1px"
                }}
                src={icon}/>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default Header;
