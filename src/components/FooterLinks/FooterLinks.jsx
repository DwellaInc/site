import React from 'react';
import './FooterLinks.scss';

function FooterLink({ link, text }) {
  return (
    <a className="footer-link" href={link}>
      {text}
    </a>
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
