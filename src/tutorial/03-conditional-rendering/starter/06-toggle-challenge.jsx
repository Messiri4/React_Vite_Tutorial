import { useState } from "react";

const ToggleChallenge = () => {
  const [showValue, setShowValue] = useState(false);

  // const buttonToggle = () => {
  //   if (showValue) {
  //     setShowValue(false);
  //     return;
  //   }
  //   setShowValue(true);
  // };

  const Value = () => {
    return <div>Hello World</div>;
  };

  return (
    <div>
      <button type="button" onClick={() => setShowValue(!showValue)}>
        Click Me
      </button>
      {showValue && <Value />}
    </div>
  );
};

export default ToggleChallenge;
