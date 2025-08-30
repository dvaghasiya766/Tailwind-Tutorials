import React from "react";

export const Container: React.FC<{}> = () => {
  return (
      <div className="container bg-rose-300 mx-auto p-6">
          <h1 className="">This is Container</h1>
      <p className="text-red-500 text-2xl font-extralight">
        This is extralight weight text...
      </p>
      <p className="text-red-500 text-2xl font-light">
        This is light weight text...
      </p>
      <p className="text-red-500 text-2xl font-medium">
        This is medium weight text...
      </p>
      <p className="text-red-500 text-2xl font-semibold">
        This is semibold weight text...
      </p>
      <p className="text-red-500 text-2xl font-bold">
        This is bold weight text...
      </p>
      <p className="text-red-500 text-2xl font-[1000]">
        This is 1000 weight text...
      </p>
    </div>
  );
};
