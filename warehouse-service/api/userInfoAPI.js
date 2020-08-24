const { UserInfo } = require('../db/schema');
const UserInfoApi = {
    GetUserContacts(req, res) {
        const { phone, contacts } = req.body;
        UserInfo.create({
            phone: phone,
            contacts: contacts,
        }).then(() => {
            return res.json({
                code: 200,
                msg: "请求成功"
            })
        }, () => {
            UserInfo.update({ phone }, {
                $set: { 'contacts': contacts }
            }).then(() => {
                return res.json({
                    code: 402,
                    msg: "更新成功"
                })
            }, () => {
                return res.json({
                    code: 401,
                    msg: "请求失败"
                })
            })
        })
    }
}
module.exports = UserInfoApi