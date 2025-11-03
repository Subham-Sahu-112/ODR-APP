const Express = require('express');
const router = Express.Router();
const { NeutralRegister, NeutralLogin } = require('../Controller/NeutralController');

router.post('/register', NeutralRegister);
router.post('/login', NeutralLogin);

module.exports = router;