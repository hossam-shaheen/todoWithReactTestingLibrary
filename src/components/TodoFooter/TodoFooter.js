import React from 'react'
import "./TodoFooter.css"
import { Link } from "react-router-dom"

function TodoFooter({
    numberOfIncompleteTasks
}) {
    return (
        <div className="todo-footer">
            <p title='numberOfIncompleteTasks'>{numberOfIncompleteTasks ? (numberOfIncompleteTasks === 1 ? `${numberOfIncompleteTasks} task left` : `${numberOfIncompleteTasks} tasks left`) : "0 task left"}</p>
            <Link to="/followers">Followers</Link>
        </div>
    )
}

export default TodoFooter
