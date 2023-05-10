const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {

    try {
        const token = req.header("Authorization");
        if(!token) return res.status(400).json({msg:"Invalid Authentication"});

        jwt.verify(token, 'ew3452trwtg234t3vs@efw33%$#5', (err, user) => {
            if (err) return res.status(400).json({msg:'invalid authentication'});

            req.user = user;
            next();
        });
    } catch (err) {
        return res.status(500).json({msg:err.message});
    }
}

module.exports = auth