import "./index.css";
import { useState } from "react";
import Display from "./components/Display";
import Keypad from "./components/Keypad";

function App() {
  const [display, setDisplay] = useState("0");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setDisplay("0");
      return;
    }

    if (value === "DEL") {
      setDisplay((old) => (old.length === 1 ? "0" : old.slice(0, -1)));
      return;
    }

    if (value === "=") {
      try {
        const result = eval(display);
        setDisplay(result.toString());
      } catch {
        setDisplay("Error");
      }
      return;
    }

    setDisplay((old) => {
      if (old === "0" || old === "Error") return value;
      return old + value;
    });
  };

  return (
    <div className="App">
      <div className="cal-container">
        <Display value={display} />
        <Keypad onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
