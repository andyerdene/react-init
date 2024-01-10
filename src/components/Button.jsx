import React from "react";
import "../styles/button.css";

export default function Button({ value, setScreenVal }) {
  return (
    <button className="btn" onClick={() => setScreenVal((a) => a + value)}>
      {value}
    </button>
  );
}
