import React from "react";
import { shallow as enzymeShallow} from "enzyme";
import { createShallow } from "@material-ui/core/test-utils";
import { DashboardContainer } from "../../containers/DashboardContainer";

let shallow;

beforeAll(() => {
  shallow = createShallow({ dive: true });
});

test("Should Render Dashboard Container", () => {
  const wrapper = shallow(<DashboardContainer />);
  expect(wrapper).toMatchSnapshot();
});

test("Should Render Dashboard Container with Dive", () => {
  const wrapper = enzymeShallow(<DashboardContainer />);
  const wrappedComponents = wrapper.dive();
  expect(wrappedComponents).toMatchSnapshot();
});
