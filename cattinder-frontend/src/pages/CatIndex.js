import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Badge,
  Row,
  Col
} from "reactstrap";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import meow from '../assets/Meow.mp3'

class CatIndex extends Component {
  checkI(i) {
    if (i === this.props.cats.length - 1) {
      i = 0;
    } else {
      i += 1;
    }
    return i;
  }
  
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.volume = 0.1
    audioEl.play()
  } 

  render() {
    let map = this.props.cats.map((cat, i) => {
      return (
        <ParallaxLayer offset={i} speed={0.5}>
          <div key={i}>
            <Row>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <Card style={{ width: "60vh" }}>
                  <CardImg
                    top
                    width="100%"
                    src={cat.image}
                    alt="Card image cap"
                    onClick={() => {
                      this.parallax.scrollTo(this.checkI(i));
                      this.playAudio();
                    }}
                  />
                  <audio className="audio-element">
                    <source src={meow}></source>
                  </audio> 
                  <CardBody>
                    <CardTitle
                      style={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        fontFamily: "Poppins"
                      }}
                    >
                      {cat.name}
                      <Badge style={{ marginLeft: "1vw" }}>
                        Age: {cat.age}
                      </Badge>
                    </CardTitle>
                    <CardText
                      style={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        fontFamily: "Poppins"
                      }}
                    >
                      Interests:
                    </CardText>
                    <CardText>{cat.interests}</CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <br />
          </div>
        </ParallaxLayer>
      );
    });
    return (
      <>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "Amatic SC"
          }}
        >
          {" "}
          Find the cat of your dreams!
        </h1>
        <Parallax
          pages={this.props.cats.length}
          scrolling={false}
          horizontal
          ref={ref => (this.parallax = ref)}
        >
          {map}
        </Parallax>
      </>
    );
  }
}

export default CatIndex;
