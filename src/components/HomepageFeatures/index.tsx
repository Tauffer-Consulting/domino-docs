import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

interface FeatureItem {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
}

const FeatureList: FeatureItem[] = [
  {
    title: "Visual Workflows for Everyone",
    Svg: require("@site/static/img/undraw_workflow_builder.svg").default,
    description: (
      <>
        Domino brings an intuitive Graphical User Interface that facilitates
        creating, editing and monitoring any type of Workflow, from data
        processing to machine learning.
      </>
    ),
  },
  {
    title: "Focus on Reusability and Reproducibility",
    Svg: require("@site/static/img/undraw_pieces_sharing.svg").default,
    description: (
      <>
        Domino proposes a standard way of writing and publishing functional
        Pieces, which follows good practices for distribution, documentation and
        data modeling.
      </>
    ),
  },
  {
    title: "Rich real-time monitoring",
    Svg: require("@site/static/img/undraw_workflow_visualizer.svg").default,
    description: (
      <>
        Experience a clean and user-friendly interface for monitoring Workflows
        results, including logs and richer reports with images and tables.
      </>
    ),
  },
  {
    title: "Open source",
    Svg: require("@site/static/img/undraw_open_source.svg").default,
    description: (
      <>
        Domino is an Open Source project, which means that anyone can contribute
        to its development and use it for free.
      </>
    ),
  },
  {
    title: "Powered by Apache Airflow",
    Svg: require("@site/static/img/apache-airflow-logo.svg").default,
    description: (
      <>
        Domino is powered by Apache Airflow for top-tier workflows scheduling
        and monitoring.
      </>
    ),
  },
  {
    title: "Kubernetes native",
    Svg: require("@site/static/img/undraw_server_cluster.svg").default,
    description: (
      <>
        Domino is designed to be Kubernetes native, with every task running in a
        separate pod. This guarantees the scalability and resilience of your
        workflows.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4 flex flex-col items-center pb-3")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className="font-bold text-xl pb-3">{title}</h3>
        <p className="mb-5">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
