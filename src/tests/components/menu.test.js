import React from "react";
import { createShallow, getClasses } from "@material-ui/core/test-utils";
import Menu from "../../components/Menu/menu";

let shallow;

beforeAll(() => {
  shallow = createShallow();
});

test("Should Render Menu", () => {
  const wrapper = shallow(<Menu />);
  expect(wrapper).toMatchSnapshot();
});
