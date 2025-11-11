import { FaDeleteLeft } from "react-icons/fa6";
import Button from "./Button";
import "../index.css";

const buttons = [
  { show: "C", send: "C" },
  { show: <FaDeleteLeft style={{ fontSize: "20px" }} />, send: "DEL" },
  { show: "×", send: "*" },
  { show: "÷", send: "/" },
  "6",
  "7",
  "8",
  "9",
  "-",
  "2",
  "3",
  "4",
  "5",
  "+",
  "1",
  "0",
  ".",
  "=",
];

function Keypad({ onButtonClick }) {
  return (
    <div className="keypad">
      {buttons.map((btn, i) => {
        const isObj = typeof btn === "object" && btn.show;
        const show = isObj ? btn.show : btn;
        const send = isObj ? btn.send : btn;

        const isDelete = send === "DEL";

        return (
          <Button
            key={i}
            value={send}
            onClick={() => onButtonClick(send)}
            className={isDelete ? "del-btn" : ""}>
            {show}
          </Button>
        );
      })}
    </div>
  );
}

export default Keypad;
