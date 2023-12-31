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
    title: 'Open source',
    Svg: require('@site/static/img/undraw_open_source.svg').default,
    description: (
      <>
        Domino is an open source project, which means that anyone can contribute to its development and use it for free.
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
        Domino is Kubernetes native, with every task running in a dedicated pod.
        This guarantees scalability and resilience to your workflows.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("card", styles.card)}>
      <Svg className={styles.featureSvg} role="img" />
      <div className={styles.line}></div> {/* Add a black line */}
      <h3 className={styles.cardTitle}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageCardsRowSession(): JSX.Element {
  return (
    <section className={styles.features}>
      <h1 className={styles.textTitle}>
        Made to be open, reliable and scalable
      </h1>
      <div className="container">
        <div className={clsx("cardContainer", styles.cardContainer)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
