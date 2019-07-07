import React from 'react';

import ToDoItem from './ToDoItem';

class ToDoSection extends React.Component {

    renderList() {
        return this.props.toDoItems.map(item => {
            return(
                <ToDoItem toDoItem={item} key={item}/>
            );
        })
    };

    render() {
        return(
            <div className="toDoSection">
                <h2>ToDoSection</h2>
                {this.renderList()}
            </div>
        )
    }
}

export default ToDoSection;