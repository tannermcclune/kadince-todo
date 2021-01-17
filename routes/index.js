const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const homeController = require('../controllers/homeController');
const taskController = require('../controllers/taskController');


// App Landing
router.get('/', forwardAuthenticated, homeController.getIndex);

// Dashboard
router.get('/dashboard', ensureAuthenticated, taskController.getAllTasks);
router.get('/dashboard/pending', ensureAuthenticated, taskController.getPending);
router.get('/dashboard/complete', ensureAuthenticated, taskController.getComplete);

// Task Actions
router.get('/dashboard/new', ensureAuthenticated, taskController.newTask);
router.post('/dashboard/create', ensureAuthenticated, taskController.createTask);
router.get('/dashboard/task/:id', ensureAuthenticated, taskController.getTask);
router.get('/dashboard/task/:id/delete', ensureAuthenticated, taskController.deleteTask);
router.post('/dashboard/task/:id/update', ensureAuthenticated, taskController.updateTask);

router.get('/dashboard/task/:id/complete', ensureAuthenticated, taskController.completeTask);
router.get('/dashboard/task/:id/pending', ensureAuthenticated, taskController.makePending);




module.exports = router;
