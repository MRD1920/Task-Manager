const express = require('express');
const tasks = require('./Routes/tasks.js')
const app = express();
const port = 5000;

// just for referecne purpose
// app.get('api/v1/tasks')          ---> get all the tasks
// app.post('api/v1/tasks')         ---> create a new task
// app.get('api/v1/tasks/:id')      ---> get single task
// app.patch('api/v1/tasks/:id')     ---> update task
// app.delete('api/v1/tasks/:id)     ---> delete task

app.get('/', (req,res) => {
    res.status(200).send('Hello my name is Mriganka Dhar');
});
app.use('/api/v1/tasks',tasks);

app.listen(port,console.log(`The app is listening on port ${port}....`));
