import { combineReducers } from 'redux';

/*
    Todo object content
    todo = {
        userId: 1,
        id: 123,
        title: "mon texte",
        completed: false
    }
*/

// manage todos in todos store
const todos = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    todos
});