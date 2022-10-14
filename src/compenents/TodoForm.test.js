import { TodoForm } from './TodoForm'
import { fireEvent, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('<TodoForm />', () => {
    it('should render correct', () => {
        const fn = jest.fn()
        const { getByRole } = render(<TodoForm onAddItem={fn} />)

        expect(getByRole('form')).toBeInTheDocument()
        expect(getByRole('textbox')).toBeInTheDocument()
        expect(getByRole('button')).toBeInTheDocument()
    })

    it('should call a callback with a new todo item', () => {
        const fn = jest.fn()
        const { getByRole } = render(<TodoForm onAddItem={fn} />)

        const input = getByRole('textbox')
        const form = getByRole('form')

        userEvent.type(input, 'qwerty')
        fireEvent.submit(form)

        expect(fn).toHaveBeenCalledWith('qwerty')
    })
})
