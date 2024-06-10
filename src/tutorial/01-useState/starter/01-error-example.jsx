const ErrorExample = () => {
  let count = 0;

  const IncreaseNum = () => {
    count = count + 1;
    console.log(count);
  };
  return (
    <>
      <h1>{count}</h1>
      <button type="button" onClick={IncreaseNum}>Increment</button>
    </>
  );
};

export default ErrorExample;
