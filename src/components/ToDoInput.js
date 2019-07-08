import React from 'react';

class ToDoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    };

    setToDo = (event) => {
        this.setState({value: event.target.value})
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addToDo(this.state.value);
    }
    render() {
        return(
            <div className='to-do-input'>
                <form  onSubmit = {this.onSubmit}>
                    <label>
                        What do you need done?
                        <input 
                            type="text" 
                            value={this.state.value} 
                            onChange={this.setToDo}
                        />
                    </label>
                    <button className='positive ui button'>Add</button>
                </form>
            </div>
        )
    }
}

export default ToDoInput;