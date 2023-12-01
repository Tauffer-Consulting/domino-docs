import React from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imageUrl: string; // Use a common imageUrl for both PNG and SVG
  description: JSX.Element;
  url: string; // Add a URL property for the link
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Visual Workflows for Everyone',
    imageUrl: require('@site/static/img/landing/visual-workflows-transparent.png').default,
    description: (
      <>
        Domino brings an intuitive Graphical User Interface that facilitates creating,
        editing and monitoring any type of Workflow, from data processing to machine learning.
      </>
    ),
    url: '/docs/domino_components/domino_components_gui',
  },
  {
    title: 'Focus on Reusability and Reproducibility',
    imageUrl: require('@site/static/img/landing/pieces-sharing-transparent.png').default,
    description: (
      <>
        Domino brings a standard for writing and publishing functional Pieces
        which makes them reusable and reproducible, and can be easily shared with the community.
      </>
    ),
    url: '/docs/pieces',
  },
  {
    title: 'Rich real-time monitoring',
    imageUrl: require('@site/static/img/landing/workflow-monitoring-transparent.png').default,
    description: (
      <>
        Experience a clean and user-friendly interface for monitoring workflows results,
        including logs and rich reports with images, interactive graphics, and tables.
      </>
    ),
    url: '/docs/domino_components/domino_components_gui',
  },
];

function Feature({ title, imageUrl, description, isImageRight, isShiftRight, url }: { isImageRight: boolean, isShiftRight: boolean, url: string } & FeatureItem) {
  const rowStyle = {
    display: 'flex',
    justifyContent: 'center',
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
            <h3><a href={url} className={styles.featureTitle}>{title}</a></h3>
            <p>{description}</p>
          </div>
        </div>
      ) : null}

      <div className="col col--5">
        <div className="text--center">
          <img src={imageUrl} alt={title} className={styles.featureImage} />
        </div>
      </div>

      {!isImageRight ? (
        <div className="col col--5" style={{ paddingLeft: '1rem' }}>
          <div className="text--center padding-horiz--md">
            <h3><a href={url} className={styles.featureTitle}>{title}</a></h3>
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
