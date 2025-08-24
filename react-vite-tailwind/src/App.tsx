import React from "react";
import { Header } from "./Components/Header";

import "./output.css";
import { Colors } from "./Components/Colors";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Colors />
    </>
  );
};

export default App;
