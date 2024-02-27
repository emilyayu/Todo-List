import React, { Component } from "react"; 
import "./task.css"

class Task extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            taskName: this.props.task.task,
            isDone: false
        }
        this.handleEdit = this.handleEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.editTask = this.editTask.bind(this)
        this.handleDone=this.handleDone.bind(this)
    }
    editTask(evt) {
        evt.preventDefault()
        this.props.editTask(this.props.task.id, this.state.taskName)
        this.setState({isEditing: false})
    }
    handleEdit() {
        //sets state to editing
        this.setState(
            {isEditing: !this.state.isEditing}
        )
    }
    handleDelete() {
        this.props.deleteTask(this.props.task.id)
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleDone() {
        this.setState({isDone: !this.state.isDone})
    }

    render() {
        const isEdit =
            <form onSubmit={this.editTask}>
                <input
                    type="text"
                    name="taskName"
                    value={this.state.taskName}
                    onChange={this.handleChange}
                />
                <button>Done</button>
            </form>
        const notEdit =
            <div>
                {/* <div onClick={this.handleDone}> */}
                    {this.state.isDone ?
                        <s>{this.state.taskName}</s> :
                        this.state.taskName}
                {/* </div> */}
                < button onClick = { this.handleEdit } > Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
            </div>

        const retTask = (this.state.isEditing?(isEdit) :(notEdit))
        return (
            <div className="Task">
                {retTask}
            </div>
        )
    }
}

export default Task;