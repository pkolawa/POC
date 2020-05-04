import React from "react";
import { shallow } from "enzyme";
import Runtime from "../../pages/Runtime";

test("Should Render Configuration Page", () => {
  const wrapper = shallow(<Runtime/>);
  expect(wrapper).toMatchSnapshot();
});