const express = require('express');
const tasks = require('./Routes/tasks.js')
const app = express();
const port = 5000;
const connectDB = require('./db/connection')
require('dotenv').config()


// just for referecne purpose
// app.get('api/v1/tasks')          ---> get all the tasks
// app.post('api/v1/tasks')         ---> create a new task
// app.get('api/v1/tasks/:id')      ---> get single task
// app.patch('api/v1/tasks/:id')     ---> update task
// app.delete('api/v1/tasks/:id)     ---> delete task

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/', (req,res) => {
    res.status(200).send('Hello my name is Mriganka Dhar');
});
app.use('/api/v1/tasks',tasks);

// stating the app logic
const start = async ()=>{
    try {
        //if connection to the db is success then we start listening
        await connectDB(process.env.MONGO_URI);
        app.listen(port,console.log(`The app is listening on port ${port}....`));  
        
    } catch (error) {
        console.log(error)   
    }
}

start()