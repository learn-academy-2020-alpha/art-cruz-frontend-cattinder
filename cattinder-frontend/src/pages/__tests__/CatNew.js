import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatNew from "../CatNew";

Enzyme.configure({ adapter: new Adapter() });

it("CatNew renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CatNew />, div);
});
it("CatNew renders h1", () => {
  const catIndex = mount(<CatNew />);
  expect(catIndex.find("h1").text()).toEqual("Is your cat lonely?");
});
it("CatNew renders h4", () => {
  const catIndex = mount(<CatNew />);
  expect(catIndex.find("h4").text()).toEqual(
    "Register your cat to hookup with local hotties/hunkies"
  );
});
