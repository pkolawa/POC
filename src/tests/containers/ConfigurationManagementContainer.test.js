import React from "react";
import { shallow } from "enzyme";
import {ConfigurationManagementContainer} from "../../containers/ConfigurationManagementContainer";

test("Should Render Configuration Mgmt Container", () => {
  const wrapper = shallow(<ConfigurationManagementContainer classes={{}}/>);
  expect(wrapper).toMatchSnapshot();
});