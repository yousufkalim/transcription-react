import React, { useState, FC } from 'react';
import cross from '../../assets/home/close.svg';

const InputField: FC = () => {
  const [url, setUrl] = useState('');

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUrl(e.target.value);
  };
  const handleCross = (): void => {
    setUrl('');
  };
  return (
    <div className="flex flex-col gap-3">
      <p className="font-poppins font-normal text-sm text-gray-500">
        Enter URL of Audio/Video File
      </p>
      <div className="relative">
        <input
          // disabled={url === "" && true}
          onChange={handleUrlChange}
          value={url}
          placeholder="e.g. https://falconconsulting.fr/"
          type="text"
          className="w-[100%] mb-2 py-[16px] px-[30px] border-2 border-solid border-gray-700 rounded-[100px] font-poppins font-semibold text-base text-gray-700"
        />
        {url !== '' && (
          <img
            src={cross}
            alt="clear"
            className="absolute top-[25%] right-[5%]"
            onClick={handleCross}
          />
        )}
      </div>
      <button className="w-full font-poppins font-medium text-base bg-blue-900 rounded-[100px] text-white py-[16px] px-[32px]">
        Transcribe
      </button>
    </div>
  );
};
export default InputField;
