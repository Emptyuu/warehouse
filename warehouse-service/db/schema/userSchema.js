const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {      //用户名*
        type: String,
        required: true,
        minlength: 2,
        maxlength: 5,
    },
    phone: {        //手机号*
        type: String,
        require: true,
        unique: true
    },
    password: {      //密码*
        type: String,
        require: true,
    },
    state: {         //状态 0 可用 1 不可用
        require: true,
        type: Number,
        default: 0
    },
    subordinate: {   //旗下用户  JSON
        type: String
    },
    store: {         //旗下仓库  JSON
        type: String
    }
})

const User = mongoose.model("User", userSchema, "User")
// User.create({
//     username:"admin",
//     phone:'18021041066',
//     password:"123456",
//     subordinate:`[{
//         "username":"emptyu",
//         "password":"123456",
//         "role":"1"
//     }]`,
//     store:`[{
//         "store":"abcde",
//         "control":"emptyu"
//     }]`
// })

module.exports = User