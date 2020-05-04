import React from "react";
import { shallow } from "enzyme";
import Login from "../../pages/Login";

test("Should Render Configuration Page", () => {
  const wrapper = shallow(<Login/>);
  expect(wrapper).toMatchSnapshot();
});