const Express = require('express');
const router = Express.Router();
const { AdminRegister, AdminLogin } = require('../Controller/AdminController');

router.post('/register', AdminRegister);
router.post('/login', AdminLogin);

module.exports = router;