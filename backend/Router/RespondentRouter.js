const Express = require('express');
const router = Express.Router();
const { RespondentRegister, RespondentLogin, RespondentData } = require('../Controller/RespondentController');
const RespondentAuth = require('../middlewares/RespondentAuth');

router.post('/register', RespondentRegister);
router.post('/login', RespondentLogin);

router.get('/data', RespondentAuth, RespondentData);

module.exports = router;