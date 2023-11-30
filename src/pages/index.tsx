import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageCardsRowSession from '../components/HomepageCardsRowSession';
import HomepageProblemSession from '../components/HomepageProblemSession';
import { Icon } from '@iconify/react';

import styles from './index.module.css';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{
        // backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // Optional - this will make the background image fixed while scrolling.
        backgroundColor: 'rgba(48, 56, 70, 1)', // Set the background color with slight transparency (adjust the alpha value as needed).
        // height: '700px',
      }}
    >
      <div
        className="container"
        style={{
          textAlign: "center",
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          padding: '0',
        }}>
        <div style={{ maxWidth: '50%' }}>
          <div
            className={styles.hero__subtitle__fadein}
            style={{ animationDuration: '4s', animationDelay: '0s' }}
          >
            Build amazing ideas,
          </div>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <div
              className={styles.hero__subtitle__fadein}
              style={{ animationDuration: '4s', animationDelay: '1.5s' }}
            >
              piece&nbsp;
            </div>
            <div
              className={styles.hero__subtitle__fadein}
              style={{ animationDuration: '4s', animationDelay: '2.5s' }}
            >
              by&nbsp;
            </div>
            <div
              className={styles.hero__subtitle__fadein}
              style={{ animationDuration: '4s', animationDelay: '3.5s' }}
            >
              piece
            </div>
          </div>

          <br />
          <br />
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "#000000f5",
                borderWidth: "2px",
                borderStyle: "solid",
                width: "20rem"
              }}
            >
              <Icon icon="uil:rocket" style={{ marginRight: "8px" }} />
              Get Started with Domino
            </Link>
          </div>

          <br />
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "#000000f5",
                borderWidth: "2px",
                borderStyle: "solid",
                width: "20rem"
              }}
            >
              <Icon icon="fa6-regular:message" style={{ marginRight: "8px" }} />
              Get in touch with us
            </Link>
          </div>


        </div>

        <div style={{ maxWidth: '50%' }}>
          {/* <div style={{ textAlign: 'center' }}> */}
          <img
            src="img/intro/gif-example.gif"
            alt="Domino - Build amazing ideas, Piece by Piece"
            style={{
              // maxWidth: '100%',
              height: 'auto'
            }}
          />
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Domino - Build amazing ideas, Piece by Piece ">
      <HomepageHeader />
      <main>
        <HomepageProblemSession />
        <HomepageFeatures />
        <HomepageCardsRowSession />
      </main>
    </Layout>
  );
}
