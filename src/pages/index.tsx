import React from 'react';

import { Navbar } from '../components/Home/Navbar';
import "./base.css"
import "./index.css"
import { Session1 } from '../components/Home/Session1';
import HomepageProblemSession from '../components/Home/OldSections/HomepageProblemSession';
import HomepageFeatures from '../components/Home/OldSections/HomepageFeatures';
import HomepageCardsRowSession from '../components/Home/OldSections/HomepageCardsRowSession';
import HomepageContactSession from '../components/Home/OldSections/HomepageContactSession';

export default function Home(): JSX.Element {
  return (
    <div id="landing">
      <Navbar />
      <main>
        <Session1 />
        <HomepageProblemSession />
        <HomepageFeatures />
        <HomepageCardsRowSession />
        <HomepageContactSession />
      </main>
    </div>
  );
}
