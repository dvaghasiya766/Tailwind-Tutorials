import React from "react";
import { Header } from "./Components/Header";
import { Colors } from "./Components/Colors";

import "./output.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Colors />
    </>
  );
};

export default App;
