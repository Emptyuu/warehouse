const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    phone: {        //手机号*
        type: String,
        require: true,
        unique: true
    },
    contacts:{
        type:String
    }
})

const UserInfo = mongoose.model("UserInfo", userSchema, "UserInfo")
module.exports = UserInfo