import React from "react";
import { Header } from "./Components/Header";
import { Colors } from "./Components/Colors";
import { MarginPadding } from "./Components/MarginPadding";
import { Width } from "./Components/Width";
import { Height } from "./Components/Height";

import "./output.css";

function App() {
  return (
    <>
      <Header />
      <Height />
      <Width />
      <MarginPadding />
      <Colors />
    </>
  );
}

export default App;
