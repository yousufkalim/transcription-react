import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileSelector from './FileSelector';
import FileURL from './FileURL';

import Content from './Content';

import Divider from './Divider';

function HomeContainer() {
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [isFileURLSet, setIsFileURLSet] = useState(false);

  // Handle FileSelector event when a file is selected
  const handleFileSelect = (hasfile) => {
    setIsFileSelected(hasfile);
    setIsFileURLSet(false);
  };

  // Handle FileURL event when a URL is set
  const handleFileURLSet = (hasURL) => {
    setIsFileURLSet(hasURL);
    setIsFileSelected(false);
  };
  const isButtonActive = isFileSelected || isFileURLSet;
  const navigate = useNavigate();
  const buttonClick = () => {
    navigate('./Transcription');
  };
  return (
    <div className="main">
      <div id="upfile">
        <div id="text">
          <p>Transform audio and video into written text</p>
        </div>
        <FileSelector onSelect={handleFileSelect} disabled={isFileURLSet} />
        <FileURL onSetURL={handleFileURLSet} disabled={isFileSelected} />
        <button
          type="button"
          className={isButtonActive ? '' : 'inactive'}
          disabled={!isButtonActive}
          onClick={buttonClick}
        >
          Transcribe
        </button>
      </div>
      <Divider />
      <Content />
    </div>
  );
}

export default HomeContainer;
