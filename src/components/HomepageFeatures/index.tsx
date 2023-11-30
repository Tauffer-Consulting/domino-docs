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
  }
];

function Feature({ title, Svg, description, isImageRight, isShiftRight }: { isImageRight: boolean, isShiftRight: boolean } & FeatureItem) {
  const rowStyle = {
    display: 'flex',
    justifyContent: 'center', // This centers the content
    alignItems: 'center',
    marginBottom: '3rem',
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

      <div className="col col--3">
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