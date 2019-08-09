import React from "react";

const inputText = (props) => {
  return (
    <div className="d_inline">
      <label>{props.label}</label>
      <input
        className="inputCus"
        type="text"
        name={props.name}
        placeholder="Enter person name"
        onChange={props.inputChangeHandler}
      />
    </div>
  )
}

export default inputText;