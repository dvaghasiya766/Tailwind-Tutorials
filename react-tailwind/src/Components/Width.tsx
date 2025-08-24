import React from "react";

export const Width: React.FC = () => {
  return (
    <div>
      {/* In 4PX */}
      <div className="bg-pink-200 w-300">Width Module for div</div>
      <div className="bg-pink-300 w-300 max-w-50">Width Module for div</div>
      <div className="bg-pink-400 w-300 min-w-50">Width Module for div</div>

      {/* In percentage */}
      <div className="bg-green-200 w-full">Width Module for div</div>
      <div className="bg-green-300 w-1/2">Width Module for div</div>
      <div className="bg-green-400 w-1/3">Width Module for div</div>
      <div className="bg-green-500 w-1/4">Width Module for div</div>
      <div className="bg-green-600 w-1/5">Width Module for div</div>
      <div className="bg-green-700 w-1/6">Width Module for div</div>

      {/* In XLs */}
      <div className="bg-yellow-200 w-xs">Width Module for div</div>
      <div className="bg-yellow-300 w-m">Width Module for div</div>
      <div className="bg-yellow-400 w-l">Width Module for div</div>
      <div className="bg-yellow-500 w-1xl">Width Module for div</div>
      <div className="bg-yellow-600 w-2xl">Width Module for div</div>
      <div className="bg-yellow-700 w-3xl">Width Module for div</div>
      <div className="bg-yellow-800 w-4xl">Width Module for div</div>
      <div className="bg-yellow-900 w-5xl">Width Module for div</div>

      {/* Custom Pixel */}
      <div className="bg-stone-500 w-[100px]">Width Module for div</div>

      {/* Auto set */}
      <div className="bg-stone-200 hover:bg-stone-400 w-auto">Width Module for div</div>
    </div>
  );
};
