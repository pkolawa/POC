import React from "react";
import { shallow } from "enzyme";
import { ConfigurationManagementContainer } from "../../containers/ConfigurationManagementContainer";

test("Should Render Configuration Mgmt Container", () => {
  window.fetch = jest.fn(() => Promise.resolve());
  const wrapper = shallow(<ConfigurationManagementContainer classes={{}} />);
  expect(wrapper).toMatchSnapshot();
});
