const { todos } = require('../data/todos.json');

const getTodos = () => {
    return todos
}

const getTodoById = (id) => {
    return todos.find(t => t.id === id)
}
const deleteTodo = (id) => {
    const index = todos.findIndex(t => t.id === id);
    if (index > -1) {
        todos.splice(index, 1);
        return 1;
    }
    return 0;
}
const addTodo = (todo) => {
    console.log(todo)
    todos.push(todo)
    return todos;
}
module.exports = {
    getTodos,
    getTodoById,
    deleteTodo,
    addTodo
}