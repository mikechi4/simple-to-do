import React from "react";

import "./ToDoInput.css";
class ToDoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  setToDo = event => {
    this.setState({ value: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.addToDo({ task: this.state.value, status: "TO_DO" });
    this.setState({ value: "" });
  };
  render() {
    return (
      <div className="to-do-input">
        <form onSubmit={this.onSubmit} className="ui form">
          <label>
            What do you need done? <br />
          </label>
          <div className="to-do-input__form-input">
            <input
              type="text"
              value={this.state.value}
              onChange={this.setToDo}
            />
            <button className="positive ui button" disabled={!this.state.value}>
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ToDoInput;
