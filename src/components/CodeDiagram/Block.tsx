import React from "react";
import styles from "./index.module.css";
import clsx from "clsx";

export const Block = () => {
  return (
    <div
      className={clsx(
        "w-40 h-16 bg-gray-100 border-gray-700 rounded-md shadow-lg",
        styles.d1,
      )}
    >
      <span className="flex flex-col justify-center items-start p-1 h-full text-black text-sm">
        <span className="font-mono">country_stats</span>
        <span className="">lorem ipsum</span>
      </span>
    </div>
  );
};
