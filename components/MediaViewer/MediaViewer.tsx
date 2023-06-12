import React from "react";
import Webcam from "react-webcam";
// import Image from "next/image";
import Output from "../Output/Output";
interface MediaViewerProps {
  handleMediaClose: () => void;
  selectedFile: File | null;
  isWebcamOpen: boolean;
  videoLink: string | null;
  pictureLink: string | null;
  webcamRef: React.RefObject<Webcam>;
}
// type MediaViewerProps = {
//   selectedFile: File | null;
//   pictureLink: string;
//   webcamRef: RefObject<Webcam>;
// };

const MediaViewer: React.FC<MediaViewerProps> = ({
  handleMediaClose,
  selectedFile,
  isWebcamOpen,
  videoLink,
  pictureLink,
}) => {
  if (selectedFile && !isWebcamOpen && !videoLink && !pictureLink) {
    return (
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
    );
  }

  if (isWebcamOpen && !selectedFile && !videoLink && !pictureLink) {
    return (
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
        <Webcam audio={false} />
      </div>
    );
  }

  if (videoLink && !selectedFile && !isWebcamOpen && !pictureLink) {
    return (
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
        <iframe
          src={videoLink}
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  if (pictureLink && !selectedFile && !isWebcamOpen && !videoLink) {
    return (
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
        <img src={pictureLink} alt="Picture" />
      </div>
    );
  }

  return null;
};

export default MediaViewer;
