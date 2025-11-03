const Express = require('express');
const router = Express.Router();
const { RespondentRegister, RespondentLogin } = require('../Controller/RespondentController');

router.post('/register', RespondentRegister);
router.post('/login', RespondentLogin);

module.exports = router;