const express = require('express');
const router = express.Router();

// const { register, login, emailSend } = require('./../controllers/authControler');


router.use('/register');
router.use('/login');
router.use('/mail')




module.exports = router;