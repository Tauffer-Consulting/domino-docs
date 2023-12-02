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
        <p>
          Domino brings an intuitive Graphical User Interface that facilitates creating,
          editing and monitoring any type of workflow, including integrations with:
        </p>
        <ul className={styles.ulFeatureList}>
          <li><span className={styles.checkmark}>✔</span>Advanced data processing tools</li>
          <li><span className={styles.checkmark}>✔</span>Machine learning and generative AI algorithms</li>
          <li><span className={styles.checkmark}>✔</span>External APIs and social media</li>
          <li><span className={styles.checkmark}>✔</span>and more!</li>
        </ul>
      </>
    ),
    url: '/docs/domino_components/domino_components_gui',
  },
  {
    title: 'Focus on Reusability and Reproducibility',
    imageUrl: require('@site/static/img/landing/pieces-sharing-transparent.png').default,
    description: (
      <>
        <p>
          Domino proposes a standard for writing and publishing functional Pieces
          which makes them reusable and reproducible, and can be easily shared with the community.
        </p>
        <ul className={styles.ulFeatureList}>
          <li><span className={styles.checkmark}>✔</span>Standardized approach to Pieces creation</li>
          <li><span className={styles.checkmark}>✔</span>Bring any functional code to the graphical interface</li>
          <li><span className={styles.checkmark}>✔</span>Easily share your PIeces with the community</li>
          <li><span className={styles.checkmark}>✔</span>Easily install and use the community Pieces</li>
        </ul>
      </>
    ),
    url: '/docs/pieces',
  },
  {
    title: 'Rich real-time monitoring',
    imageUrl: require('@site/static/img/landing/workflow-monitoring-transparent.png').default,
    description: (
      <>
        <p>
          Experience a clean and user-friendly interface for monitoring workflows results,
          including logs and rich reports with images, interactive graphics, and tables.
        </p>
        <ul className={styles.ulFeatureList}>
          <li><span className={styles.checkmark}>✔</span>Intuitive and easy to use interface for workflows monitoring</li>
          <li><span className={styles.checkmark}>✔</span>Real-time monitoring of status and logs</li>
          <li><span className={styles.checkmark}>✔</span>Detailed reporting of results with text, tables, images and interactive graphics</li>
        </ul>
      </>
    ),
    url: '/docs/domino_components/domino_components_gui',
  },
];

function Feature({ title, imageUrl, description, isImageRight, url }: { isImageRight: boolean, isShiftRight: boolean, url: string } & FeatureItem) {
  const rowStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '2.5rem',
  };

  return (
    <div className="row" style={rowStyle}>
      {isImageRight ? (
        <div className="col col--6" style={{ paddingRight: '1rem' }}>
          <div className="text--left padding-horiz--sm">
            <h3><a href={url} className={styles.featureTitle}>{title}</a></h3>
            <div>{description}</div>
          </div>
        </div>
      ) : null}

      <div className="col col--5">
        <div className="text--center">
          <img src={imageUrl} alt={title} className={styles.featureImage} />
        </div>
      </div>

      {!isImageRight ? (
        <div className="col col--6" style={{ paddingLeft: '1rem' }}>
          <div className="text--left padding-horiz--sm">
            <h3><a href={url} className={styles.featureTitle}>{title}</a></h3>
            <div>{description}</div>
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
        <>
          <h1 className="text--center" style={{ marginBottom: "4rem" }}>
            Build with Domino - advanced data and AI tools at your fingertips!
          </h1>

          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} isImageRight={idx % 2 === 0} />
          ))}
        </>
      </div>
    </section>
  );
}
