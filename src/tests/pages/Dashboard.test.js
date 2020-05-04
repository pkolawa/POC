import React from "react";
import { shallow } from "enzyme";
import Dashboard from "../../pages/Dashboard";

test("Should Render Dashboard Page", () => {
  const wrapper = shallow(<Dashboard/>);
  expect(wrapper).toMatchSnapshot();
});