import React from "react";
import { shallow } from "enzyme";
import Configuration from "../../pages/Configuration";

test("Should Render Configuration Page", () => {
  const wrapper = shallow(<Configuration/>);
  expect(wrapper).toMatchSnapshot();
});