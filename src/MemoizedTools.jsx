import { memo } from "react";

const MemoizedTools = memo(function Tools({ replay, reRendering }) {
  console.log("MemoizedTools 컴포넌트가 렌더링 됐습니다.");

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
      <button onClick={reRendering}>리렌더링</button>
    </div>
  );
});

export default MemoizedTools;
