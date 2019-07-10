import React from 'react';

import ToDoItem from './ToDoItem';

const ListContainer = (props) => {

    const renderList = () => {
        console.log(props)
        return props.items.map(item => {
            return(
                <ToDoItem toDoItem={item} key={item.task} moveItem={props.moveItem}/>
            );
        })
    };

    return(
        <div className="to-do-section ui segment">
            <h2>{props.header}</h2>
            {renderList()}
        </div>
    )

}

export default ListContainer;