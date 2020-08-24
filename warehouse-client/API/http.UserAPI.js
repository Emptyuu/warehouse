const install = (Vue, vm) => {

	vm.$u.UserApi = {
		// 验证token
		VerifyToken: (params) => vm.$u.post('/users/verifyToken', params),
		// 登录验证
		UserLogin: (params) => vm.$u.post('/users/login', params),
		// 注册验证
		Userregister: (params) => vm.$u.post('/users/login', params),
		// 联系人
		GetContacts : (params) => vm.$u.post('/users/contacts',params)
	}


	//  let verifyToken = ({token}) => vm.$u.post('/users/verifyToken',{token:token})
	// vm.$u.api = {verifyToken};
}

export default {
	install
}
