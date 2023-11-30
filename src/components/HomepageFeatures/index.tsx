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
    title: 'Focus on Reusability and Reproducibility',
    Svg: require('@site/static/img/undraw_pieces_sharing.svg').default,
    description: (
      <>
        Domino proposes a standard way of writing and publishing functional Pieces,
        which follows good practices for distribution, documentation and data modeling.
      </>
    ),
  },
  {
    title: 'Rich real-time monitoring',
    Svg: require('@site/static/img/undraw_workflow_visualizer.svg').default,
    description: (
      <>
        Experience a clean and user-friendly interface for monitoring Workflows results, including logs and richer reports with images and tables.
      </>
    ),
  },
  {
    title: 'Open source',
    Svg: require('@site/static/img/undraw_open_source.svg').default,
    description: (
      <>
        Domino is an Open Source project, which means that anyone can contribute to its development and use it for free.
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
  {
    title: 'Kubernetes native',
    Svg: require('@site/static/img/undraw_server_cluster.svg').default,
    description: (
      <>
        Domino is designed to be Kubernetes native, with every task running in a separate pod. This guarantees the scalability and resilience of your workflows.
      </>
    ),
  },
];

function Feature({ title, Svg, description, isImageRight, isShiftRight }: { isImageRight: boolean, isShiftRight: boolean } & FeatureItem) {
  const rowStyle = {
    display: 'flex',
    justifyContent: 'center', // This centers the content
    alignItems: 'center',
    marginBottom: '2rem',
    marginLeft: isShiftRight ? '10rem' : '0',
    marginRight: isShiftRight ? '0' : '10rem'
  };

  return (
    <div className="row" style={rowStyle}>
      {isImageRight ? (
        <div className="col col--5" style={{ paddingRight: '1rem' }}>
          <div className="text--center padding-horiz--md">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      ) : null}

      <div className="col col--2">
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </div>

      {!isImageRight ? (
        <div className="col col--5" style={{ paddingLeft: '1rem' }}>
          <div className="text--center padding-horiz--md">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} isImageRight={idx % 2 === 0} isShiftRight={idx % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}