import React from "react";
import  ReactDOM  from "react-dom";
import add from "./add";
import sub from "./sub";
import div from "./div";
import multiply from "./multiply";
ReactDOM.render(<>
<ul>
  <li>the sum is {add(234,4)}</li>
  <li>the sum is {sub(3,4)}</li>
  <li>the sum is {div(3,4)}</li>
  <li>the sum is {multiply(3,4)}</li>
</ul>







</>,document.getElementById('root'))