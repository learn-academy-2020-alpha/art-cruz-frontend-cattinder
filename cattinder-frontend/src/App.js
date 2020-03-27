import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Row, Col, Button } from "reactstrap";
import "./App.css";
import cats from "./cats";

import Header from "./components/Header";
import CatIndex from "./pages/CatIndex";
import CatNew from "./pages/CatNew";
import NotFound from "./pages/NotFound";

class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      allCats: [] // We start with an empty array, so the component can finish rendering before we make our fetch request
    };
    this.getCats(); // Calls our fetch method when the component loads for the first time
  }

  componentWillMount() {
    this.getCats();
  }

  getCats = () => {
    // Making a fetch request to the url of our Rails app
    // fetch returns a promise
    fetch("http://3.135.226.175:8080/cats")
      .then(response => {
        //Make sure we get a successful response back
        if (response.status === 200) {
          // We need to convert the response to JSON
          // This also returns a promise
          return response.json();
        }
      })
      .then(catsArray => {
        //Finally, we can assign the cats to state, and they will render
        this.setState({ allCats: catsArray });
      });
  };
  
  
  createCat = (newcat) => {
    return fetch("http://3.135.226.175:8080/cats", {
      // converting an object to a string
    	body: JSON.stringify(newcat),
      // specify the info being sent in JSON and the info returning should be JSON
    	headers: {
    		"Content-Type": "application/json"
    	},
      // HTTP verb so the correct endpoint is invoked on the server
    	method: "POST"
    })
    .then((response) => {
      // if the response is good call the getCats method
      if(response.ok){
        return this.getCats()
      }
    })
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
            <Col
              style={{
                color: "white",
                display: "flex",
                justifyContent: "center"
              }}
              sm={1}
            >
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
            <Col
              style={{
                color: "white",
                display: "flex",
                justifyContent: "center"
              }}
              sm={1}
            >
              <Link to="/newcat">
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
            <Route exact path="/newcat" render={ (props) => <CatNew handleSubmit={ this.createCat } /> }/>
            <Route
              exact
              path="/"
              render={props => <CatIndex cats={this.state.allCats} />}
            />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
