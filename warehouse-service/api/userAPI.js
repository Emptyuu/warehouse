const { User } = require('../db/schema')
function UserRegister(req, res) {
    const { username, password, phone } = req.body;
    let flag = 1;
    if (!(username && password && phone)) flag = 0
    if (!(phone.length == 11)) flag = 0
    switch (flag) {
        case 0:
            return res.send({
                code: 400,
                msg: "服务器校验信息失败"
            })
            break;
    }
    console.log(phone)
    User.create({
        username: username,
        phone: phone,
        password: password,
    }).then(() => {
        return res.send({
            code: 200,
            msg: "注册成功"
        })
    }).catch(() => {
        return res.send({
            code: 401,
            msg: "当前手机号已被注册"
        })

    })
}
module.exports = {
    UserRegister
}