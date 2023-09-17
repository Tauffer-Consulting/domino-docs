/* eslint-disable import/no-webpack-loader-syntax */
import React, { type FC } from "react";

import CodeBlock from "@theme/CodeBlock";
import "reactflow/dist/style.css";

// @ts-expect-error
import JumbotronSource from "!!raw-loader!./example.py";

import ReactFlow, { Background } from "reactflow";
import type { Node } from "reactflow";
import FlowBlock from "./FlowBlock";

const nodes: Node[] = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "1" },
  },
  {
    id: "2",
    position: { x: 0, y: 170 },
    style: { padding: 0, border: "1px solid grey" },
    data: {
      label: (
        <FlowBlock
          title="country stats"
          description="bla bla bla"
          time="11:30"
        />
      ),
    },
  },
  {
    id: "3",
    position: { x: 300, y: 300 },
    style: { padding: 0, border: "1px solid grey" },
    type: "output",
    data: {
      label: (
        <FlowBlock
          title="country stats"
          description="Lorem ipsum, dolor sit amet consectetur"
          time="12:30"
        />
      ),
    },
  },
];

const edges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },
  { id: "e2-3", source: "2", target: "3", animated: true },
];

const CodeDiagram: FC = () => {
  return (
    <div className="assets">
      <div className="flex flex-col md:flex-row p-4 bg-gray-100 justify-between">
        <CodeBlock className="!mb-0 mr-10" language="py">
          {JumbotronSource}
        </CodeBlock>
        <div className="w-full mr-10 rounded-md bg-gray-100">
          <ReactFlow
            fitView
            nodes={nodes}
            edges={edges}
            proOptions={{ hideAttribution: true }}
            zoomOnScroll={false}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeDiagram;
