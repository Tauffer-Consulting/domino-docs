import React from 'react';
import styles from './styles.module.css';

export default function HomepageProblemSession(): JSX.Element {
  const imageUrl = require('@site/static/img/landing/gap.png').default;

  return (
    <section className={styles.problemSection}>
      <div className={styles.contentContainer}>
        <img className={styles.featureImg} src={imageUrl} alt="Gap between worlds" />
        <div className={styles.textContent}>
          <h3>There's a gap between your ideas and their realization</h3>
          <p>Most professionals face barriers in accessing and building with advanced data and AI methods,
            which often requires programming skills for an impactful integration.
            Domino is here to empower individuals with access to state-of-the-art tools,
            bridging the gap between visionaries and data/AI expertise.
          </p>
        </div>
      </div>
    </section>
  );
}
