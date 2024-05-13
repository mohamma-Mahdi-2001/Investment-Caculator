import { useState } from "react";
import Header from "./component/header";
import UserInput from "./component/userInput";
import Results from "./component/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 12000,
    annualInvestment: 1230000,
    expectedReturn: 10,
    duration: 20,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((preUserInput) => {
      return {
        ...preUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />

      {inputIsValid && <Results Input={userInput} />}
      {!inputIsValid && (
        <p className="center"> Please Enter a duration greater than zero </p>
      )}
    </>
  );
}

export default App;
