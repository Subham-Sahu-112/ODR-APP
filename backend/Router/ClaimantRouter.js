const Express = require('express');
const router = Express.Router();
const { ClaimantRegister, ClaimantLogin } = require('../Controller/ClaimantController');

router.post('/register', ClaimantRegister);
router.post('/login', ClaimantLogin);

module.exports = router;