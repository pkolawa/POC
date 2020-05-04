import React from "react";
import { shallow } from "enzyme";
import NotFound from "../../pages/404";

test("Should Render Configuration Page", () => {
  const wrapper = shallow(<NotFound/>);
  expect(wrapper).toMatchSnapshot();
});