import React from "react";

export const BoxStyle: React.FC = () => {
  return (
    <>
      <div className="h-100 w-80 bg-rose-400 bg-[url('https://res.cloudinary.com/prod/image/upload/e_gen_replace:from_picture%20frame;to_scandinavian%20wall%20art;preserve-geometry_true/me/replace-frame-1')] bg-no-repeat bg-center bg-contain">
        Hello Tailwind
      </div>
      <div className="gradient bg-gradient-to-b to-blue-400 from-blue-600 size-50"></div>
    </>
  );
};
