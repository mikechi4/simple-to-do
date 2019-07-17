import React from "react";

import "./ToDoItem.css";
class ToDoItem extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };
  }

  showMenu = event => {
    event.preventDefault();

    this.setState({
      showMenu: (this.state.showMenu = !this.state.showMenu)
    });
  };

  render() {
    return (
      <div className="ui segment raised to-do-item">
        {this.props.toDoItem.task}
        <i class="fa fa-ellipsis-v to-do-item__menu" onClick={this.showMenu} />
        {this.state.showMenu ? (
          <div className="ui segment raised to-do-item__popup">
            <div className="to-do-item__popup__header">
              Move to:
              <button
                onClick={() =>
                  this.props.moveItem(this.props.toDoItem, "TO_DO")
                }
              >
                To Do
              </button>
              <button
                onClick={() =>
                  this.props.moveItem(this.props.toDoItem, "IN_PROGRESS")
                }
              >
                In Progress
              </button>
              <button
                onClick={() =>
                  this.props.moveItem(this.props.toDoItem, "COMPLETED")
                }
              >
                Completed
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ToDoItem;
