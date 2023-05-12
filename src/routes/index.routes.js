const express = require('express');
const router = express.Router();

const alunosRoutes = require('./alunos.routes');
const authRoutes = require('./auth.routes');


router.get('/test',async (req,res) => res.json({teste:'dd'}))
router.use('/aluno',alunosRoutes);
router.use('/auth',authRoutes);
// router.use('/mail')




module.exports = router;