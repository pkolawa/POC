import React from "react";
import { shallow } from "enzyme";
import { getClasses } from "@material-ui/core/test-utils";
import { Dashboard } from "../../components/DashboardCardList/dashboardCardList";

test("Should Render Dashboard Card List", () => {
  const wrapper = shallow(<Dashboard classes={getClasses}/>);
  expect(wrapper).toMatchSnapshot();
});
