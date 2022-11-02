const express = require('express');
const router = express.Router();
const { deleteTodo, getTodoById, getTodos, addTodo } = require('../controller/todos')
const logger = (req, res, next) => {
    console.log('Calling server with params: ', req.params);
    next();
}
router.get('/', [logger, (req, resp) => {
    resp.json(getTodos());
}]);
router.get('/:id([0-9]+)', [logger, (req, resp) => {
    const { id } = req.params;
    resp.json(getTodoById(id));
}]);

router.delete('/:id([0-9]+)', [logger, (req, resp) => {
    const { id } = req.params;
    const deleted = deleteTodo(id);
    resp.status(deleted ? 200 : 400).json(deleted ? deleted : null);
}]);
router.post('/', [logger, (req, resp) => {
    const body = req.body;
    
    resp.json(addTodo(body));
}]);

module.exports = router