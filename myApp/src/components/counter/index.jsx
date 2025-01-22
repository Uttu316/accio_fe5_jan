import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const onAdd = () => {
    setValue(value + 1); // update the value, setValue is async
    console.log(value, "inside add");
  };
  const onSub = () => {
    setValue(value - 1);
    console.log(value, "inside sub");
  };
  console.log(value, "outside of function");
  return (
    <div>
      <h1>Counter</h1>
      <h3>{value}</h3>
      <button onClick={onAdd}>Add</button>
      <button onClick={onSub}>Sub</button>
    </div>
  );
};

export default Counter;
