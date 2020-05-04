import React from "react";
import { shallow } from "enzyme";
import {RuntimeManagementContainer} from "../../containers/RuntimeManagementContainer";

test("Should Render Runtime Mgmt Container", () => {
  const wrapper = shallow(<RuntimeManagementContainer classes={{}}/>);
  expect(wrapper).toMatchSnapshot();
});