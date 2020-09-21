import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'


const initialTodoes: Array<Todo> = [
  {
    text: "Have coffee",
    complete: true
  },
  {
    text: "Feed the birds",
    complete: true
  },
  {
    text: "Feed the cat",
    complete: true
  },
  {
    text: "Take a walk",
    complete: false
  }
];

const App: React.FC = () => {
  const [todos, setTodoes] = useState(initialTodoes);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })
    setTodoes(newTodos)
  }

  const addTodo: addTodo = newTodo => {
    newTodo.trim() !== '' && setTodoes([
      ...todos,
      {
        text: newTodo,
        complete: false
      }
    ])
  }
 
  return (
    <Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <AddTodoForm addTodo={addTodo}/>
    </Fragment>
  );
}

export default App;
