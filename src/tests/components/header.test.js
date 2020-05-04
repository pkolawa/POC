import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/Header/header";

test("Should Render Header", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
