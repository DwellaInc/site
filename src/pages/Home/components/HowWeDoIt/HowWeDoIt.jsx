import React from 'react';
import './HowWeDoIt.scss';
import { howWeDoIt } from './info';
import CardWithBorder from '../../../../components/CardWithBorder/CardWithBorder';

export default function HowWeDoIt() {
  return (
    <section className="how-we-do-it">
      <h3 className="HWDI-title">How We Do It</h3>
      <div className="HWDI-container">
        {howWeDoIt.map((card, i) => {
          return (
            <React.Fragment key={i}>
              <CardWithBorder
                title={card.title}
                image={card.image}
                text={card.text}
              />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
