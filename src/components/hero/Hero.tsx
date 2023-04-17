import React, { FC } from 'react';

// Style
import './Hero.css';

// Media
import transcription from '../../assets/home/Transcription.svg';
import falconLogo from '../../assets/home/FalconLogo.svg';
import UploadFiles from '../UploadFiles/UploadFiles';

const Hero: FC = () => {
  return (
    <div
      className="flex flex-col justify-between from-transparent via-blue-100 to-blue-100 bg-blue-50
   h-[100vh] background_picture"
    >
      <div className="flex justify-center">
        <div className="flex justify-between w-[90%] m-9">
          <div>
            <img src={transcription} alt="transcription" />
          </div>
          <div>
            <img src={falconLogo} alt="transcription" />
          </div>
        </div>
      </div>
      <div className="bg-white p-[50px] rounded-[30px] w-[90%] mr-auto ml-auto flex">
        <UploadFiles />
      </div>
      <div className="flex justify-center mb-7">
        <p className="font-semibold font-[Poppins] text-blue-900 text-base">
          <span className="text-gray-500">© 2023</span> Transcription - Falcon Consulting
          <span className="text-gray-500">, All Rights Reserved.</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
