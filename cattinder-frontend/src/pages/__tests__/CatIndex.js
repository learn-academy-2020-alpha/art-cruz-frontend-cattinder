import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatIndex from "../CatIndex";

let cats = [
  {
    id: 1,
    name: "Whirlpool",
    age: 3,
    image:
      "https://i2.pickpik.com/photos/370/957/85/cat-mieze-tiger-cat-funny-preview.jpg",
    interests: "knocking stuff off the countertop"
  },
  {
    id: 2,
    name: "BeanyWeeny",
    age: 1,
    image: "https://live.staticflickr.com/1677/25732632800_d97d5fe8d8.jpg",
    interests: "drinking out of the toilet"
  },
  {
    id: 3,
    name: "GorillaGlue",
    age: 3,
    image:
      "https://c1.wallpaperflare.com/preview/250/604/965/persian-cat-cat-felidae-domestic-cat.jpg",
    interests: "sleeping on keyboards"
  },
  {
    id: 4,
    name: "OrangeHaze",
    age: 1,
    image:
      "https://p2.piqsels.com/preview/96/218/548/cat-domestic-cat-mackerel-pet.jpg",
    interests: "watching romcoms"
  },
  {
    id: 5,
    name: "Smitty WerbenJagerManJensen",
    age: 1,
    image:
      "https://images.dailykos.com/images/295092/large/Taco-Cat-Spelled-Backwards-Is-Taco-Cat.-e1430184838220_1_.jpg?1472864097",
    interests: "Being Number 1"
  },
  {
    id: 6,
    name: "Richard",
    age: 6,
    image:
      "https://i.pinimg.com/originals/72/48/a1/7248a1d4a343b9e78930bf250a2db212.jpg",
    interests: "Being not suspicious at all"
  }
];

Enzyme.configure({ adapter: new Adapter() });

it("CatIndex renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CatIndex cats={cats} />, div);
});

it("CatNew renders h1", () => {
  const catIndex = mount(<CatIndex cats={cats} />);
  expect(catIndex.find("h1").text()).toEqual(" Find the cat of your dreams!");
});
