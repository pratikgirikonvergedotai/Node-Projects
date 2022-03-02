const express = require('express')
const router = express.Router()

// importing controller
const { login, dashboard } = require('../controllers/main')
// importing auth middleware
const authMiddleware = require('../middleware/auth')

// get route for /dashboard and using middleware for auth and controller for dashboard
router.route('/dashboard').get(authMiddleware, dashboard)
// post route for /login and controller for login
router.route('/login').post(login)

module.exports = router
