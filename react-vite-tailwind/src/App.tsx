import React from "react";
import { Header } from "./Components/Header";
import { Colors } from "./Components/Colors";

import "./output.css";
import { MarginPadding } from "./Components/MarginPadding";
import { Width } from "./Components/Width";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Width />
      <MarginPadding />
      <Colors />
    </>
  );
};

export default App;
