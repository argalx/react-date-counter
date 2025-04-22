import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  // This function is called when the decrement button is clicked
  function handleStepDecrement() {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  }

  // This function is called when the increment button is clicked
  function handleStepIncrement() {
    setStep((prevStep) => prevStep + 1);
  }

  // This function is called when the counter decrement button is clicked
  function handleCounterDecrement() {
    setCounter((prevCounter) => prevCounter - step);
  }

  // This function is called when the counter increment button is clicked
  function handleCounterIncrement() {
    setCounter((prevCounter) => prevCounter + step);
  }

  return (
    <div>
      <div>
        <button onClick={handleStepDecrement}>&minus;</button>
        <span>Step: {step}</span>
        <button onClick={handleStepIncrement}>&#43;</button>
      </div>
      <div>
        <button onClick={handleCounterDecrement}>&minus;</button>
        <span>Count: {counter}</span>
        <button onClick={handleCounterIncrement}>&#43;</button>
      </div>
      <Message counter={counter} />
    </div>
  );
}

function Message({ counter }) {
  const date = new Date();
  date.setDate(date.getDate() + counter);

  // Today
  // Days from today
  // Days ago

  return (
    <div>
      <span>
        {counter === 0
          ? "Today is "
          : counter > 0
          ? `${counter} days from today is `
          : `${Math.abs(counter)} days ago is `}
      </span>
      <span>{date.toDateString()}</span>
    </div>
  );
}

export default App;
