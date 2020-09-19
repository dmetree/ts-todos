import React from 'react'
import './todoListItem.css'

interface todoListItemProps {
    todo: Todo,
    toggleTodo: ToggleTodo
}

const todoListItem: React.FC<todoListItemProps> = ({todo, toggleTodo}) =>  {
    return (
        <li>
            <label className={todo.complete ? "complete" : undefined}>
                <input 
                type="checkbox" 
                checked={todo.complete}
                onChange={() => toggleTodo(todo)}/> 
                {todo.text}
            </label>
        </li>
    )
}

export default todoListItem

