const Task = require('../models/tasks')


// For getting all the pending tasks stored in database

const getallTasks = async (req,res)=>{
   try{
    const tasks = await Task.find({})
    res.status(200).json({tasks})
   }
   catch(error){
    res.send({msg:error})
   }
}
// For creating a task 
const createTask = async (req,res)=>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task});   
    } catch (error) {
        res.status(500).send({msg : error})
    }
}

// To show a task by its id 
const getTask = async (req,res)=>{
    try {
        const {id:taskId} = req.params;
        const task = await Task.findOne({_id:taskId})
        if(!task){
            return res.status(404).json({msg:`No task found with id : ${taskId}`})
        }
        res.status(200).json({task})
    }
    catch(error)
    {
        res.status(404).json({msg: error})
    }
}

// To update a task with specific id 
const updateTask = async (req,res)=>{

    try {
        const {id:taskId} = req.params
        const ifupdated = await Task.findOneAndUpdate({_id : taskId}, req.body, 
        {
            runValidators : true,
            new : true
        })
    
        if(!ifupdated)
        return res.status(400).json({msg : `No task found with id: ${taskId}`})

        res.status(200).json({ifupdated})
        
    } catch (error) {
        res.status(404).json({msg: error}) 
    }
}


// To delete one task with specific id
const deleteTask = async (req,res)=>{
try{
    const {id:taskId} = req.parmas
    const ifDeleted  = await Task.findOneAndDelete({_id:taskId})
    if(!ifDeleted)
    return res.status(404).json({msg: `No task found with task id: ${taskId}`})

    res.send(200).json({ifDeleted})
}
catch(error){
    res.status(404).json({msg : error})
}
}


module.exports = {getallTasks,createTask,updateTask,deleteTask,getTask}