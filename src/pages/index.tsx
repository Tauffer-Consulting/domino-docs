import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { Icon } from '@iconify/react';

import styles from './index.module.css';

// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles


// AOS.init();

// // You can also pass an optional settings object
// // below listed default settings
// AOS.init({
//   // Global settings:
//   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//   initClassName: 'aos-init', // class applied after initialization
//   animatedClassName: 'aos-animate', // class applied on animation
//   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


//   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 120, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 400, // values from 0 to 3000, with step 50ms
//   easing: 'ease', // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

// });


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
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
