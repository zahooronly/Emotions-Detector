import React from "react";

interface OutputProps {
  file: File | null;
}

const Output: React.FC<OutputProps> = ({ file }) => {
  return (
    <div>
      {file && (
        <>
          {/* <h2>Selected File:</h2> */}
          {file.type.includes("image") ? (
            <img src={URL.createObjectURL(file)} alt="Selected File" />
          ) : (
            <video controls>
              <source src={URL.createObjectURL(file)} type={file.type} />
            </video>
          )}
        </>
      )}
    </div>
  );
};

export default Output;
