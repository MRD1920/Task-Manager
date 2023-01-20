const express = require('express');


const {getallTasks,createTask,updateTask,deleteTask,getTask} = require('../controllers/tasks')
const app = express();
const router = express.Router();

router.route('/').get(getallTasks).post(createTask)
router.route('/:id').post(updateTask).delete(deleteTask).get(getTask)

module.exports = router;