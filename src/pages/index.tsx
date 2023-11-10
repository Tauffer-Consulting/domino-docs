import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

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
        height: '700px',
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <div
          className={styles.hero__subtitle}
        // data-aos="fade-up"
        // data-aos-offset="0"
        // data-aos-delay="0"
        // data-aos-duration="1500"
        // data-aos-easing="ease-in-out"
        // data-aos-mirror="true"
        // data-aos-once="false"
        // data-aos-anchor-placement="top-center"
        >
          Build amazing ideas,
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <div
            className={styles.hero__subtitle}
          // data-aos="fade-up"
          // data-aos-offset="0"
          // data-aos-delay="1500"
          // data-aos-duration="1500"
          // data-aos-easing="ease-in-out"
          // data-aos-mirror="true"
          // data-aos-once="false"
          // data-aos-anchor-placement="top-center"
          >
            Piece&nbsp;
          </div>
          <div
            className={styles.hero__subtitle}
          // data-aos="fade-up"
          // data-aos-offset="0"
          // data-aos-delay="2200"
          // data-aos-duration="1500"
          // data-aos-easing="ease-in-out"
          // data-aos-mirror="true"
          // data-aos-once="false"
          // data-aos-anchor-placement="top-center"
          >
            by&nbsp;
          </div>
          <div
            className={styles.hero__subtitle}
          // data-aos="fade-up"
          // data-aos-offset="0"
          // data-aos-delay="2900"
          // data-aos-duration="1500"
          // data-aos-easing="ease-in-out"
          // data-aos-mirror="true"
          // data-aos-once="false"
          // data-aos-anchor-placement="top-center"
          >
            Piece
          </div>
        </div>

        <br />
        <br />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started with Domino
          </Link>
        </div>

        {/* <br />
        <br />
        <div style={{ textAlign: 'center' }}>
          <img
            src="img/intro/create-workflow.gif"
            alt="Domino - Build amazing ideas, Piece by Piece"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div> */}
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
