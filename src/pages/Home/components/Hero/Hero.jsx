import React from 'react';
import './Hero.scss';
import Button from '../../../../components/Button/Button';
import heroImg from '../../../../assets/images/hero-bg.svg';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-message">
        <h1 className="hero-title">Your Share of Your City</h1>
        <h4>
          Dwella is a fast, simple, and affordable way to invest in real estate.
          Join our waitlist to stay updated.
        </h4>
        <form
          action="https://api.sheetmonkey.io/form/kCfxMwodx2xtDtM5MB95S9"
          method="post"
          className="hero-input-container"
        >
          <input
            type="email"
            placeholder="Email address"
            name="email"
            required
          />
          <input
            type="hidden"
            name="Created"
            value="x-sheetmonkey-current-date-time"
          />
          <input
            type="hidden"
            name="x-sheetmonkey-redirect"
            value="http://dwellainc.com/"
          />
          <Button
            className="btn-primary hero-button"
            text="Register"
            type="submit"
          />
        </form>
      </div>
      <img src={heroImg} className="hero-image" alt="hero" />
    </section>
  );
}
