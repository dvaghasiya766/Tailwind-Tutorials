import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./output.css";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-center w-full">{count}</h1>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default App;
