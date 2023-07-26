import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Visual Workflows for Everyone',
    Svg: require('@site/static/img/undraw_workflow_builder.svg').default,
    description: (
      <>
        Domino brings an intuitive Graphical User Interface that facilitates creating,
        editing and monitoring any type of Workflow, from data processing to machine learning.
      </>
    ),
  },
  {
    title: 'Reusability, Reproducibility and Collaboration',
    Svg: require('@site/static/img/undraw_pieces_sharing.svg').default,
    description: (
      <>
        Domino proposes a standard way of writing and publishing functional Pieces,
        which follows good practices for distribution, documentation and data modeling.
      </>
    ),
  },
  {
    title: 'Powered by Apache Airflow',
    Svg: require('@site/static/img/apache-airflow-logo.svg').default,
    description: (
      <>
        Domino is powered by Apache Airflow for top-tier workflows scheduling and monitoring.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
