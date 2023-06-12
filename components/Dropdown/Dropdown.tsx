"use client";

import React, { useState, ChangeEvent } from "react";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleFileInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    option: string
  ) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      switch (option) {
        case "picture":
          setSelectedFile(file);
          break;
        case "video":
          setSelectedFile(file);
          break;
        default:
          break;
      }
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
        openWebcam();
        break;
      default:
        break;
    }
  };

  const openWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const videoElement = document.createElement("video");
      videoElement.srcObject = stream;
      videoElement.play();
      // Render the video element wherever you want to display the webcam feed
      document.getElementById("webcam-container")?.appendChild(videoElement);
    } catch (error) {
      console.error("Error accessing webcam:", error);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div>
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
      <div id="webcam-container" />
    </div>
  );
};

export default Dropdown;
