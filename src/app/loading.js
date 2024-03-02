import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className=" border-t-4  animate-spin border-indigo-500 h-[80px] w-[80px] rounded-full"></div>
    </div>
  );
};

export default Loading;
