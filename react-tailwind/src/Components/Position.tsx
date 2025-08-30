import React from "react";

export const Position: React.FC<{}> = () => {
  return (
    <div>
      {/* Relative */}
      <div className="size-105 bg-stone-300 relative">
        {/* Absolute */}
        <div className="size-50 bg-amber-100 absolute top-0 left-0"></div>
        <div className="size-50 bg-green-100 absolute bottom-0 left-0"></div>
        <div className="size-50 bg-blue-100 absolute top-0 right-0"></div>
        <div className="size-50 bg-red-100 absolute bottom-0 right-0"></div>
      </div>
      {/* Fixed */}
      <p className="fixed ms-50">Hello</p>
    </div>
  );
};
