const express = require('express');
const router = express.Router();

const AuthController = require('./../controllers/authController');

router.post('/LoginAluno',AuthController.loginAluno);
router.post('/LoginProfessor',AuthController.loginProfessor);
router.post('/LoginSecretaria',AuthController.loginSecretaria);

router.post('/Logout',AuthController.logout);




module.exports = router;