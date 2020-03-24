import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge,
  Row,
  Col
} from "reactstrap";

class CatIndex extends Component {
  render() {
    let map = this.props.cats.map((cat, i) => {
      return (
        <>
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <Card style={{ width: "60vh" }}>
                <CardImg top width="100%" src={cat.image} alt="Card image cap" />
                <CardBody>
                  <CardTitle
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      fontFamily: "Poppins"
                    }}
                  >
                    {cat.name}
                    <Badge style={{ marginLeft: "1vw" }}>Age: {cat.age}</Badge>
                  </CardTitle>
                  <CardText>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        fontFamily: "Poppins"
                      }}
                    >
                      Interests:
                    </p>
                    {cat.interests}
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </>
      );
    });
    return <>{map}</>;
  }
}

export default CatIndex;
