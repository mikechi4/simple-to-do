import React from "react";

import ToDoInput from "./ToDoInput";
import ListContainer from "./ListContainer";

import "./App.css";
class App extends React.Component {
  state = {
    toDoItems: [],
    inProgressItems: [],
    completedItems: []
  };

  addToDoItem = item => {
    this.setState({ toDoItems: [...this.state.toDoItems, item] });
  };

  moveItem = (item, selectedList) => {
    // get original list of where the item lives
    let currList = this.getOriginalList(item.status);

    let itemCopy = Object.assign({}, item);
    switch (selectedList) {
      case "TO_DO":
        itemCopy.status = selectedList;
        this.setState({
          [currList]: this.removeItemFromList(this.state[currList], itemCopy),
          toDoItems: [...this.state.toDoItems, itemCopy]
        });
        break;
      case "IN_PROGRESS":
        itemCopy.status = selectedList;
        this.setState({
          [currList]: this.removeItemFromList(this.state[currList], itemCopy),
          inProgressItems: [...this.state.inProgressItems, itemCopy]
        });
        break;
      case "COMPLETED":
        itemCopy.status = selectedList;
        this.setState({
          [currList]: this.removeItemFromList(this.state[currList], itemCopy),
          completedItems: [...this.state.completedItems, itemCopy]
        });
        break;
      default:
        return;
    }
  };

  getOriginalList = currentStatus => {
    let status;
    switch (currentStatus) {
      case "TO_DO":
        status = "toDoItems";
        break;
      case "IN_PROGRESS":
        status = "inProgressItems";
        break;
      case "COMPLETED":
        status = "completedItems";
        break;
    }

    return status;
  };
  removeItemFromList = (list, item) => {
    let newList = [...list];
    return newList.filter(toDo => {
      return toDo.task !== item.task;
    });
  };
  render() {
    console.log(this.state);
    return (
      <div className="app ui container segment">
        <div className="app__add-to-do">
          <ToDoInput addToDo={this.addToDoItem} />
        </div>
        <div class="ui divider" />
        <div className="app__body ui grid">
          <div className="five wide column">
            <ListContainer
              header="To Do(s):"
              items={this.state.toDoItems}
              className="four wide column"
              moveItem={this.moveItem}
            />
          </div>
          <div className="five wide column">
            <ListContainer
              header="In Progress:"
              items={this.state.inProgressItems}
              className="four wide column"
              moveItem={this.moveItem}
            />
          </div>
          <div className="five wide column">
            <ListContainer
              header="Completed:"
              items={this.state.completedItems}
              className="four wide column"
              moveItem={this.moveItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
