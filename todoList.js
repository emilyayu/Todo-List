import React, { Component } from "react";
import ToDoForm from "./form";
import uuid4 from "uuid4";
import Task from "./task";

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: []  //{task:"", key:""", id: ""} 
        }
        this.addTask = this.addTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.editTask = this.editTask.bind(this)
    }

    addTask(task) {
        const unqKey = uuid4()
        const newTask = {
            task: task.task,
            key: unqKey,
            id: unqKey
        }
        this.setState({taskList: [...this.state.taskList, newTask]})
    }
    deleteTask(taskID) {
        this.setState(
            {
                taskList: this.state.taskList.filter(
                    el =>(el.id !== taskID)
                )
            }
        )
    }
    editTask(editId, editTask) {
        console.log("edit function in todoList", editId, editTask)
        let editList = this.state.taskList.map(
            taskEl => {
                console.log(taskEl.id)
                if (taskEl.id === editId) {
                    return { ...taskEl, task: editTask }
                }
                return {taskEl}
            }
            )
        this.setState({
            taskList: editList
        })
    }
    render() {
        let dispTask = this.state.taskList.map(
            MapTask => (
                <Task key={ MapTask.key} task={MapTask} deleteTask={ this.deleteTask} editTask = {this.editTask} />
            )
                
        )
        return (
            <div className="ToDoList">
                <h1>Todo List</h1>
                {dispTask}

                <ToDoForm addTask={this.addTask} />
            </div>
        )
    }
}

export default ToDoList;