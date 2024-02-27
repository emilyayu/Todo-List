import React, { Component } from "react";

class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ""
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(evt) {
        // Takes an input and assigns it to to the current state 
        this.setState(
           { [evt.target.name]: evt.target.value},
        )
    }


    handleSubmit(evt) {
        // calls the parent funciton addTask
        evt.preventDefault()
        if (this.state.task !== "") {
            this.props.addTask(this.state)
        }
        this.setState({task: ""})
    }
    render() {
        return (
            <div className="ToDoForm">
                <form onSubmit={this.handleSubmit}>
                    <label>Add New Task: </label>
                    <input
                        type="text"
                        name="task"
                        onChange={this.handleChange}
                        value={this.state.task}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default ToDoForm;