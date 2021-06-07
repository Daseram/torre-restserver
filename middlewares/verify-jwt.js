const { response } = require('express');
const jwt = require('jsonwebtoken');

const verifyJWT = (req, res = response, next) => {

    const token = req.header('token');
    if(!token) {
        return res.status(401).json({
            msg: "Unauthorized"
        })
    }

    try {
        const {uid} = jwt.verify(token, process.env.SECRET_KEY);

        req.uid = uid;
        next();
    } catch(error) {
        return res.status(401).json({
            msg: "Unauthorized"
        })
    }

}

module.exports = {
    verifyJWT
}