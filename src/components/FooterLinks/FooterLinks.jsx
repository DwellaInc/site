import React from 'react';
import './FooterLinks.scss';
import { Link } from 'react-router-dom';

function FooterLink({ link, text }) {
  return (
    <Link className="footer-link" to={link}>
      {text}
    </Link>
  );
}

export default function FooterLinks({ title, links }) {
  return (
    <div className="footer-links">
      <h6 className="footer-links-title">{title}</h6>
      <div className="footer-links-container">
        {links.map((link, i) => {
          return (
            <React.Fragment key={i}>
              <FooterLink link={link.url} text={link.text} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
