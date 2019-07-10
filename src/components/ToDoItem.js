import React from 'react';

import './ToDoItem.css';
const ToDoItem = (props) => {

    return (
        <div className='ui segment raised to-do-item' onClick={() => props.moveItem(props.toDoItem)}>
            {props.toDoItem.task}
        </div>
    )
}

export default ToDoItem;