// Init
import React from 'react';
import Logo from '../../assets/components/HeaderIcon/Logo.svg';

// Component
export default function Header() {
  return (
    <div className="header">
      <div id="title">
        <p>Transcription</p>
      </div>
      <div id="Logo">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
}
