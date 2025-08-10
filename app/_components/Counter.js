"use client";

import { useState } from "react";

const Counter = ({ users }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{users.length}</p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </div>
  );
};

export default Counter;
