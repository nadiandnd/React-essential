import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

function AppTwo() {
  return <h1>This is the Second App</h1>
}

ReactDOM.render(
  <>
    <App />
    <AppTwo />
  </>,
   
  // <></> is the short hand fragment of <React.Fragment></React.Fragment>

  // <ul>
  //   <li>Monday</li>
  //   <li>Tuesday</li>
  //   <li>Wednesday</li>
  // </ul>,
  // React.createElement(
  //   "ul", 
  //   { style: { color: "blue" } },
  //   React.createElement("li", null, "Monday"),
  //   React.createElement("li", null, "Tuesday"),
  //   React.createElement("li", null, "Wednesday")
  //   ),
  document.getElementById('root')
);


