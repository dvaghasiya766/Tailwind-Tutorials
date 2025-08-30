import React from "react";
import { Header } from "./Components/Header";
import { Colors } from "./Components/Colors";
import { MarginPadding } from "./Components/MarginPadding";
import { Width } from "./Components/Width";
import { Height } from "./Components/Height";
import { Size } from "./Components/Size";
import { Position } from "./Components/Position";
import { Container } from "./Components/Container";
import { BoxStyle } from "./Components/BoxStyle";

import "./output.css";

function App() {
  return (
    <>
      <Header />
      <BoxStyle />
      <Container />
      <Position />
      <Size />
      <Height />
      <Width />
      <MarginPadding />
      <Colors />
    </>
  );
}

export default App;
