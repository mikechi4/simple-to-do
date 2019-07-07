import React from 'react';

import ToDoInput from './ToDoInput';
import InProgress from './InProgress';
import ToDoSection from './ToDoSection';
class App extends React.Component {
    state = {
        toDoItems: [],
        InProgressItems: [],
        completedItems: []
    };

    addToDoItem = (item) => {
        this.setState({toDoItems: [...this.state.toDoItems, item]})
    }
    render() {
        return (
            <div className="app">
                <div className="add-to-do">
                    <ToDoInput addToDo={this.addToDoItem}/>
                </div>
                <div className="body">
                    <ToDoSection toDoItems = {this.state.toDoItems} />
                    <InProgress props={this.state.toDoItems}/>
                </div>
            </div>
        )
    }
};

export default App;