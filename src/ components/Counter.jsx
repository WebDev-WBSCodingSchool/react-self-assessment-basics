import { useState } from "react";
const Counter = () => {
  // TODO: Create a piece of state and initialize it to 0
  const [counter, setCounter] = useState(0);
  // TODO: Render current value
  // TODO: Add "Increment" button to increase count by 1
  // TODO: Add "Decrement" button to decrease count by 1
  // TODO: Add "Reset" button to reset count to 0
  // TODO: Add "Change sign" button to toggle between positive and negative count
  return (
    <div>
      <p>Count: {counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>Decrement</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <button onClick={() => setCounter((prev) => -1 * prev)}>
        Change sign
      </button>
    </div>
  );
};

export default Counter;
