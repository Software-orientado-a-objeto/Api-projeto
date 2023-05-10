const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('knex');

// const User = require('./../models/user');

const creatRefreshToken = (user) => {
    return jwt.sign(user, 'ew3452trwtg234t3vs@efw33%$#5',{
        expiresIn:'7d'
    })
}

const createAccessToken = (user) =>{
    return jwt.sign(user, 'ew3452trwtg234t3vs@efw33%$#5',{
      expiresIn: '11m'
    })
}


const userCtrl = {

    /**
     * login de usuario
     */
    loginAluno: async (req,res) => {
        try {
            const {matricula} = req.body;

            const aluno = await knex('alunos').select('*');


            const user = await User.findOne({email});
            if (!user) return res.status(400).json({msg:'user does not exist'});

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).json({msg:'incorret password'});

            const accessToken = createAccessToken({id: user._id});
            const refreshToken = creatRefreshToken({id: user._id});

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                path:'/user/refresh_token',
                maxAge: 7*24*60*60*1000 // 7d
            });


            return res.json({accessToken});

        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    },

    loginProfessor: async (req,res) => {
        try {
            const {matricula} = req.body;
            const professor = await knex('professor').select('*');

            const user = await User.findOne({email});
            if (!user) return res.status(400).json({msg:'user does not exist'});

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).json({msg:'incorret password'});

            const accessToken = createAccessToken({id: user._id});
            const refreshToken = creatRefreshToken({id: user._id});

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                path:'/user/refresh_token',
                maxAge: 7*24*60*60*1000 // 7d
            });


            return res.json({accessToken});

        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    },

    loginSecretaria: async (req,res) => {
        try {
            const {matricula} = req.body;

            const secretaria =  await knex('secretaria').select('*');

            const user = await User.findOne({email});
            if (!user) return res.status(400).json({msg:'user does not exist'});

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).json({msg:'incorret password'});

            const accessToken = createAccessToken({id: user._id});
            const refreshToken = creatRefreshToken({id: user._id});

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                path:'/user/refresh_token',
                maxAge: 7*24*60*60*1000 // 7d
            });


            return res.json({accessToken});

        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    },


    /**
     * controller logout
     */
    logout: async (req, res) => {
        try {
            res.clearCookie('refreshToken', {path:'/user/refresh_token'});
            return res.json({msg:'logged out'});

        } catch (err) {
            return res.status(500).json({msg:err.message});
        }
    },


    /**
     * refresh token
     */
    refreshToken: (req, res) => {
        try {
            const rf_token = req.cookies.refreshtoken;
            if(!rf_token) return res.status(400).json({msg: "Please Login or Register"});

            jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if (err) return res.status(400).json({msg: "Please Login or Register"});

                const accessToken = createAccessToken({id: user.id});

                res.json({user, accessToken});
            });

        } catch (err) {
            return res.status(500).json({msg: err.message});
        }
    },


    /**
     * pegar usuarios
     */
    getUser: async(req, res) =>{
        try {
            const user = await User.find().select('-password')
            if(!user) return res.status(500).json({msg:"User does not exist"})
    
            res.json(user)

        } catch (error) {
            return res.status(500).json({msg:err.message})
        }
    },


    /**
     * pegar usuarios id
     */
    getUserById: async(req, res) =>{
        try {
            const user = await User.findById({user: req.params.id}).select('-password');
            if(!user) return res.status(500).json({msg:"User does not exist"})
    
            res.json(user)

        } catch (error) {
            return res.status(500).json({msg:err.message})
        }
    },



}

module.exports = userCtrl;