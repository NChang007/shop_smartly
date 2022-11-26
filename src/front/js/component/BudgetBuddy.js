import React from 'react'
import { useEffect } from 'react/cjs/react.production.min';
import {v4 as uuidv4} from 'uuid'

const BudgetBuddy = () => {
    const [input, setInput] = React.useState('')
	const [todos, setTodos] = React.useState([])
	const [editTodo, setEditTodo] = React.useState(null)

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {...item, completed: !item.completed}
                }
                return item
            })
        )
    }
    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo)
    }
    const handleDelete =({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? { title, id, completed } : todo
        );
        setTodos(newTodo)
        setEditTodo('')
    }
    React.useEffect(() => {
        if(editTodo){
            setInput(editTodo.title)
        }else {
            setInput('')
        }
    }, [setInput, editTodo]);
    const onInputChange = (e) => {
        setInput(e.target.value)
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        if(!editTodo){
            setTodos([...todos, {id: uuidv4(), title: input, completed: false}])
            setInput('')
        }else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    }

    return (
        <>
            <div className="container">
                <div className="app-wrapper">
                    <div className='header'>
                        <h1>What do you have to do??</h1>
                    </div>
                    <div>
                        <form onSubmit={onFormSubmit}>
                            <input 
                                type="text"
                                placeholder="Enter a Todo..." 
                                className="task-input" 
                                value={input}
                                required
                                onChange={onInputChange}
                            
                            />
                            <button className='button-add' type='submit'>
                                {editTodo ? 'OK' : 'ADD'}        
                            </button>
                        </form>
                    </div>
                    <div>
                        {todos.map((todo) => (
                            <li className='list-item' key={todo.id}>
                                <input 
                                    type='text' 
                                    value={todo.title} 
                                    className={`list ${todo.completed ? 'complete' : ''}`} 
                                    onChange={(e) => e.preventDefault()}
                                />
                                <button className='button-delete task-button' onClick={() => handleDelete(todo)}>
                                    <i className='fa fa-trash'></i>
                                </button>
                                
                            </li>
                        ))}
                    </div>
                    {/* <div>
                        <Footer
                            todos={todos}
                        />
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default BudgetBuddy