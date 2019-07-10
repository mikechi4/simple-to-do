import React from 'react';

import ToDoInput from './ToDoInput';
import ListContainer from './ListContainer';

import './App.css';
class App extends React.Component {
    state = {
        toDoItems: [],
        inProgressItems: [],
        completedItems: []
    };

    addToDoItem = (item) => {
        this.setState({toDoItems: [...this.state.toDoItems, item]})
    }

    moveItem = (item) => {
        let itemCopy = Object.assign({}, item);
        switch(itemCopy.status) {
            case 'TO_DO':
                itemCopy.status = 'IN_PROGRESS';
                this.setState({
                    toDoItems: this.removeItemFromList(this.state.toDoItems, itemCopy),
                    inProgressItems: [...this.state.inProgressItems, itemCopy]
                })
                break;
            case 'IN_PROGRESS':
                itemCopy.status = 'COMPLETED';
                this.setState({
                    inProgressItems: this.removeItemFromList(this.state.inProgressItems, itemCopy),
                    completedItems: [...this.state.completedItems, itemCopy]
                })
                break;
            case 'COMPLETED':
                break;
            default: return
        }
    }

    removeItemFromList = (list, item) => {
        let newList = [...list];
        return newList.filter((toDo) => {
            return toDo.task !== item.task
        })
    }
    render() {
        return (
            <div className='app ui container segment'>
                <div className='app__add-to-do'>
                    <ToDoInput addToDo={this.addToDoItem}/>
                </div>
                <div class="ui divider"></div>
                <div className='app__body ui grid'>
                    <div className='five wide column'>
                    <ListContainer header='To Do(s):' items = {this.state.toDoItems} className='four wide column' moveItem={this.moveItem}/>
                    </div>
                    <div className='five wide column'>
                    <ListContainer header='In Progress:' items = {this.state.inProgressItems} className='four wide column' moveItem={this.moveItem}/>
                    </div>
                    <div className='five wide column'>
                    <ListContainer header='Completed:' items = {this.state.completedItems} className='four wide column' moveItem={this.moveItem}/>
                    </div>
                </div>
            </div>
        )
    }
};

export default App;