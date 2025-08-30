import React from "react";

export const Height: React.FC = () => {
  return (
    <div>
      {/* In 4PX */}
      <div className="bg-pink-200 h-10">Height Module for div</div>
      <div className="bg-pink-300 h-20 max-h-10">Height Module for div</div>
      <div className="bg-pink-400 h-5 min-h-10">Height Module for div</div>

      {/* In percentage */}
      <div className="h-screen">
        <div className="bg-green-200 h-full">Height Module for div</div>
      </div>
      <div className="h-screen">
        <div className="bg-green-300 h-1/2">Height Module for div</div>
        <div className="bg-green-400 h-1/4">Height Module for div</div>
        <div className="bg-green-500 h-1/6">Height Module for div</div>
        <div className="bg-green-600 h-1/12">Height Module for div</div>
      </div>

      {/* Custom Pixel */}
      <div className="bg-stone-500 h-[100px]">Height Module for div</div>

      {/* Auto set */}
      <div className="bg-stone-200 hover:bg-stone-400 h-auto">
        Height Module for div
      </div>
      <div className="text-xl bg-stone-300 hover:bg-stone-500 h-dvh">
        Height Module for div
      </div>
    </div>
  );
};
