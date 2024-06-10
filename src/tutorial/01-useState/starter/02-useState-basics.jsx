import { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState());
  // const value = useState("hello")[0];
  // const func = useState("hello")[1];
  // console.log(value);
  // console.log(func);

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Increment
      </button>
    </div>
  );
};

export default UseStateBasics;
