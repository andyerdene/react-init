import { useState } from "react";
import Button from "./components/Button";
import Screen from "./components/Screen";
import "./styles/global.css";
import { numberButtons, operatorButtons } from "./utils/constants";

export default function App() {
  const [screenVal, setScreenVal] = useState("1");
  // const [count, setCount] = useState(0);

  // setCount((b)=>b+1)
  // setCount(count + 1)

  function changeScreenVal(val) {
    setScreenVal(screenVal + val);
  }
  return (
    <div className="mainCalc">
      <Screen value={screenVal} />
      <div className="buttons">
        <div className="numbers">
          {numberButtons.map((val, index) => {
            return (
              <Button key={index} value={val} setScreenVal={setScreenVal} />
            );
          })}
        </div>
        <div className="operators">
          {operatorButtons.map((val, index) => {
            return (
              <Button key={index} value={val} setScreenVal={setScreenVal} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
