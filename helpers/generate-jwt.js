const jwt = require('jsonwebtoken')

const generateJWT = (uid) => {
    return new Promise( (resolve, reject) => {
        const payload = {uid};
        jwt.sign( payload, process.env.SECRET_KEY, { 
            expiresIn: '6h'
        }, (err, token) => {
            if(err) {
                console.log(err);
                reject('JWT Failed');
            } else {
                resolve(token);
            }
        })
    });
}

module.exports = {
    generateJWT
}