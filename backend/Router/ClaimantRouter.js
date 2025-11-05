const Express = require('express');
const router = Express.Router();
const { ClaimantRegister, ClaimantLogin, ClaimantData } = require('../Controller/ClaimantController');
const ClaimantAuth = require('../middlewares/ClaimantAuth');

router.post('/register', ClaimantRegister);
router.post('/login', ClaimantLogin);

router.get('/data', ClaimantAuth, ClaimantData);

module.exports = router;