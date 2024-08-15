import { useState, useMemo, useCallback, useEffect } from "react";

import rock from "./assets/1.png";
import scissors from "./assets/2.png";
import paper from "./assets/3.png";
import "./App.css";

import MemoizedTools from "./MemoizedTools";

const pattern = {
  1: rock,
  2: scissors,
  3: paper,
};

function App() {
  const [count, setCount] = useState(0);
  console.log("App 컴포넌트가 렌더링 됐습니다.");

  const reRendering = () => {
    setCount((c) => c + 1);
  };

  const replay = () => {
    return {
      right: Math.floor(Math.random() * (4 - 1) + 1),
      left: Math.floor(Math.random() * (4 - 1) + 1),
    };
  };

  const hands = replay();

  return (
    <>
      <div style={{ width: "1000px" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img src={pattern[hands["right"]]} />
          <img src={pattern[hands["left"]]} />
        </div>
        <MemoizedTools reRendering={reRendering} replay={replay} />
      </div>
    </>
  );
}

export default App;
