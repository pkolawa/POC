import React from "react";
import { shallow } from "enzyme";
import Title from "../../components/Title/title";
test("Should Render title", () => {
  const wrapper = shallow(<Title title={"App Console"}/>);
  expect(wrapper).toMatchSnapshot();
});