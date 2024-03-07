import React from 'react';

import { Navbar } from '../components/Home/Navbar';
import "./base.css"
import "./index.css"
import { Session1 } from '../components/Home/Session1';

export default function Home(): JSX.Element {
  return (
    <div>
      <Navbar />
      <main>
        <Session1 />
        <section id="section-2"></section>
        <section id="section-3"></section>
      </main>
    </div>
  );
}
