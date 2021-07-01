import React from "react";
function RadioInput(props) {
  return (
    <React.Fragment>
      <input
        type="radio"
        value={props.value}
        name={props.name}
        onChange={(event)=>props.changed(event)}
        defaultChecked={props.defaultChecked}
      />
      <span>{props.value}</span>
    </React.Fragment>
  );
}
export default RadioInput;
