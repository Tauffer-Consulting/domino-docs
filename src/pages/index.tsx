import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Jumbotron from "../components/Jumbotron/Jumbotron";
// import CodeDiagram from "../components/CodeDiagram/CodeDiagram";
import HomepageFeatures from "../components/HomepageFeatures";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Build amazing ideas, piece by piece"
    >
      <Jumbotron />
      {/* <CodeDiagram /> */}
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
