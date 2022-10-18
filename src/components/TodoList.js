import React from 'react'

export const TodoList = ({ items, onChange, onRemoveItem }) => {
    const onChangeStateHandler = (e) => {
        const { value } = e.target

        onChange(value)
    }

    const onDeleteHandler = (id) => () => {
        onRemoveItem(id)
    }

    return (
        <div className="overflow-auto h-50">
            <ul className="list-unstyled px-1">
                {items.map((item) => (
                    <li
                        key={item.id}
                        className="d-flex justify-content-between align-items-center mb-1"
                    >
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id={`input_${item.id}`}
                                name="todo[]"
                                value={item.id}
                                checked={item.completed}
                                onChange={onChangeStateHandler}
                            />
                            <label
                                htmlFor={`input_${item.id}`}
                                className="form-check-label text-uppercase user-select-none"
                            >
                                {item.text}
                            </label>
                        </div>
                        <button
                            className="btn btn-sm btn-danger"
                            aria-label={item.id}
                            onClick={onDeleteHandler(item.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
