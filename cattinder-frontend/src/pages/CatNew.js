import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Form, Button, Input, Label, Control, Group } from "reactstrap";

class CatNew extends Component {
  render() {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Amatic SC",
            fontWeight: "bold"
          }}
        >
          Is your cat lonely?
        </h1>
        <h4 style={{ textAlign: "center", fontFamily: "Amatic SC" }}>
          Register your cat to hookup with local hotties/hunkies
        </h4>
        <Container>
          <Row>
            <Col style={{ display: "flex", justifyContent: "center" }} sm={12}>
              <Form>
                <p>
                  <Label for="catname">Cat Name:</Label>
                  <Input
                    type="text"
                    id="catname"
                    placeholder="Cat Name"
                    style={{ width: "20vw" }}
                  />
                </p>
                <p>
                  <Label for="catage">Cat Age:</Label>
                  <Input
                    type="select"
                    id="catage"
                    placeholder="Cat Name"
                    style={{ width: "20vw" }}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                  </Input>
                </p>
                <p>
                  <Label for="catinfo">Cat Interests:</Label>
                  <Input
                    type="textarea"
                    id="catinfo"
                    style={{ width: "20vw", height: "15vh" }}
                  />
                </p>
              </Form>
            </Col>
          </Row>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Button>Submit</Button>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CatNew;
