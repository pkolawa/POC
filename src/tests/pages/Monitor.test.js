import React from "react";
import { shallow } from "enzyme";
import Monitor from "../../pages/Monitor";

test("Should Render Configuration Page", () => {
  const wrapper = shallow(<Monitor/>);
  expect(wrapper).toMatchSnapshot();
});