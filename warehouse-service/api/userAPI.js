const { User } = require('../db/schema');
const { signToken, verifyToken } = require('../utils/jwt');
const UserApi = {
    //用户注册
    UserRegister(req, res) {
        const { username, password, phone } = req.body;
        let flag = 1;
        if (!(username && password && phone)) flag = 0
        if (!(phone.length == 11)) flag = 0
        switch (flag) {
            case 0:
                return res.json({
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
            return res.json({
                code: 200,
                msg: "注册成功"
            })
        }).catch(() => {
            return res.json({
                code: 401,
                msg: "当前手机号已被注册"
            })

        })
    },
    //用户登录
    UserLogin(req, res) {
        const { password, phone } = req.body;
        // console.log(phone, password)
        User.findOne({ phone, password }).then(result => {
            if (result) {
                return res.json({
                    code: 200,
                    token: signToken({ phone }),
                    msg: "登录成功"
                })
            } else {
                return res.json({
                    code: 400,
                    msg: "登录失败"
                })
            }
        })
    },
    // 验证token
    UserToken(req, res) {
        const { token } = req.body;
        console.log(req.headers.token) 
        if (!verifyToken(token)) {
            return res.json({
                code: 400,
                msg: "令牌失效"
            }) 
        } else {
            return res.json({
                code: 200,
                msg: "令牌验证成功"
            })
        }
    }

}
module.exports = UserApi