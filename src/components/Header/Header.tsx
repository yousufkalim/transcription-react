import React, { FC } from 'react';
import './Header.css';
import backArrow from '../../assets/home/Vector.svg';

const Header: FC = () => {
  return (
    <>
      <div className="header ">
        <div className="round">
          <img className="vector-img" src={backArrow} alt="vector" />
        </div>
        <div className="heading"> falcon_meeting_audio.mp3 </div>
        <button className="download-btn">Download</button>
      </div>
    </>
  );
};

export default Header;
