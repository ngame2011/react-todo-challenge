import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TodoForm } from './components/TodoForm'
import { TodoList } from './components/TodoList'

function App() {
    const [todos, setTodos] = useState([])

    const onAddTodoItem = (item) => {
        setTodos([
            ...todos,
            {
                id: uuidv4(),
                text: item,
                completed: false,
            },
        ])
    }

    const changeItem = (id) => {
        const idx = todos.findIndex((item) => item.id === id)

        if (idx !== -1) {
            const copy = [...todos]
            copy[idx] = {
                ...copy[idx],
                completed: !copy[idx].completed,
            }

            setTodos(copy)
        }
    }

    const removeTodo = (id) => {
        setTodos((prevState) => prevState.filter((item) => item.id !== id))
    }

    return (
        <div className="App container-fluid py-5">
            <main>
                <div className="row">
                    <div className="col-12 col-md-6 col-xl-4 mx-auto">
                        <h1 className="display-1 mb-5 text-center">TODO APP</h1>
                        <TodoForm onAddItem={onAddTodoItem} />
                        <TodoList
                            items={todos}
                            onChange={changeItem}
                            onRemoveItem={removeTodo}
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App
