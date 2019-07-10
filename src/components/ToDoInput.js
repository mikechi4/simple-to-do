import React from 'react';

class ToDoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    };

    setToDo = (event) => {
        this.setState({value: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addToDo({task: this.state.value, status: 'TO_DO'});
    }
    render() {
        return(
            <div className='to-do-input'>
                <form  onSubmit = {this.onSubmit} style={{textAlign: 'center'}}>
                    <label>
                        What do you need done? <br />
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