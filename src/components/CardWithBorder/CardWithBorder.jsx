import React, { useRef, useState } from 'react';
import './CardWithBorder.scss';
import downBtn from '../../assets/images/down-button.svg';
import upBtn from '../../assets/images/up-button.svg';
import useClickOutside from '../../assets/hooks/useClickOutside';

export default function CardWithBorder({ image, title, text }) {
  const [openCard, setOpenCard] = useState(false);
  const ref = useRef();

  const handeOpenCard = () => {
    setOpenCard(!openCard);
  };

  useClickOutside(ref, () => setOpenCard(false));

  return (
    <div
      ref={ref}
      className={openCard ? 'CWB-open' : 'CWB'}
      onClick={() => handeOpenCard()}
    >
      <div className="CWB-container">
        <img className="CWB-image" src={image} alt="How We Do It" />
        <h4 className="CWB-title">{title}</h4>
      </div>
      <button className="CWB-button">
        <img
          className="CWB-expand"
          src={openCard ? upBtn : downBtn}
          alt="Expand button"
          onClick={() => handeOpenCard()}
        />
      </button>
      <p>{text}</p>
    </div>
  );
}
