import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    test('renders initial todos', () => {
        render(<TodoList />);
        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Add a todo');
        const button = screen.getByText('Add Todo');

        fireEvent.change(input, { target: { value: 'Test New Todo' } });
        fireEvent.click(button);

        expect(screen.getByText('Test New Todo')).toBeInTheDocument();
    });

    test('toggles a todo', () => {
        render(<TodoList />);
        const todoText = screen.getByText('Learn React');
        const listItem = todoText.closest('li');

        // Initially not completed
        expect(listItem).toHaveStyle('text-decoration: none');

        // Click to toggle
        fireEvent.click(listItem);
        expect(listItem).toHaveStyle('text-decoration: line-through');

        // Click to toggle back
        fireEvent.click(listItem);
        expect(listItem).toHaveStyle('text-decoration: none');
    });

    test('deletes a todo', () => {
        render(<TodoList />);
        const todoText = screen.getByText('Build a Todo App');
        const listItem = todoText.closest('li');
        const deleteButton = within(listItem).getByText('Delete'); // Or simpler query if button is direct child

        // Alternative robust way:
        const buttons = screen.getAllByText('Delete');
        const specificDeleteButton = buttons[1]; // Since 'Build a Todo App' is 2nd item

        fireEvent.click(specificDeleteButton);

        expect(screen.queryByText('Build a Todo App')).not.toBeInTheDocument();
    });
});

import { within } from '@testing-library/react';
