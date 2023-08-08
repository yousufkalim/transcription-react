import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Cloud from '../../assets/components/cloudimage/Cloud.svg';
import clouddone from '../../assets/components/cloudimage/clouddone.svg';

function FileSelector({ onSelect, disabled }) {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    onSelect(true);
  };

  const handleCancel = () => {
    setFile(null);
    onSelect(false);
  };

  return (
    <div className="File-Selector">
      <p className="p">Choose File</p>
      <div className="forma">
        <input
          id="file-input"
          type="file"
          accept="audio/* , video/*"
          hidden
          onChange={handleChange}
          disabled={disabled}
        />
        {file ? (
          <div className="file-info">
            <img src={clouddone} alt="clouddone" width={50} height={50}></img>
            <div className="file-details">
              <p>Selected File: {file.name}</p>
              <FontAwesomeIcon icon={faTimes} className="cancel-icon" onClick={handleCancel} />
            </div>
            <label htmlFor="file-input">Replace</label>
          </div>
        ) : (
          <div className="file-select">
            <img src={Cloud} alt="cloud" />
            <p>Drop Audio/Video File Here or Browse File</p>
            <label htmlFor="file-input">Browse</label>
          </div>
        )}
      </div>
      <div className="line">
        <div className="line-style" />
        <div>or</div>
        <div className="line-style" />
      </div>
    </div>
  );
}

export default FileSelector;
