const Express = require('express');
const router = Express.Router();
const AdminAuth = require("../middlewares/AdminAuth");
const { AdminRegister, AdminLogin, AdminData } = require('../Controller/AdminController');

router.post('/register', AdminRegister);
router.post('/login', AdminLogin);

router.get('/data', AdminAuth, AdminData);

module.exports = router;