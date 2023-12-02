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
            At the same time, data scientists and AI experts continuously produce solutions that are often underutilized.
          </p>
          <ul className={styles.bullets}>
            <li>❌ Tools typically require basic programming skills from the start</li>
            <li>❌ Integrating multiple tools demand solid coding expertise</li>
            <li>❌ People don't know where to find the right tools to implement their ideas</li>
            <li>❌ Pieces of code that would be useful to many, get buried in code repositories serving few</li>
            <li>❌ There's no visual interface to most of that code</li>
          </ul>
          <p>
            ✅ Domino is here to empower individuals with access to state-of-the-art tools,
            bridging the gap between visionaries and data/AI expertise.
          </p>
        </div>
      </div>
    </section>
  );
}


{/* <p>Most professionals face barriers in accessing and building with advanced data and AI methods,
            which often requires programming skills for an impactful integration.
            Domino is here to empower individuals with access to state-of-the-art tools,
            bridging the gap between visionaries and data/AI expertise.
          </p> */}