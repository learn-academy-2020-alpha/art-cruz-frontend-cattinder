import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";
import "./App.css";
import cats from "./cats";

import Header from "./components/Header";
import CatIndex from "./pages/CatIndex";
import CatNew from "./pages/CatNew";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allCats: cats
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Router>
          <Row
            style={{
              backgroundColor: "rgb(55,55,55)",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Col style={{ color: "white" }} sm={2}>
              <Link to="/">
                <Button
                  style={{
                    fontFamily: "Poppins",
                    backgroundColor: "rgb(55,55,55)",
                    borderColor: "white",
                    borderRadius: "0px"
                  }}
                >
                  All Cats
                </Button>
              </Link>
            </Col>
            <Col style={{ color: "white" }} sm={2}>
              <Link to="/cat/:id">
                <Button
                  style={{
                    fontFamily: "Poppins",
                    backgroundColor: "rgb(55,55,55)",
                    borderColor: "white",
                    borderRadius: "0px"
                  }}
                >
                  New Cat
                </Button>
              </Link>
            </Col>
          </Row>

          <Switch>
            <Route exact path="/cat/:id" component={CatNew} />
            <Route
              exact
              path="/"
              render={props => <CatIndex cats={this.state.allCats} />}
            />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
