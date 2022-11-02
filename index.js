const express = require('express');
const app = express();
const todosRoutes = require('./routes/todos')
app.use(express.json());
app.use('/todos', todosRoutes);

app.listen(4000);

