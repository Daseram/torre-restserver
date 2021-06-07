const user = require("../models/user");

const emailExist = async (email) => {
    const emailExist = await user.findOne({email});
    if(emailExist) {
        throw new Error(`${email} already exist`);
    };
}

module.exports = {
    emailExist
}