import React from 'react';

import './TodosPage.css';

const initialTodo = {
    id: -1,
    title: '',
    completed: false,
    userId: -1
}

class TodosPage extends React.Component {
    render() {
        return (
            <main>
                <h2>Here yours todos !</h2>
                <ul className="todos-list">
                    <li>Play Babyfoot</li>
                    <li>Buy some beer</li>
                </ul>
                <form>
                    <label htmlFor="todo">Enter your new todo : </label>
                    <input type="text" name="title" />
                    <button type="submit">OK</button>
                </form>
            </main>
        );
    }
}

export default TodosPage;