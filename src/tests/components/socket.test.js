import React from "react";
import { shallow } from "enzyme";
import { SocketTest } from "../../components/Socket/socketImplementation";

test("Should Render Socket", () => {
  const wrapper = shallow(<SocketTest />);
  expect(wrapper).toMatchSnapshot();
});