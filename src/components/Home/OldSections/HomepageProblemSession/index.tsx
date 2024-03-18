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
            At the same time, data scientists and AI experts continuously produce solutions that are often underutilized. <br/>
            Domino solves this problem with:
          </p>
          <ul className={styles.bullets}>
            <li>✅ Create advanced data workflows, no programming skills required.</li>
            <li>✅ Monitor your workflows in real time with visually rich reports.</li>
            <li>✅ Easily find the right tools to implement your ideas.</li>
            <li>✅ Turns any piece of code into reusable visual elements.</li>
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
