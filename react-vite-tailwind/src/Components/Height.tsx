import React from "react";

export const Height: React.FC = () => {
  return (
    <div>
      {/* In 4PX */}
      <div className="bg-pink-200 h-10">Height Module for div</div>
      <div className="bg-pink-300 h-20 max-h-10">Width Module for div</div>
      <div className="bg-pink-400 h-5 min-h-10">Width Module for div</div>

      {/* In percentage */}
      <div className="bg-green-200 h-screen">Width Module for div</div>
    </div>
  );
};
