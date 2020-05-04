import React from "react";
import { shallow } from "enzyme";
import { SocketTest } from "../../components/Socket/socketImplementation";
import { Card } from "../../components/Socket/cardComponent";

test("Should Render Socket", () => {
  const wrapper = shallow(<SocketTest/>);
  expect(wrapper).toMatchSnapshot();
});

test("Should Render Socket Card", () => {
  const wrapper = shallow(<Card classes={{}}/>);
  expect(wrapper).toMatchSnapshot();
});
