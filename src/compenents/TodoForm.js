import React from 'react'

export const TodoForm = ({ onAddItem }) => {
    const onSubmitFormHandler = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        onAddItem(formData.get('todoInput'))
        e.target.querySelector('input[name="todoInput"]').value = ''
    }

    return (
        <form name="todoForm" className="mb-4" onSubmit={onSubmitFormHandler}>
            <label className="form-label" htmlFor="todoInput">
                Add new TODO item:
            </label>
            <div className="input-group input-group-lg">
                <input
                    className="form-control"
                    type="text"
                    name="todoInput"
                    id="todoInput"
                    required
                    minLength={4}
                    autoComplete="off"
                />
                <button className="btn btn-outline-secondary" type="submit">
                    Add Item
                </button>
            </div>
        </form>
    )
}
