import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  const [incrementAmount, setIncrementAmount] = useState(1);
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(1);
    dispatch(reset());
  };

  return (
    <section>
      <h1 className="count">{count}</h1>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <div>
        <input
          type="number"
          name="number"
          id="number"
          value={incrementAmount}
          onChange={(event) => setIncrementAmount(event.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          Add amount
        </button>
      </div>
      <button onClick={resetAll}>Reset</button>
    </section>
  );
};

export default Counter;
