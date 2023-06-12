import Dropdown from "@/components/Dropdown/Dropdown";
import Output from "@/components/Output/Output";
import OutputFile from "@/components/Output/OutputFile";
import React from "react";

const Home = () => {
  return (
    <div className="flex min-h-screen p-4 rounded-md bg-gray-400">
      <div className="w-screen bg-white justify-center bg-opacity-50 border-gray-500 flex items-center text-center center rounded-xl m-2 shadow-xl">
        <OutputFile />
      </div>

      {/* <div className="w-screen md:w-1/3 flex flex-col"> */}
      {/* <div className="h-1/2 bg-white bg-opacity-50 justify-center border-gray-500 flex items-center text-center center rounded-xl m-2 shadow-xl"> */}
      {/* <h1>Hello</h1> */}
      {/* </div> */}
      {/* <div className="h-1/2 bg-white bg-opacity-50 border-gray-500 justify-center flex items-center text-center center rounded-xl m-2 shadow-xl"> */}
      {/* <h1>Hello</h1> */}
      {/* <Dropdown /> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default Home;
