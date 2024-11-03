import { useEffect } from "react";
import { preLoaderAnim } from "./animations";

export default function Preloader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Hey, </span>
        <span>How </span>
        <span>you </span>
        <span>doin ?</span>
      </div>
    </div>
  );
}
