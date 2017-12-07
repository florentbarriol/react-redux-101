# React & Redux 101
>This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project served as a starting point for the training I gave to the Plebicom dev team.
The training aims to increase the competence of the dev team on React & Redux and make them operational to build React/Redux app.

## Requirements
* Node.js >= v6.x, download [here](https://nodejs.org/en/download)
* A powerful code editor, like [VS Code](https://code.visualstudio.com/#alt-downloads)

## How to use
* clone this repository (or the intern repo)
* execute `npm install`
* execute `npm start` to run and hack the app

## TODOS
* How to create a component : create the AboutPage component
  * you must uncomment line in App.js to view your component
* How to composing components : explode the TodosPage component in small and simple components
* How to handle event : onChange listener on the todo input and onSubmit on the new todo form with simple console.log
* How to use state and props : add local state in top Todos component to store new todos and pass stored todos into children component to display them
* Component lifecycle
* React DevTools
* Redux logger
* How to create redux actions : create ADD_TODO and REMOVE_TODO actions with their actions types
* How to create a redux reducer : create the todos reducer to store your todos and handle todos actions
* How to connect a component to the store : connect your components to store (mapStateToProps), bind addTodo and removeTodo actions in your components(mapDispatchToProps), display the stored todos, bind the remove action with the onClick on a todo in the list
* How to create async actions : create an action to fetch an external api (with api-middleware-redux)


