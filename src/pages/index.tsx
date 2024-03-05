import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import "./base.css"
import "./index.css"

export default function Home(): JSX.Element {
  const { siteConfig: { title } } = useDocusaurusContext();
  return (
    <div>
      <nav id="navbar">
        <img id="logo" src="brand/png/main_logo.png" alt="Logo" />
        <ul id="central-links">
          <li>
            <a href="#">
              Documentation
            </a>
          </li>
          <li>
            <a href="http://">
              Blog
            </a>
          </li>
          <li>
            <a href="http://">
              Gallery
            </a>
          </li>
          <li>
            <a href="http://">
              About us
            </a>
          </li>
        </ul>
        <ul id="right-buttons">
          <li>
            <button id="primary">
              Try cloud
            </button>
          </li>
          <li>
            <button id="secondary">
              Contact
            </button>
          </li>
          <li>
            <a id="github">
              <img src="img/landing/github.svg" alt="github" />
            </a>
          </li>
        </ul>
      </nav>
      <main>
        <section id="section-1">
          <div id="container">
            <div>

              <div id="title-container">
                <h1 id="title">
                  <span>Build</span>
                  <span>amazing ideas,</span>
                  <span><i id="piece">piece</i> by <i id="piece">piece.</i></span>
                </h1>
              </div>

              <div id="subtitle-container">
                <h3 id="subtitle">You have the idea, Domino simplifies the process through an intuitive workflow, no coding required, and the result is a seamless journey from concept to reality.</h3>
              </div>

              <div id="button-container">
                <button id="primary">Discover now</button>
                <button id="tertiary">Learn more</button>
              </div>
            </div>

            <div id="gif-container">
              <div id="rectangle" >
                <div id="ellipse" className='red' />
                <div id="ellipse" className='yellow' />
                <div id="ellipse" className='green' />
                <img id="gif" src="img/intro/gif-example.gif" />
              </div>
            </div>
          </div>


        </section>
        <section id="section-2">
          <img src="img/landing/green-piece-border.svg" alt="">
          </img>
        </section>
        <section id="section-3"> Section 3</section>
      </main>
    </div>
  );
}
