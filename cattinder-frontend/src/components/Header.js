import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import icon from '../assets/cattinder.png'
import icon2 from '../assets/cattinder2.png'

class Header extends Component {
  render() {
    return (
      <>
        <Row>
          <Col>
            <div
              style={{
                height: "20vh",
                backgroundColor: "#f0768b",
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
                src={icon2}/>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default Header;
