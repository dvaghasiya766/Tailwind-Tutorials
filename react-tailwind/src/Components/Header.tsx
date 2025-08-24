import React from "react";

export const Header: React.FC = () => {
  return (
    <ul className="bg-black text-blue-200 flex text-xl [&>*]:flex [&>*]:hover:bg-zinc-800">
      <li>
        <a href="#" className="p-3 hover:bg-zinc-800">
          Home
        </a>
      </li>
      <li>
        <a href="#" className="p-3 hover:bg-zinc-800">
          News
        </a>
      </li>
      <li>
        <a href="#" className="p-3 hover:bg-zinc-800">
          Contact
        </a>
      </li>
      <li>
        <a href="#" className="p-3 hover:bg-zinc-800">
          About
        </a>
      </li>
    </ul>
  );
};
