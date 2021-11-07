import React, { useEffect, useState } from 'react';
import './ThankYou.scss';
import logo from '../../assets/logo/logo-no-text.svg';
import Button from '../../components/Button/Button';
import ReactCanvasConfetti from 'react-canvas-confetti';
import { Link } from 'react-router-dom';

export default function ThankYou({ type }) {
  const [fireConfetti, setFireConfetti] = useState(false);

  useEffect(() => {
    if (type === 'register') {
      setTimeout(() => {
        setFireConfetti(true);
      }, 500);
    }
  });

  const canvasStyles = {
    position: 'fixed',
    pointerEvents: 'none',
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0,
  };

  const register = () => {
    return (
      <div className="thank-you-msg">
        <h3>Thank you for joining the waitlist!</h3>
        <p>We will keep you updated on Dwella's progress.</p>
      </div>
    );
  };

  const contact = () => {
    return (
      <div className="thank-you-msg">
        <h3>Thank you for you message!</h3>
        <p>We will get back to you as soon as we can.</p>
      </div>
    );
  };

  return (
    <div className="thank-you">
      <div className="thank-you-container">
        <img className="thank-you-logo" src={logo} alt="Dwella" />
        {type === 'register' ? register() : contact()}
        <Link to="/">
          <Button className="btn btn-primary" text="Back to Homepage" />
        </Link>
      </div>
      <ReactCanvasConfetti
        style={canvasStyles}
        fire={fireConfetti}
        spread={130}
        startVelocity={45}
        particleCount={70}
      />
    </div>
  );
}
