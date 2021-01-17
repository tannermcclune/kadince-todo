const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { forwardAuthenticated } = require('../config/auth');

// Login Routes
router.get('/login', forwardAuthenticated, authController.getLogin);
router.post('/login', authController.postLogin);

// Register Routes
router.get('/register', forwardAuthenticated, authController.getRegister);
router.post('/register', authController.postRegiser);

// Logout Function
router.get('/logout', authController.getLogout);

module.exports = router;
