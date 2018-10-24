import React from "react";

// Create a new component named "Math"
// Render one Math component in the place of each "?" mark
// Math should accept 3 props
// num1, operator, and num2
// Math should return a span tag displaying the result e.g.  19 + 341 = 360

const Math = (props) => {
  const num1 = parseInt(props.num1, 10);
  const num2 = parseInt(props.num2, 10);
    switch (props.op){
      case ("+"):
        return (num1 + num2);
      case ("-"):
        return (num1 - num2);
      case ("*"):
        return (num1 * num2);
      case ("/"):
        return (num1 / num2);
    };
}

const Calculator = () => (
  <div>
    <p>
      19 + 341 = <Math num1="19" op="+" num2="341"/>
    </p>
    <p>
      42 - 17 = <Math num1="42" op="-" num2="17"/>
    </p>
    <p>
      100 * 3 = <Math num1="100" op="*" num2="3"/>
    </p>
    <p>
      96 / 4 = <Math num1="96" op="/" num2="4"/>
    </p>
  </div>
);

export default Calculator;
