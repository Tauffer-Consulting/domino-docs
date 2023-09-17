import React from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

// import HomepageFeatures from "../components/HomepageFeatures";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import CodeDiagram from "../components/CodeDiagram/CodeDiagram";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Build amazing ideas, piece by piece"
    >
      <Jumbotron />
      <CodeDiagram />
      <main>{/* <HomepageFeatures /> */}</main>
    </Layout>
  );
}
