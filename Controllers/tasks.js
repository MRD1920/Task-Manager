const getallTasks = (req,res)=>{
    res.send('create all Tasks')
}
const createTask = (req,res)=>{
    console.log(req.body);
    res.status(200).json(req.body);
    res.end();
}

const getTask = (req,res)=>{
    res.json({
        id: req.params.id
    })
}

const updateTask = (req,res)=>{
res.send('create Task')
}

const deleteTask = (req,res)=>{
res.send('delete Task')
}


module.exports = {getallTasks,createTask,updateTask,deleteTask,getTask}