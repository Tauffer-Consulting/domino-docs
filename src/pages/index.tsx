import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHeader from '@site/src/components/HomepageHeaderSession';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageCardsRowSession from '../components/HomepageCardsRowSession';
import HomepageProblemSession from '../components/HomepageProblemSession';
import HomepageContactSession from '../components/HomepageContactSession';


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
        <HomepageContactSession />
      </main>
    </Layout>
  );
}
