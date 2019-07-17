import React from "react";

import "./ToDoItem.css";
class ToDoItem extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
      itemStatus: null
    };
  }

  componentDidMount() {
    this.setState({ itemStatus: this.props.toDoItem.status });
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
                className={
                  this.state.itemStatus === "TO_DO" ? "hidden" : "show"
                }
                onClick={() =>
                  this.props.moveItem(this.props.toDoItem, "TO_DO")
                }
              >
                To Do
              </button>
              <button
                className={
                  this.state.itemStatus === "IN_PROGRESS" ? "hidden" : "show"
                }
                onClick={() =>
                  this.props.moveItem(this.props.toDoItem, "IN_PROGRESS")
                }
              >
                In Progress
              </button>
              <button
                className={
                  this.state.itemStatus === "COMPLETED" ? "hidden" : "show"
                }
                onClick={() =>
                  this.props.moveItem(this.props.toDoItem, "COMPLETED")
                }
              >
                Completed
              </button>
              <div className="ui divider" />
              <button
                class="negative ui button"
                onClick={() => {
                  this.props.deleteItem(this.props.toDoItem);
                }}
              >
                <i className="fa fa-trash" />
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ToDoItem;
