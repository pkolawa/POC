import React from "react";
import { shallow } from "enzyme";
import {MonitoringSystemContainer} from "../../containers/MonitoringSystemContainer";

test("Should Render Monitor Mgmt Container", () => {
  const wrapper = shallow(<MonitoringSystemContainer classes={{}}/>);
  expect(wrapper).toMatchSnapshot();
});