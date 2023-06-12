import React from "react";

const DropdownMenu: React.FC<{
  handleMenuItemClick: (option: string) => void;
}> = ({ handleMenuItemClick }) => {
  return (
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
        <button
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
          role="menuitem"
          onClick={() => handleMenuItemClick("videoLink")}
        >
          Video Link
        </button>
        <button
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
          role="menuitem"
          onClick={() => handleMenuItemClick("pictureLink")}
        >
          Picture Link
        </button>
      </div>
    </div>
  );
};

export default DropdownMenu;
