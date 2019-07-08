import React from 'react';

import ToDoInput from './ToDoInput';
import InProgress from './InProgress';
import ListContainer from './ListContainer';
class App extends React.Component {
    state = {
        toDoItems: [],
        inProgressItems: [],
        completedItems: []
    };

    addToDoItem = (item) => {
        this.setState({toDoItems: [...this.state.toDoItems, item]})
    }
    render() {
        return (
            <div className='app ui container segment'>
                <div className='add-to-do ui center'>
                    <ToDoInput addToDo={this.addToDoItem}/>
                </div>
                <div className='body ui grid'>
                    <div className='five wide column'>
                    <ListContainer header='To Do(s):' items = {this.state.toDoItems} className='four wide column'/>
                    </div>
                    <div className='five wide column'>
                    <ListContainer header='In Progress:' items = {this.state.inProgressItems} className='four wide column'/>
                    </div>
                    <div className='four wide column'>
                    <ListContainer header='Completed:' items = {this.state.completedItems} className='four wide column'/>
                    </div>
                </div>
            </div>
        )
    }
};

export default App;