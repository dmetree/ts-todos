import React, {useState, ChangeEvent, FormEvent} from 'react'


interface AddTodoFormProps {
    addTodo: addTodo;
}


const AddTodoForm: React.FC<AddTodoFormProps> = ({addTodo}) => {

    const [newTodo, setNewTodo] = useState('');

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value)
    }

    const submitHandler = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addTodo(newTodo)
        setNewTodo('')
    }
 
    return (
        <form>
            <input type="text" value={newTodo} onChange={changeHandler}/>
            <button type='submit' onClick={submitHandler}>Add Todo</button>
        </form>
    )
}

export default AddTodoForm
