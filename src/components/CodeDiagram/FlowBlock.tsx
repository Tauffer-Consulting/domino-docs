import React from "react";

interface Props {
  title: string;
  description: string;
  time: string;
}

const FlowBlock = ({ title, description, time }: Props) => {
  return (
    <div>
      <div className="bg-purple-300 font-mono">{title}</div>
      <div className="bg-white text-center py-4">{description}</div>
      <div className="bg-green-100 text-green-700 flex justify-between px-2">
        <span>produce</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default FlowBlock;
