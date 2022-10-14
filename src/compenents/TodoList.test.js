import { TodoList } from './TodoList'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const items = [
    {
        id: '1',
        text: 'item',
        completed: false,
    },
    {
        id: '2',
        text: 'item 1',
        completed: false,
    },
    {
        id: '3',
        text: 'item 2',
        completed: false,
    },
]

describe('<TodoList />', () => {
    it('should render correct with passed props', () => {
        const changeFn = jest.fn()
        const removeFn = jest.fn()
        const { getByRole } = render(
            <TodoList items={[]} onChange={changeFn} onRemoveItem={removeFn} />
        )

        expect(getByRole('list')).toBeInTheDocument()
    })

    it('should render a list of items', () => {
        const changeFn = jest.fn()
        const removeFn = jest.fn()
        const { getAllByRole } = render(
            <TodoList
                items={items}
                onChange={changeFn}
                onRemoveItem={removeFn}
            />
        )

        expect(getAllByRole('listitem')).toHaveLength(items.length)
        expect(getAllByRole('button')).toHaveLength(items.length)
        expect(getAllByRole('checkbox')).toHaveLength(items.length)
    })

    it('should have an ability to remove item', () => {
        const changeFn = jest.fn()
        const removeFn = jest.fn()
        const { getByRole } = render(
            <TodoList
                items={items}
                onChange={changeFn}
                onRemoveItem={removeFn}
            />
        )
        const removeBtn = getByRole('button', { name: items[1].id })

        userEvent.click(removeBtn)
        expect(removeFn).toHaveBeenCalledWith(items[1].id)
    })

    it('should have an ability to change item state', () => {
        const changeFn = jest.fn()
        const removeFn = jest.fn()
        const { getByRole } = render(
            <TodoList
                items={items}
                onChange={changeFn}
                onRemoveItem={removeFn}
            />
        )
        const checkbox = getByRole('checkbox', { name: items[2].text })

        userEvent.click(checkbox)
        expect(changeFn).toHaveBeenCalledWith(items[2].id)
    })
})
