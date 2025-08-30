import React from "react";

export const Size: React.FC<{}> = () => {
  return (
    <div>
      {/* In 4PX */}
      <div className="bg-pink-200 size-20">Size Module for div</div>

      {/* In percentage */}
      <div className="h-screen">
        <div className="bg-green-200 size-full">Size Module for div</div>
      </div>
      <div className="h-screen">
        <div className="bg-green-300 size-1/2">Size Module for div</div>
        <div className="bg-green-400 size-1/4">Size Module for div</div>
        <div className="bg-green-500 size-1/6">Size Module for div</div>
        <div className="bg-green-600 size-1/12">Size Module for div</div>
      </div>

      {/* Custom Pixel */}
      <div className="bg-stone-500 size-[100px]">Size Module for div</div>

      {/* Auto set */}
      <div className="bg-stone-200 sizeover:bg-stone-400 size-auto">
        Size Module for div
      </div>
      <div className="text-xl bg-stone-300 sizeover:bg-stone-500 size-dvh">
        Size Module for div
      </div>
    </div>
  );
};
