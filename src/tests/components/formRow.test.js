import React from "react";
import { shallow } from "enzyme";
import { MqFormRow } from "../../components/FormRow/FormRow";
test("Should Render FormRow", () => {
  const mockFn = jest.fn();
  const wrapper = shallow(<MqFormRow children={mockFn}/>);
  expect(wrapper).toMatchSnapshot();
});