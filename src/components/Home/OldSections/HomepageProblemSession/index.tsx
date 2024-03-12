import React from 'react';
import styles from './styles.module.css';

export default function HomepageProblemSession(): JSX.Element {
  const imageUrl = require('@site/static/img/landing/gap.png').default;

  return (
    <section className={styles.problemSection}>
      <h1 className={styles.textTitle}>
        Close the gap between your ideas and their realization
      </h1>
      <div className={styles.contentContainer}>
        <img className={styles.featureImg} src={imageUrl} alt="Gap between worlds" />
        <div className={styles.textContent}>
          <p>
            Most professionals face barriers when trying to implement their ideas using data and AI.
            At the same time, data scientists and AI experts continuously produce solutions that are often underutilized. But with Domino:
          </p>
          <ul className={styles.bullets}>
            <li>✅ No require programming skills for start</li>
            <li>✅ Integration of multiple tools without coding knowledge</li>
            <li>✅ Find the right tools to implement your ideas</li>
            <li>✅ Pieces of code useful are available in code repositories.</li>
            <li>✅ Visual interface</li>
          </ul>
          <p>
            Domino is here to empower individuals with access to state-of-the-art tools,
            bridging the gap between visionaries and data/AI expertise.
          </p>
        </div>
      </div>
    </section>
  );
}
