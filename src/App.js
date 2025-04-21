import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Step />
      <div>
        <button>&minus;</button>
        <span>Count: {counter}</span>
        <button>&#43;</button>
      </div>
      <div>
        <p>Today is Mon June 21 2027</p>
      </div>
    </div>
  );
}

function Step() {
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

  return (
    <div>
      <button onClick={handleStepDecrement}>&minus;</button>
      <span>Step: {step}</span>
      <button onClick={handleStepIncrement}>&#43;</button>
    </div>
  );
}

export default App;
