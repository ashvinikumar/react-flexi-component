import React from 'react';
import InputText from "./InputText/InputText";
import Dropdown from "./Dropdown/Dropdown";
class Flexi extends React.Component {
  constructor(props) {
    super(props);
  }

  // state = {
  //   inputValue: "",
  //   dropdownValue: ""
  // }

  inputChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  dropdownChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (event) => {
    // Replace data with composing your form data
    event.preventDefault();
    console.log(this.state)
    alert(JSON.stringify(this.state))
    const data = {};
    this.props.onSubmit(data); // dont edit this line
  };

  render() {
    const flexiConfig = {
      items: [
        {
          "name": "person_name",
          "label": "Person's Name",
          "type": "TextField",
          "children": [{
            "name": "person_name_1",
            "label": "First Person's Name",
            "type": "TextField",
          }]
        },
        {
          "name": "states",
          "label": "Person's state",
          "type": "DropDown",
          "values": [
            "Maharashtra",
            "Kerala",
            "Tamil Nadu"
          ]
        }
      ]
    };

    return (
      <form>
        {/* Do your stuff here */}
        {flexiConfig.items.map((item, i) => {
          if (item.type === "TextField") {
            return (
              <React.Fragment>
                <InputText key={i} name={item.name} label={item.label} inputChangeHandler={this.inputChangeHandler} />
                {
                  (item.hasOwnProperty('children')) ? 
                    item.children.map((item, i) => {
                      if (item.type === "TextField") {
                        return <InputText key={i} name={item.name} label={item.label} inputChangeHandler={this.inputChangeHandler} />
                      } else if (item.type === "DropDown") {
                        return <Dropdown key={i} options={item.values} name={item.name} label={item.label} dropdownChangeHandler={this.dropdownChangeHandler} />
                      }
                    })
                  :null
                }
              </React.Fragment>
            )
          } else if (item.type === "DropDown") {
            return <Dropdown key={i} options={item.values} name={item.name} label={item.label}dropdownChangeHandler={this.dropdownChangeHandler} />
          }
        })}
        <button className="inputCus w_6rem" onClick={this.onSubmit}>Submit</button>
      </form>
    );
  }
}

export default Flexi;