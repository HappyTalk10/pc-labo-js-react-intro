import { useState } from "react";

// useState：値が変わると画面も変わる
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>カウント：{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
