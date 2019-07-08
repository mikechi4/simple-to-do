import React from 'react';

import ToDoItem from './ToDoItem';

const ListContainer = (props) => {

    const renderList = () => {
        return props.items.map(item => {
            return(
                <ToDoItem toDoItem={item} key={item}/>
            );
        })
    };

    return(
        <div className="toDoSection ui segment">
            <h2>{props.header}</h2>
            {renderList()}
        </div>
    )

}

export default ListContainer;