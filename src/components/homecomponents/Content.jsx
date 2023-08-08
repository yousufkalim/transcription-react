import React from 'react';

function Content() {
  return (
    <div className="content">
      <ul>
        <li>
          <p id="ist-url">How to transcribe an audio/video file or URL?</p>
        </li>
        <li>
          <p id="thr-url">Upload or provide the URL</p>
        </li>
        <li>
          <p id="sec-url">
            You can either upload an audio/video file or provide a URL to transcribe.
          </p>
        </li>
        <li>
          <p id="thr-url">Click on the &quot;Transcribe&quot; button</p>
        </li>
        <li>
          <p id="sec-url">
            Once you have uploaded the file or provided the URL, click on the &quot;Transcribe&quot;
            button.
          </p>
        </li>
        <li>
          <p id="thr-url"> Wait for the transcription to generate</p>
        </li>
        <li>
          <p id="sec-url">
            The system will take a few moments to transcribe the audio/video file or URL and also
            generate a summary.
          </p>
        </li>
        <li>
          <p id="thr-url">Download the transcript</p>
        </li>
        <li>
          <p id="sec-url">
            Once the transcription is complete,you can download it. So, you can share it with
            others.
          </p>
        </li>
      </ul>
      <h5 className="end"> Say it, we write it</h5>
    </div>
  );
}

export default Content;
