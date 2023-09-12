import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
// import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  return (
    <header
      className={clsx("hero hero--primary", styles.heroBanner)}
      style={{
        // backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // Optional - this will make the background image fixed while scrolling.
        backgroundColor: "rgba(48, 56, 70, 1)", // Set the background color with slight transparency (adjust the alpha value as needed).
        height: "700px",
      }}
    >
      <div className="container">
        <div className={styles.hero__subtitle}>Build amazing ideas,</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
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
            to="/docs/intro"
          >
            Get Started with Domino
          </Link>
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
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
