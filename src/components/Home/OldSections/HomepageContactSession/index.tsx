import React from 'react';
import styles from './styles.module.css';

export default function HomepageContactSession(): JSX.Element {
  const imageUrl = require('@site/static/img/landing/get-in-touch-transparent.png').default;

  return (
    <section id="contact" className={styles.contactSession}>
      <h1 className={styles.textTitle}>
        Get in touch with the maintainers
      </h1>
      <div className={styles.contentContainer}>
        <img className={styles.featureImg} src={imageUrl} alt="Get in touch" />
        <div className={styles.textContent}>
          <p>
            Are you interested in using Domino for your business?
            We would love to hear from you! You can reach us at:
          </p>
          <ul className={styles.socialLinks}>
            <li className={styles.liContact}>
              <a href="https://www.linkedin.com/company/tauffer-consulting" target="_blank" rel="noopener noreferrer">
                LinkedIn
                <i className="fas fa-external-link-alt"></i>
              </a>
            </li>
            <li className={styles.liContact}>
              <a href="https://github.com/Tauffer-Consulting" target="_blank" rel="noopener noreferrer">
                GitHub
                <i className="fas fa-external-link-alt"></i>
              </a>
            </li>
            <li className={styles.liContact}>
              <a href="mailto:domino@taufferconsulting.com">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
