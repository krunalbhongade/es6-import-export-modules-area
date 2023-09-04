import React from "react";
import ReactDOM from "react-dom";
import * as number from "./area.js";

ReactDOM.render(
  <ul>
    <div>
      <li>
        <p>Number is {number.default}</p>
      </li>
      <li>
        <p>Area of triangle is {number.triangle()}</p>
      </li>
      <li>
        <p>Area of square is {number.square()}</p>
      </li>
      <li>
        <p>Area of rectangle is {number.rectangle()}</p>
      </li>
      <li>
        <p>Area of circle is {number.circle()}</p>
      </li>
    </div>
  </ul>,

  document.getElementById("root")
);
