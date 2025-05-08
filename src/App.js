import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  function handleReset() {
    setCounter(0);
    setStep(1);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>Step: {step}</span>
      </div>
      <div>
        <button onClick={() => setCounter((prevCounter) => prevCounter - step)}>
          &minus;
        </button>
        <input
          type="text"
          value={counter}
          onChange={(e) => setCounter(Number(e.target.value))}
        />
        <button onClick={() => setCounter((prevCounter) => prevCounter + step)}>
          &#43;
        </button>
      </div>
      <Message counter={counter} />
      {step === 1 && counter === 0 ? null : (
        <div>
          <button onClick={() => handleReset()}>Reset</button>
        </div>
      )}
    </div>
  );
}

function Message({ counter }) {
  // Set the date to today
  const date = new Date();

  // Calculate the date based on the counter
  date.setDate(date.getDate() + counter);

  return (
    <div>
      <span>
        {/* // This message is displayed based on the counter value */}
        {counter === 0
          ? "Today is "
          : counter > 0
          ? `${counter} days from today is `
          : `${Math.abs(counter)} days ago was `}
      </span>
      <span>{date.toDateString()}</span>
    </div>
  );
}

export default App;
