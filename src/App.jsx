import { useState } from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import FlipWord from "./components/FlipWord";
import StickyScrollAnim from "./components/StickyScrollAnim";

export default function App() {
  return (
    <div>
      <Header />
      <FlipWord/>
      <Gallery />
      <StickyScrollAnim />
    </div>
  );
}
