import React from "react";

export const MarginPadding: React.FC = () => {
  return (
    <div>
      {/* In PX */}
      <h1 className="bg-red-600 text-white py-[10px] my-[1px]">Heading 1</h1>

      {/* Inline level Elements */}
      <span className="bg-amber-50 block text-dark p-6 m-10">
        Span Inline Element
      </span>
      <span className="bg-amber-100 block text-dark p-6 m-10">
        Span Inline Element
      </span>
      <span className="bg-amber-200 block text-dark p-6 m-10">
        Span Inline Element
      </span>
      <span className="bg-amber-300 block text-dark p-6 m-10">
        Span Inline Element
      </span>

      {/* Block level Elements */}
      <h1 className="bg-red-950 text-white p-6 m-10">Heading 1</h1>
      <h1 className="bg-red-900 text-white py-6 my-10">Heading 1</h1>
      <h1 className="bg-red-800 text-white px-6 mx-10">Heading 1</h1>
      <h1 className="bg-red-700 text-white ps-6 me-10">Heading 1</h1>
      <h1 className="bg-red-600 text-white pt-6 mb-10">Heading 1</h1>
    </div>
  );
};
