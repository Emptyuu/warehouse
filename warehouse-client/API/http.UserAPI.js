const install = (Vue, vm) => {

	vm.$u.UserApi = {
		// 验证token
		VerifyToken: (params) => vm.$u.post('/users/verifyToken', params),
		// 登录验证
		UserLogin: (params) => vm.$u.post('/users/login', params),
		// 注册验证
		Userregister: (params) => vm.$u.post('/users/register', params),
		// 联系人
		GetContacts : (params) => vm.$u.post('/users/contacts',params),
		// 获取首页基础信息
		GetHomeInfo : (params) => vm.$u.get('/users/gethomeinfo',params)
		
	}


	//  let verifyToken = ({token}) => vm.$u.post('/users/verifyToken',{token:token})
	// vm.$u.api = {verifyToken};
}

export default {
	install
}
