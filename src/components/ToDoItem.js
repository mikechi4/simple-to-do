import React from 'react';

const ToDoItem = (props) => {
    return (
        <div className='ui segment raised to-do-item'>
            {props.toDoItem}
        </div>
    )
}

export default ToDoItem;