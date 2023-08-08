import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function FileURL({ onSetURL, disabled }) {
  const [url, setURL] = useState('');

  const handleURL = (e) => {
    const inputURL = e.target.value;
    setURL(inputURL);
    onSetURL(inputURL.trim() !== '');
  };

  const handleCancel = () => {
    setURL('');
    onSetURL(false);
  };

  const handleFileSelect = () => {
    if (url.trim() !== '') {
      setURL('');
      onSetURL(false);
    }
  };

  return (
    <div className="URL-field">
      <p>Enter URL of the Audio/Video File</p>
      <div className="input-container">
        <input
          type="text"
          id="URL"
          placeholder="e.g. https://falconconsulting.fr/"
          value={url}
          onChange={handleURL}
          disabled={disabled}
          onClick={handleFileSelect}
        />
        {url.trim() !== '' && (
          <FontAwesomeIcon icon={faTimes} className="cancel-icon" onClick={handleCancel} />
        )}
      </div>
    </div>
  );
}

export default FileURL;
