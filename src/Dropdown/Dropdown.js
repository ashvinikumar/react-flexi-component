import React from "react";

const Dropdown = (props) => {
  return (
    <div className="d_inline">
      <label>{props.label}</label>
      <select
        className="inputCus"
        name={props.name}
        onChange={e => props.dropdownChangeHandler(e)}
      >
        <option value="">
          Select an option
      </option>
        {props.options.map(values => <option value={values} key={values}>{values}</option>)}
      </select>
    </div>
  )
}

export default Dropdown;