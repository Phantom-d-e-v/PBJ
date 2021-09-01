import React from "react";

function TestButton() {
  const test = (e) => {
    e.preventDefault();
    console.log(`Happy Birthday Junk!!`);
  };
  return (
    <div>
      <button type="submit" onClick={test}>
        Cancel PBJ
      </button>
    </div>
  );
}

export default TestButton;
