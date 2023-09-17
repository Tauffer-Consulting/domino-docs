import clsx from "clsx";
import React from "react";

import Link from "@docusaurus/Link";
import styles from "./index.module.css";

function Jumbotron() {
  return (
    <header className="bg-gray-200 text-black flex flex-col items-center justify-center pt-8 pb-8 text-center">
      <div className="header text-4xl sm:text-5xl mt-12 md:mt-2 md:text-6xl p-4 pb-16">
        <div
          className={clsx(
            styles.pieceOne,
            "bg-white h-40 w-20 rounded-md p-2 flex flex-col justify-between opacity-10 blur-sm",
          )}
        >
          <div className="relative">
            <div className="bg-gray-800 h-4 w-4 rounded-full absolute right-0" />
            <div className="bg-gray-800 h-4 w-4 rounded-full absolute top-12" />
          </div>
          <hr className="bg-gray-800 h-0.5 w-full" />
          <div className="relative">
            <div className="bg-gray-800 h-4 w-4 rounded-full absolute bottom-6 right-6" />
          </div>
        </div>

        <p className="pb-4">Build amazing ideas</p>
        <div className="flex flex-row justify-center gap-4">
          <div className={styles.domino1}>
            <span>piece</span>
          </div>
          <div className={styles.domino2}>
            <span className="">by</span>
          </div>
          <div className={styles.domino3}>
            <span className="">piece</span>
          </div>
        </div>
      </div>

      <Link
        className="text-lg bg-slate-900 hover:bg-slate-800 py-4 px-6 rounded-md font-bold text-slate-100  transition duration-200 ease-in-out hover:no-underline hover:text-slate-100"
        to="/docs/intro"
      >
        Get Started with Domino
      </Link>
    </header>
  );
}

export default Jumbotron;
