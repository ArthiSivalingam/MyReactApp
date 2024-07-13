import { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  //   const age = (data) => {
  //  alert(data);
  //   };
  //   return (
  //     <div className="App">
  //       <Button name={"aju"} age={age}/>
  //       <Button name={"siva"} age={age}/>
  //       <Button name={"sri"} age={age}/>
  //     </div>
  //   );

  const [state, setState] = useState(0);

  const handleIncrementClick = () => {
    setState(state + 1);
  };
  const handleDecrementClick = () => {
    setState(state - 1);
  };
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={handleIncrementClick}>Like</button>
      <button onClick={handleDecrementClick}>DisLike</button>
    </div>
  );
}

export default App;
