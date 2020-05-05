import React from "react";
import { shallow } from "enzyme";
import { FormComponent } from "../../components/FormComponent/FormComponent";
const formData = [
  {
    fields: [
      {
        name: "id",
        type: "string",
        value: "local1",
      },
      {
        name: "key",
        type: "string",
        value: "A",
      },
      {
        name: "hostname",
        type: "string",
        value: "loalhost1",
      },
      {
        name: "port",
        type: "number",
        value: "8091",
      },
    ],
  },
];
test("Should Render FormComponent", () => {
  const wrapper = shallow(<FormComponent pageData={formData}/>);
  expect(wrapper).toMatchSnapshot();
});
