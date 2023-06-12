"use client";
import React, { useState, ChangeEvent } from "react";
import Webcam from "react-webcam";
import Output from "./Output";
import DropdownMenu from "../Dropdown/DropdownMenu";
import MediaViewer from "../MediaViewer/MediaViewer";

const OutputFile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isWebcamOpen, setIsWebcamOpen] = useState(false);
  const [videoLink, setVideoLink] = useState<string | null>(null);
  const [pictureLink, setPictureLink] = useState<string | null>(null);

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
      setVideoLink(null);
      setPictureLink(null);
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
        setVideoLink(null);
        setPictureLink(null);
        break;
      case "videoLink":
        const link = prompt("Enter video link");
        if (link) {
          setVideoLink(link);
          setIsOpen(false);
          setIsWebcamOpen(false);
          setSelectedFile(null);
          setPictureLink(null);
        }
        break;
      case "pictureLink":
        const pictureLink = prompt("Enter picture link");
        if (pictureLink) {
          setPictureLink(pictureLink);
          setIsOpen(false);
          setIsWebcamOpen(false);
          setSelectedFile(null);
          setVideoLink(null);
        }
        break;
      default:
        break;
    }
  };

  const handleMediaClose = () => {
    setSelectedFile(null);
    setIsWebcamOpen(false);
    setIsOpen(true);
    setVideoLink(null);
    setPictureLink(null);
  };

  const webcamRef = React.useRef<Webcam>(null);

  return (
    <div className="relative inline-block text-left">
      <div>
        {!selectedFile && !isWebcamOpen && !videoLink && !pictureLink && (
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
      {isOpen && <DropdownMenu handleMenuItemClick={handleMenuItemClick} />}
      <MediaViewer
        handleMediaClose={handleMediaClose}
        selectedFile={selectedFile}
        isWebcamOpen={isWebcamOpen}
        videoLink={videoLink}
        pictureLink={pictureLink}
        webcamRef={webcamRef}
      />
    </div>
  );
};

export default OutputFile;
