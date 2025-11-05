const Express = require('express');
const router = Express.Router();
const { NeutralRegister, NeutralLogin, NeutralData } = require('../Controller/NeutralController');
const NeutralAuth = require('../middlewares/NeutralAuth');

router.post('/register', NeutralRegister);
router.post('/login', NeutralLogin);

router.get('/data', NeutralAuth, NeutralData)

module.exports = router;