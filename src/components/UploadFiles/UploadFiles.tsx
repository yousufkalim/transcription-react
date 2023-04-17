import React, { FC, useState } from 'react';
import './UploadFiles.css';
import cloud from '../../assets/home/cloud_upload.svg';
import cloudDone from '../../assets/home/cloud_done.svg';
import cross from '../../assets/home/close.svg';
import InputField from '../InputField/InputeField';

const UploadFiles: FC = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    setIsDragging(false);
    // const files = event.dataTransfer.files;
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.files && event.target.files.length > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  return (
    <>
      <div className="w-[45%] mr-[10%]">
        <h1 className="text-blue-900 font-semibold font-[Poppins] text-2xl mb-5 xl:whitespace-normal whitespace-pre">
          Transform audio and video into written text
        </h1>
        <div>
          <p className="text-gray-500 font-poppins font-normal text-sm mb-2">Choose File</p>
          <div
            className={`relative flex flex-col items-center ${isDragging ? 'bg-gray-200' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {isEmpty ? (
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex flex-col items-center">
                <div>
                  <img src={cloud} alt="cloud_upload" />
                </div>
                <label
                  className="mb-8 mt-3 text-gray-500 font-poppins font-normal text-base whitespace-pre"
                  htmlFor="files"
                >
                  Drop Audio/Video File Here or Browse File
                </label>
                <button className="w-min font-poppins font-medium text-base bg-blue-900 rounded-[100px] text-white py-[16px] px-[32px]">
                  Browse
                </button>
              </div>
            ) : (
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 flex flex-col items-center">
                <div>
                  <img src={cloudDone} alt="cloud_upload" />
                </div>
                <div className="flex items-center gap-1 mb-8 mt-3">
                  <p className="text-blue-900 font-poppins font-normal text-base">
                    Name of the file
                  </p>
                  <div>
                    <img src={cross} alt="remove" />
                  </div>
                </div>
                <button className="w-min font-poppins font-medium text-base bg-white rounded-[100px] text-red-600 py-[16px] px-[32px] border-2 border-red-600">
                  Replace
                </button>
              </div>
            )}
            <input
              id="files"
              style={{
                borderColor: isEmpty ? '#919B9B' : '#003B7E',
                position: isEmpty ? 'relative' : 'unset',
              }}
              type="file"
              onChange={handleInputChange}
              className="z-2 h-64 py-[48px] px-[32px] rounded-[12px] w-[100%] border-[4px] border-gray-500 border-dashed upload_file_input"
            />
          </div>
        </div>
        <div className="flex items-center my-3">
          <div className="mr-[2%] w-[48%] border-b-[0.5px] border-solid border-gray-300"></div>
          <p className="font-poppins font-normal text-base text-gray-600">Or</p>
          <div className="ml-[2%] w-[48%] border-b-[0.5px] border-solid border-gray-300"></div>
        </div>
        <InputField />
      </div>
      <div className="border border-solid border-blue-900"></div>
      <div className="w-35% ml-[10%] flex flex-col justify-center">
        <h1 className="font-poppins font-semibold text-lg text-gray-700">
          How to transcribe an audio/video file or URL?
        </h1>
        <div className="mb-2">
          <h3 className="font-poppins font-normal text-lg text-gray-500">
            Upload or provide the URL
          </h3>
          <p className="font-poppins font-medium text-base text-gray-700">
            You can either upload an audio/video file or provide a URL to transcribe.
          </p>
        </div>
        <div className="mb-2">
          <h3 className="font-poppins font-normal text-lg text-gray-500">
            Click on the &quot;Transcribe&quot; button
          </h3>
          <p className="font-poppins font-medium text-base text-gray-700">
            Once you have uploaded the file or provided the URL, click on the &quot;Transcribe&quot;
            button.
          </p>
        </div>
        <div className="mb-2">
          <h3 className="font-poppins font-normal text-lg text-gray-500">
            Wait for the transcription to generate
          </h3>
          <p className="font-poppins font-medium text-base text-gray-700">
            The system will take a few moments to transcribe the audio/video file or URL and also
            generate a summary.
          </p>
        </div>
        <div className="mb-2">
          <h3 className="font-poppins font-normal text-lg text-gray-500">
            Download the transcript
          </h3>
          <p className="font-poppins font-medium text-base text-gray-700">
            Once the transcription is complete, you can download it. So, you can share it with
            others.
          </p>
        </div>
        <div className="w-full flex justify-end mt-16">
          <p className="font-poppins italic font-semibold text-lg text-gray-500">
            Say it, we write it
          </p>
        </div>
      </div>
    </>
  );
};
export default UploadFiles;
