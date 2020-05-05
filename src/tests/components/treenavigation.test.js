import React from "react";
import { shallow } from "enzyme";
import { TreeNavigation } from "../../components/TreeNaviation/TreeNavigation";

const metaData = [
  {
    id: "1",
    name: "serverpools",
    children: [
      {
        id: "2",
        name: "pools",
        children: [
          {
            id: "3",
            name: "LocalPool",
            data: [
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
              {
                fields: [
                  {
                    name: "id",
                    type: "string",
                    value: "local2",
                  },
                  {
                    name: "key",
                    type: "string",
                    value: "B",
                  },
                  {
                    name: "hostname",
                    type: "string",
                    value: "loalhost2",
                  },
                  {
                    name: "port",
                    type: "number",
                    value: "8092",
                  },
                ],
              },
            ],
          },
          {
            id: "4",
            name: "TestPool",
            data: [
              {
                fields: [
                  {
                    name: "id",
                    type: "string",
                    value: "test1",
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
                    value: "9010",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "5",
    name: "redisconfig",
    data: [
      {
        fields: [
          {
            name: "enabled",
            type: "string",
            value: "false",
          },
          {
            name: "mode",
            type: "string",
            value: "single",
          },
          {
            name: "hosts",
            type: "string",
            value: "localhost:6379",
          },
          {
            name: "cluster_name",
            type: "string",
            value: "abcCluster",
          },
          {
            name: "database",
            type: "number",
            value: "0",
          },
        ],
      },
    ],
  },
];
let nodeClickHandler;
describe("Test TreeNavigation", () => {
  beforeAll(() => {
    nodeClickHandler = jest.fn();
  });
  test("Should Render TreeNavigation", () => {
    const wrapper = shallow(
      <TreeNavigation
        treeItems={metaData}
        nodeClickHandler={nodeClickHandler}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
