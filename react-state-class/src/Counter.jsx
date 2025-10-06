import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(1);
  //   console.log(count);

  function incCount() {
    count += 1;
    setCount(count);
  }
  return (
    <div>
      <h1>Count={count}</h1>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}
