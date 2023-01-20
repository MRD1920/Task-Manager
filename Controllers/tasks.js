const getallTasks = (req,res)=>{
    res.send('create all Tasks')
}
const createTask = (req,res)=>{
    console.log(req.body);
    res.json(req.body)
}

const updateTask = (req,res)=>{
res.send('create Task')
}

const deleteTask = (req,res)=>{
res.send('create Task')
}

const getTask = (req,res)=>{
    res.send('create Task')
}

module.exports = {getallTasks,createTask,updateTask,deleteTask,getTask}