const express = require('express');
const {postTodo,getTodo} =require('../controller/todoController')
const router = express.Router();

router.route('/').get(getTodo).post(postTodo)

module.exports = router