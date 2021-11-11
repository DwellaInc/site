import React from 'react';
import './Legal.scss';
import { privacy, terms } from './info';

export default function Legal({ type }) {
  if (type === 'privacy') {
    return (
      <section className="legal">
        <h2>Privacy Policy</h2>
        <div>{privacy()}</div>
      </section>
    );
  }

  return (
    <section className="legal">
      <h2>Terms and Conditions</h2>
      <div>{terms()}</div>
    </section>
  );
}
