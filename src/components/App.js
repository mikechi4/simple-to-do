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
    let currList = this.getListState(item.status);
    // get new list of where item is being moved
    let newList = this.getListState(selectedList);

    let itemCopy = Object.assign({}, item);
    itemCopy.status = selectedList;
    this.setState({
      [currList]: this.removeItemFromList(this.state[currList], itemCopy),
      [newList]: [...this.state[newList], itemCopy]
    });
  };

  deleteItem = item => {
    let currList = this.getListState(item.status);
    let itemCopy = Object.assign({}, item);
    this.setState({
      [currList]: this.removeItemFromList(this.state[currList], itemCopy)
    });
  };

  getListState = status => {
    let listState;
    switch (status) {
      case "TO_DO":
        listState = "toDoItems";
        break;
      case "IN_PROGRESS":
        listState = "inProgressItems";
        break;
      case "COMPLETED":
        listState = "completedItems";
        break;
    }

    return listState;
  };
  removeItemFromList = (list, item) => {
    let newList = [...list];
    return newList.filter(toDo => {
      return toDo.task !== item.task;
    });
  };
  render() {
    return (
      <div className="app ui container segment">
        <div className="app__add-to-do">
          <ToDoInput addToDo={this.addToDoItem} />
        </div>
        <div className="ui divider" />
        <div className="app__body ui grid">
          <div className="five wide column">
            <ListContainer
              header="To Do(s):"
              items={this.state.toDoItems}
              className="four wide column"
              moveItem={this.moveItem}
              deleteItem={this.deleteItem}
            />
          </div>
          <div className="five wide column">
            <ListContainer
              header="In Progress:"
              items={this.state.inProgressItems}
              className="four wide column"
              moveItem={this.moveItem}
              deleteItem={this.deleteItem}
            />
          </div>
          <div className="five wide column">
            <ListContainer
              header="Completed:"
              items={this.state.completedItems}
              className="four wide column"
              moveItem={this.moveItem}
              deleteItem={this.deleteItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
