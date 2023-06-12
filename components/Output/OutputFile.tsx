"use client";
import React, { useState, ChangeEvent, useRef } from "react";
import Webcam from "react-webcam";
import Output from "./Output";

const OutputFile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isWebcamOpen, setIsWebcamOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleFileInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    option: string
  ) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setIsOpen(false);
      setIsWebcamOpen(false);
    }
  };

  const handleMenuItemClick = (option: string) => {
    switch (option) {
      case "picture":
        document.getElementById("picture-input")?.click();
        break;
      case "video":
        document.getElementById("video-input")?.click();
        break;
      case "webcam":
        setIsWebcamOpen(true);
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  const handleMediaClose = () => {
    setSelectedFile(null);
    setIsWebcamOpen(false);
    setIsOpen(true);
    if (webcamRef.current) {
      const video: HTMLVideoElement | null = webcamRef.current.video;
      if (video) {
        video.pause();
        video.srcObject = null;
      }
    }
  };

  const webcamRef = useRef<Webcam>(null);

  return (
    <div className="relative inline-block text-left">
      <div>
        {!selectedFile && !isWebcamOpen && (
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleMenuToggle}
          >
            Dropdown
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path fillRule="evenodd" d="M10 12l-6-6h12l-6 6z" />
            </svg>
          </button>
        )}
        <input
          type="file"
          id="picture-input"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFileInputChange(e, "picture")}
        />
        <input
          type="file"
          id="video-input"
          accept="video/*"
          className="hidden"
          onChange={(e) => handleFileInputChange(e, "video")}
        />
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
              onClick={() => handleMenuItemClick("picture")}
            >
              Picture
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
              onClick={() => handleMenuItemClick("video")}
            >
              Video
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              role="menuitem"
              onClick={() => handleMenuItemClick("webcam")}
            >
              Open Webcam
            </button>
          </div>
        </div>
      )}
      {selectedFile && !isWebcamOpen && (
        <div className="relative">
          <button
            type="button"
            className="absolute top-0 right-0 mt-2 mr-2 p-2 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 focus:outline-none"
            onClick={handleMediaClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Output file={selectedFile} />
        </div>
      )}
      {isWebcamOpen && (
        <div className="relative">
          <button
            type="button"
            className="absolute top-0 right-0 mt-2 mr-2 p-2 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 focus:outline-none"
            onClick={handleMediaClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Webcam audio={false} ref={webcamRef} />
        </div>
      )}
    </div>
  );
};

export default OutputFile;
